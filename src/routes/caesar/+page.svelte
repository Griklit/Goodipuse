<svelte:head>
    <title>凯撒加密</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<section>
    <input type="text" bind:value={text} on:input={updateResults}/>
    <div class="shifts">
        {#each shift_results as result,i}
            <div class="shift">
                <div class="shift-value">{i}</div>
                <code>{result}</code>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    let text: string = 'Hello, World!';
    let shift_results: Array<string> = caesarAll(text);

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

    function caesarAll(text: string): Array<string> {
        return Array.from({length: 26}, (_, i) => caesar(text, i));
    }

    function updateResults() {
        shift_results = caesarAll(text);
    }
</script>

<style>
    input {
        font-family: var(--font-mono), monospace;
    }

    div.shifts {
        display: flex;
        flex-direction: column;
        gap: 0.4rem 0;
        margin-top: 1rem;
    }

    div.shift {
        display: flex;
        flex-direction: row;
    }

    div.shift-value {
        width: 3rem;
        text-align: left;
    }
</style>