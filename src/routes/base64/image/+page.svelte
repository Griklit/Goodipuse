<svelte:head>
    <title>Base64</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<section>
    <div>
        <input type="text" bind:value={decodedText} on:input={encode}/>
        <img src="data:image/png;base64,{encodedText}" alt="base64"/>
    </div>
    <div>
        <input type="text" bind:value={encodedText} on:input={decode}/>
    </div>
</section>

<script lang="ts">
    let decodedText: string = '';
    let encodedText: string = '';

    function encode() {
        encodedText = btoa(decodedText)
    }

    function decode() {
        decodedText = atob(encodedText)
    }
</script>