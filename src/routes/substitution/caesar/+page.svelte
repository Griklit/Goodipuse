<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution.caesar.title')}</title>
    <meta name="description" content={$_('module.substitution.caesar.description')}/>
</svelte:head>

<section>
    <label class="win11-ui-input">
        <span class="win11-ui-input">{$_('module.substitution.caesar.cipher_text')}</span>
        <input class="win11-ui-input text" type="text" bind:value={text} on:input={updateResults}
               placeholder={defaultValue}/>
    </label>
    <div class="option">
        <label class="win11-ui-checkbox">
            <input class="win11-ui-checkbox" type="checkbox" bind:checked={rotateNumber} on:change={updateResults}/>
            <span class="win11-ui-checkbox"/>
            {$_('module.substitution.caesar.rotate_number')}
        </label>
    </div>
    <div class="shifts">
        {#each shiftResults as result,i}
            <div class="shift">
                <div class="shift-value">{i}</div>
                <code class="result">{result}</code>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
    import '$lib/styles/win11-ui/input.css'
    import '$lib/styles/win11-ui/checkbox.css'

    let defaultValue = 'Gallo, Goodipuse!'
    let rotateNumber: boolean = false;
    let text: string | null = null;
    let shiftResults: Array<string> = caesarAll(defaultValue);

    function caesar(text: string, shift: number) {
        return text.split('').map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else if (rotateNumber && code >= 48 && code <= 57) {
                return String.fromCharCode(((code - 48 + shift) % 10) + 48)
            } else {
                return char;
            }
        }).join('');
    }

    function caesarAll(text: string): Array<string> {
        return Array.from({length: 26}, (_, i) => caesar(text, i));
    }

    function updateResults() {
        if (text) {
            shiftResults = caesarAll(text);
        } else {
            shiftResults = caesarAll(defaultValue);
        }
    }
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 0.75rem 0;
    }


    input.text {
        font-family: var(--font-mono), monospace;
        width: 100%;
    }

    div.shifts {
        display: flex;
        flex-direction: column;
        gap: 0.6rem 0;
    }

    div.option {
        display: flex;
        flex-direction: row;
    }

    div.shift {
        display: flex;
        flex-direction: row;
    }

    div.shift-value, code.result {
        background-color: white;
        border-radius: 0.25rem;
        padding: 0 0.5rem;
        height: 1.625rem;
        align-content: center;
    }

    div.shift-value {
        width: 1.5rem;
        text-align: center;
        margin-right: 0.5rem;
    }

</style>
