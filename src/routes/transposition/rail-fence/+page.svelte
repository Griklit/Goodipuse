<section>
    <input bind:value={cipherText} on:input={decrypt}>
    {#each plainTextList as plainText}
        <p>{plainText}</p>
    {/each}
</section>

<script lang="ts">
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
