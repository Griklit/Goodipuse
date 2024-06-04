<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.base64.image.title')}</title>
    <meta name="description" content={$_('module.base64.image.description')}/>
</svelte:head>

<section style="height: 100%">
    <div style="display: flex; height: 100%; gap: 2%">
        <textarea placeholder="Base64" bind:value={encodedText} on:input={decode}/>
        <img src="data:image/png;base64,{encodedText}" alt="base64"/>
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';

    let encodedText: string = '';

    function decode() {

    }
</script>
<style>
    textarea {
        flex: 1;
        height: 100%;
        width: 9%;
        resize: none;
    }

    img {
        height: 100%;
        max-width: 89%;
        object-fit: contain;
    }
</style>