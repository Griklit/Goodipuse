<section>
    <input type="file" alt="上传图片" accept="image/*" on:change={uploadFile}>
    <!--    <img alt="" src="" bind:this={image}/>-->
    <canvas style="width: {image_width}px;" bind:this={canvas}/>
</section>

<script lang="ts">
    let file: File | null = null;
    let image: HTMLImageElement = new Image();
    let image_width: number = 0;
    let image_height: number = 0;
    let canvas: HTMLCanvasElement;

    async function redChannel() {
        canvas.width = image_width;
        canvas.height = image_height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(image, 0, 0);
            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                data[i + 1] = 0;
                data[i + 2] = 0;
            }
            ctx.putImageData(imageData, 0, 0);
        }
    }


    async function uploadFile(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            file = input.files[0];
        }
        console.log(file?.size)
        if (file) {
            image.src = URL.createObjectURL(file);
            image.onload = async () => {
                image_width = image.width;
                image_height = image.height;
                await redChannel();
            }
        }
    }

</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    canvas {
        max-width: 16rem;
    }
</style>
