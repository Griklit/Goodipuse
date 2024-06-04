<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution.a1z26.title')}</title>
    <meta name="description" content={$_('module.substitution.a1z26.description')}/>
</svelte:head>

<section>
    <input class="text" type="text" bind:value={decodedText} on:input={encode} placeholder={holder}/>
    <input class="text" type="text" bind:value={split} on:input={encode}/>
    <input class="text" type="text" bind:value={encodedText} on:input={decode} placeholder={encodeHolder}/>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';

    let holder = 'Hello, World!'
    let encodeHolder = '8-5-12-12-15-,- -23-15-18-12-4-!';
    let decodedText: string = '';
    let split: string = '-';
    let encodedText: string = '';

    function encode() {
        encodedText = decodedText.split('').map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return (code - 65 + 1).toString();
            } else if (code >= 97 && code <= 122) {
                return (code - 97 + 1).toString();
            } else {
                return char;
            }
        }).join(split);
    }

    function decode() {
        decodedText = encodedText.split(split).map((char) => {
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
    input.text {
        font-family: var(--font-mono), monospace;
        width: 100%;
    }
</style>
