<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.transposition.rail_fence.title')}</title>
    <meta name="description" content={$_('module.transposition.rail_fence.description')}/>
</svelte:head>
<section>
    <input bind:value={cipherText} on:input={decrypt}>
    {#each plainTextList as plainText}
        <p>{plainText}</p>
    {/each}
</section>

<script lang="ts">
    import {_} from "svelte-i18n";

    let cipherText: string = '';
    let offsetStart: number = 1;
    let resultLength: number = 32;
    let plainTextList: Array<string> = Array.from({length: resultLength - offsetStart}, (_) => '');

    function decrypt() {
        for (let x = 0; x < plainTextList.length; x++) {

        }
    }
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
    }
</style>
