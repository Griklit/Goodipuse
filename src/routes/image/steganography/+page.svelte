<section>
    <input type="file" alt="上传图片" accept="image/*" on:change={uploadFile}>
    <div class="output">
        {#each canvasList as [canvas, handler]}
            <div class="card">
                <p>{handler.name}</p>
                <canvas style="width: {image_width}px;" bind:this={canvas}/>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    import {type handlerWithInfo, handlers} from "./handlers";

    let file: File | null = null;
    let image: HTMLImageElement | null = null;
    let image_width: number = 0;
    let image_height: number = 0;
    let canvasList: Array<[HTMLCanvasElement | null, handlerWithInfo]> = handlers.map(handler => {
        return [null, handler];
    });

    async function redChannel() {
        canvasList.map(async ([canvas, handler]) => {
            if (!canvas) return;
            canvas.width = image_width;
            canvas.height = image_height;
            const ctx = canvas.getContext('2d');
            if (!ctx || !image) return;
            ctx.drawImage(image, 0, 0);
            let imageData = ctx.getImageData(0, 0, image.width, image.height);
            await handler.handler(imageData.data);
            ctx.putImageData(imageData, 0, 0);
        })
    }


    async function uploadFile(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            file = input.files[0];
        }
        console.log(file?.size)
        if (!file) return;
        image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = async () => {
            if (!image) {
                return;
            }
            image_width = image.width;
            image_height = image.height;
            await redChannel();
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
