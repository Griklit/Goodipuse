<section>
    <input type="file" alt={$_('module.image.steganography.upload_file_alt')} accept="image/*" on:change={uploadFile}>
    <div class="output">
        {#each canvasList as canvas}
            <div class="win11-ui-card-surface-can-press">
                <p>{canvas[1].name}</p>
                <canvas style="width: {Math.max(image_width,192)}px;" bind:this={canvas[0]}/>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
    import {
        type handlerFunc,
        contrastStretching,
        autoContrastStretching,
        redChannel, greenChannel, blueChannel, alphaChannel,
        fullRed, fullGreen, fullBlue, fullAlpha,
        notRed, notGreen, notBlue, notAlpha,
        redOdd, greenOdd, blueOdd,
        grayPixel,
    } from "./handlers";
    import '$lib/styles/win11-ui/card.css'

    type handler = {
        name: string,
        func: handlerFunc
    }

    const handlers: Array<handler> = [
        {
            name: $_('module.image.steganography.raw'),
            func: async (_) => {
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_auto'),
            func: autoContrastStretching
        }, {
            name: $_('module.image.steganography.contrast_stretching_0_31'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 0, 32)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_32_63'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 32, 64)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_64_95'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 64, 96)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_96_127'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 96, 128)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_128_159'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 128, 160)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_160_191'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 160, 192)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_192_223'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 192, 224)
            }
        }, {
            name: $_('module.image.steganography.contrast_stretching_224_255'),
            func: async (data: Uint8ClampedArray) => {
                await contrastStretching(data, 224, 256)
            }
        }, {
            name: $_('module.image.steganography.red_channel'),
            func: redChannel,
        }, {
            name: $_('module.image.steganography.green_channel'),
            func: greenChannel,
        }, {
            name: $_('module.image.steganography.blue_channel'),
            func: blueChannel,
        }, {
            name: $_('module.image.steganography.alpha_channel'),
            func: alphaChannel,
        }, {
            name: $_('module.image.steganography.pure_red'),
            func: fullRed,
        }, {
            name: $_('module.image.steganography.without_red'),
            func: notRed,
        }, {
            name: $_('module.image.steganography.pure_green'),
            func: fullGreen,
        }, {
            name: $_('module.image.steganography.without_green'),
            func: notGreen,
        }, {
            name: $_('module.image.steganography.pure_blue'),
            func: fullBlue,
        }, {
            name: $_('module.image.steganography.without_blue'),
            func: notBlue,
        }, {
            name: $_('module.image.steganography.pure_alpha'),
            func: fullAlpha,
        }, {
            name: $_('module.image.steganography.without_alpha'),
            func: notAlpha,
        }, {
            name: $_('module.image.steganography.red_odd'),
            func: redOdd,
        }, {
            name: $_('module.image.steganography.green_odd'),
            func: greenOdd,
        }, {
            name: $_('module.image.steganography.blue_odd'),
            func: blueOdd,
        }, {
            name: $_('module.image.steganography.gray_pixel'),
            func: grayPixel,
        },
    ]

    let file: File | null = null;
    let image: HTMLImageElement | null = null;
    let image_width: number = 0;
    let image_height: number = 0;
    let canvasList: Array<[HTMLCanvasElement | null, handler]> = handlers.map(handler => {
        return [null, handler];
    });


    async function render() {
        canvasList.map(async ([canvas, handler]) => {
            if (!canvas) return;
            canvas.width = image_width;
            canvas.height = image_height;
            const ctx = canvas.getContext('2d');
            if (!ctx || !image) return;
            ctx.drawImage(image, 0, 0);
            let imageData = ctx.getImageData(0, 0, image.width, image.height);
            await handler.func(imageData.data);
            ctx.putImageData(imageData, 0, 0);
        })
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

    div.output {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;

    }

    canvas {
        max-width: 16rem;
    }
</style>
