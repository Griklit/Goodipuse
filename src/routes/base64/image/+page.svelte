<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.base64.image.title')}</title>
    <meta name="description" content={$_('module.base64.image.description')}/>
</svelte:head>

<section>
    <textarea placeholder="Base64 encoded text" bind:value={encodedText} on:input={decode}/>
    <div>
        {#if mediaType.startsWith('text/')}
            <p>{decodedText}</p>
        {:else if mediaType.startsWith('image/')}
            <img src={encodedText} alt="base64"/>
        {:else if mediaType.startsWith('audio/')}
            <audio src={encodedText}/>
        {:else if mediaType.startsWith('video/')}
            <video src={encodedText}/>
        {:else}
            <p>{$_('module.base64.image.invalid')}</p>
        {/if}
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';

    let encodedText: string = '';
    let mediaType: string = '';
    let decodedText: string = '';

    function decode() {
        if (!encodedText.startsWith('data:')) {
            mediaType = 'text/plain';
        } else {
            mediaType = encodedText.split(';')[0].split(':')[1];
        }
        if (mediaType.startsWith('text/')) {
            console.log(encodedText);
            decodedText = atob(encodedText.split(',')[1]);
        }
    }
</script>
<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

    textarea {
        min-width: 16rem;
        width: 64rem;
    }
</style>
