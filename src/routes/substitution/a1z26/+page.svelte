<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution.a1z26.title')}</title>
    <meta name="description" content={$_('module.substitution.a1z26.description')}/>
</svelte:head>

<section>
    <label class="win11-ui-textarea text">
        <span class="win11-ui-input">{$_('module.substitution.a1z26.cipher_text')}</span>
        <textarea class="win11-ui-textarea" bind:value={cipherText} on:input={decode}
                  placeholder={cipherHolder.replace(cipherHolderRegex, separator)}/>
    </label>
    <div class="option">
        <div class="win11-ui-input inline">
            <span class="win11-ui-input inline">{$_('module.substitution.a1z26.separator')}</span>
            <label class="win11-ui-input inline">
                <input class="win11-ui-input inline" bind:value={separator} on:input={encode}/>
            </label>
        </div>
    </div>
    <label class="win11-ui-textarea text">
        <span class="win11-ui-input">{$_('module.substitution.a1z26.plain_text')}</span>
        <textarea class="win11-ui-textarea" bind:value={plainText} on:input={encode}
                  placeholder={plainHolder}/>
    </label>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';

    let plainHolder = 'Gallo, Goodipuse!'
    let cipherHolder = '7-1-12-12-15-,- -7-15-15-4-9-16-21-19-5-!';
    let cipherHolderRegex = new RegExp('-', 'g');
    let plainText: string = '';
    let separator: string = '-';
    let cipherText: string = '';

    function encode() {
        cipherText = plainText.split('').map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return (code - 65 + 1).toString();
            } else if (code >= 97 && code <= 122) {
                return (code - 97 + 1).toString();
            } else {
                return char;
            }
        }).join(separator);
    }

    function decode() {
        plainText = cipherText.split(separator).map((char) => {
            if (char.length === 0) {
                return '';
            }
            let code = parseInt(char);
            if (code >= 1 && code <= 26) {
                return String.fromCharCode(code + 64);
            } else {
                return char;
            }
        }).join('');
    }


</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
    }

    label.text {
        font-family: var(--font-mono), monospace;
        flex-grow: 1;
        width: 100%;
    }

    div.option {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }
</style>
