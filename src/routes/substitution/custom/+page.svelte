<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution/custom.title')}</title>
    <meta name="description" content={$_('module.substitution/custom.description')}/>
</svelte:head>

<section>
    <textarea class="cipher-text" rows="12" bind:value={cipherText} on:input={updateResults} placeholder="密文"/>
    <textarea class="plain-text" rows="12" disabled bind:value={plainText} placeholder="明文"/>
    <div class="key">
        {#each map as [key, value]}
            <div class="map">
                <input class="letter" type="text" maxlength="1" bind:value={key} on:input={updateMap}/>
                <span>↓</span>
                <input class="letter" type="text" maxlength="1" bind:value={value} on:input={updateMap}/>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';

    let cipherText: string = "";
    let plainText: string = "";

    let caseSensitive: boolean = false;
    let map = new Map<string, string>();
    map.set("s", "");

    function updateResults() {
        let newText = [];
        for (let i = 0; i < cipherText.length; i++) {
            let char = cipherText[i];
            if (caseSensitive) {
                let value = map.get(char);
                if (value) {
                    newText.push(value);
                } else {
                    newText.push(char);
                }
            } else {
                let lower = char.toLowerCase();
                let upper = char.toUpperCase();
                let value = map.get(lower);
                if (!value) {
                    value = map.get(upper);
                }
                if (value) {
                    if (char === lower) {
                        newText.push(value.toLowerCase());
                    } else {
                        newText.push(value.toUpperCase());
                    }
                } else {
                    newText.push(char);
                }
            }
        }
        plainText = newText.join("");
    }

    function updateMap() {
        if (!map.has("")) {
            map.set("", "");
        }
        updateResults()
    }

</script>

<style>
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

    textarea {
        padding: 0.25rem 0.5rem;
        font-family: var(--font-mono), monospace;
        resize: vertical;
        min-width: 32rem;
        flex-grow: 1;
    }

    div.key {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem 0.5rem;
    }

    div.map {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    input.letter {
        padding: 0.25rem;
        width: 1rem;
        border-radius: 0.25rem;
        text-align: center;
    }

</style>
