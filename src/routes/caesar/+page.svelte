<svelte:head>
    <title>凯撒加密</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<section>
    <input type="text" bind:value={text} on:input={updateResults}/>
    {#each shift_results as result,i}
        <p>偏移:{i} <span>{result}</span></p>
    {/each}
</section>

<script lang="ts">

    let text: string = '';
    let shift_results: Array<string> = [];

    function caesar(text: string, shift: number) {
        return text.split('').map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                return char;
            }
        }).join('');
    }

    function updateResults() {
        shift_results = Array.from({length: 26}, (_, i) => caesar(text, i));
    }
</script>

<style>
    input, span {
        font-family: var(--font-mono), monospace;
    }
</style>