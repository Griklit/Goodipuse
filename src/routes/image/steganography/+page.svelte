<section>
    <input type="file" alt="上传图片" accept="image/*" on:change={uploadFile}>
    <div class="output">
        {#each canvasList as [canvas, handler]}
            <div class="win11-ui-card-surface-can-press">
                <p>{handler.name}</p>
                <canvas style="width: {Math.max(image_width,192)}px;" bind:this={canvas}/>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    import {type handler, handlers} from "./handlers";
    import '$lib/styles/win11-ui/card.css'

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
