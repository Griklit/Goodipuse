<section>
    <input type="file" alt="上传图片" bind:value={file} on:change={uploadFile}>
    123456
</section>

<script lang="ts">
    let file: File | null = null;

    function uploadFile() {
        console.log(file?.stream());
    }
</script>
