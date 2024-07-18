<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.image.steganography.title')}</title>
    <meta name="description" content={$_('module.image.steganography.description')}/>
</svelte:head>


<section>
    <button class="enlarger" style={enlargerVisible?"":"display:none"} on:click={closeEnlarger}>
        <canvas class="enlarger" bind:this={enlarger}/>
    </button>
    <input type="file" alt={$_('module.image.steganography.upload_file_alt')} accept="image/*" on:change={uploadFile}>
    <div class="output">
        {#each canvasList as canvas,i}
            <button class="win11-ui-card-surface-can-press card" on:click={()=>enlarge(i)}>
                {canvas[1].name}
                <canvas class="card" bind:this={canvas[0]}/>
            </button>
        {/each}
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
    import {
        type renderer,
        contrastStretching, autoContrastStretching,
        // redChannel, greenChannel, blueChannel, alphaChannel,
        redChannelAutoContrastStretching, greenChannelAutoContrastStretching,
        blueChannelAutoContrastStretching, alphaChannelAutoContrastStretching,
        pureRed, pureGreen, pureBlue, pureAlpha,
        withoutRed, withoutGreen, withoutBlue, withoutAlpha,
        redOdd, greenOdd, blueOdd, alphaOdd,
        grayPixel, hash, noiseBit4,
    } from "./renderers";
    import '$lib/styles/win11-ui/card.css'

    type handler = {
        name: string,
        renderer: renderer
    }

    const handlers: Array<handler> = [
        {
            name: $_('module.image.steganography.raw'),
            renderer: async (_) => {
            },
        }, {
            name: $_('module.image.steganography.contrast_stretching_auto'),
            renderer: autoContrastStretching
        }, {
            name: $_('module.image.steganography.red_channel_contrast_stretching_auto'),
            renderer: redChannelAutoContrastStretching,
        }, {
            name: $_('module.image.steganography.green_channel_contrast_stretching_auto'),
            renderer: greenChannelAutoContrastStretching,
        }, {
            name: $_('module.image.steganography.blue_channel_contrast_stretching_auto'),
            renderer: blueChannelAutoContrastStretching,
        }, {
            name: $_('module.image.steganography.alpha_channel_contrast_stretching_auto'),
            renderer: alphaChannelAutoContrastStretching,
        }, {
            name: $_('module.image.steganography.pure_red'),
            renderer: pureRed,
        }, {
            name: $_('module.image.steganography.pure_green'),
            renderer: pureGreen,
        }, {
            name: $_('module.image.steganography.pure_blue'),
            renderer: pureBlue,
        }, {
            name: $_('module.image.steganography.pure_alpha'),
            renderer: pureAlpha,
        }, {
            name: $_('module.image.steganography.without_red'),
            renderer: withoutRed,
        }, {
            name: $_('module.image.steganography.without_green'),
            renderer: withoutGreen,
        }, {
            name: $_('module.image.steganography.without_blue'),
            renderer: withoutBlue,
        }, {
            name: $_('module.image.steganography.without_alpha'),
            renderer: withoutAlpha,
        }, {
            name: $_('module.image.steganography.red_odd'),
            renderer: redOdd,
        }, {
            name: $_('module.image.steganography.green_odd'),
            renderer: greenOdd,
        }, {
            name: $_('module.image.steganography.blue_odd'),
            renderer: blueOdd,
        }, {
            name: $_('module.image.steganography.alpha_odd'),
            renderer: alphaOdd,
        }, {
            name: $_('module.image.steganography.gray_pixel'),
            renderer: grayPixel,
        }, {
            name: $_('module.image.steganography.hash_1'),
            renderer: async (data: Uint8ClampedArray) => {
                await hash(data, 17, 251)
            },
        }, {
            name: $_('module.image.steganography.hash_2'),
            renderer: async (data: Uint8ClampedArray) => {
                await hash(data, 227, 127)
            },
        }, {
            name: $_('module.image.steganography.hash_random'),
            renderer: async (data: Uint8ClampedArray) => {
                await hash(data, Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
            },
        }, {
            name: $_('module.image.steganography.noise_4bit'),
            renderer: noiseBit4,
        }, {
            name: $_('module.image.steganography.contrast_stretching_0_31'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 0, 32)
            },
        }, {
            name: $_('module.image.steganography.contrast_stretching_32_63'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 32, 64)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_64_95'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 64, 96)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_96_127'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 96, 128)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_128_159'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 128, 160)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_160_191'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 160, 192)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_192_223'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 192, 224)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_224_255'),
            renderer: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 224, 256)
            }
        },
    ]

    let file: File | null = null;
    let image: HTMLImageElement | null = null;
    let image_width: number = 0;
    let image_height: number = 0;
    let canvasList: Array<[HTMLCanvasElement | null, handler]> = handlers.map(handler => {
        return [null, handler];
    });
    let enlargerVisible: boolean = false;
    let enlarger: HTMLCanvasElement;

    async function enlarge(index: number) {
        let cvs = canvasList[index][0];
        if (!cvs) return;
        enlargerVisible = true;
        console.log(enlarger);
        enlarger.width = cvs.width;
        enlarger.height = cvs.height;
        const ctx = enlarger.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(cvs, 0, 0);
        console.log(123456789);

    }

    async function closeEnlarger() {
        enlargerVisible = false;
    }

    async function render() {
        for (let i = 0; i < canvasList.length; i++) {
            const [canvas, handler] = canvasList[i];
            if (!canvas) continue;
            canvas.width = image_width;
            canvas.height = image_height;
            const ctx = canvas.getContext('2d');
            if (!ctx || !image) continue;
            ctx.drawImage(image, 0, 0);
            let imageData = ctx.getImageData(0, 0, image.width, image.height);
            await handler.renderer(imageData.data);
            ctx.putImageData(imageData, 0, 0);
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    async function uploadFile(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            file = input.files[0];
        }
        if (!file) return;
        image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = async () => {
            if (!image) {
                return;
            }
            image_width = image.width;
            image_height = image.height;
            await render();
        }
    }
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button.enlarger {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        align-items: center;
        padding: 8rem;
    }

    canvas.enlarger {
        object-fit: contain;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        background-image: url('/assets/TransparentTextures.svg');
        background-repeat: repeat;
        background-size: auto;
    }

    div.output {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: 1rem;
    }

    button.card {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    canvas.card {
        width: 100%;
        scroll-margin-top: 3rem;
    }
</style>
