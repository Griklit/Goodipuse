<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution/custom.title')}</title>
    <meta name="description" content={$_('module.substitution/custom.description')}/>
</svelte:head>

<section>
    <div class="key">
        <textarea class="key"/>
        <div class="map-list">
            {#each map as [key, value]}
                <div class="map">
                    <input class="letter" type="text" maxlength="1" bind:value={key} on:input={updateMap}/>
                    <span>→</span>
                    <input class="letter" type="text" maxlength="1" bind:value={value} on:input={updateMap}/>
                </div>
            {/each}
        </div>
    </div>
    <div class="text">
        <textarea class="cipher-text" rows="12" bind:value={cipherText} on:input={updateResults} placeholder="密文"/>
        <textarea class="plain-text" rows="12" disabled bind:value={plainText} placeholder="明文"/>
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
    textarea {
        padding: 0.25rem 0.5rem;
        font-family: var(--font-mono), monospace;
        resize: none;
        border: none;
        border-radius: 4px;
        background-color: white;
    }

    section {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        height: 100%;
    }

    div.key {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem 0.5rem;
        align-items: start;
    }

    textarea.key {
        text-align: center;
        width: 3rem;
        min-width: 3rem;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    div.map-list {
        padding: 0.5rem;
        height: 100%;
        background-color: #0000000a;
        border-radius: 4px;
    }

    div.map {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    input.letter {
        padding: 0.25rem;
        width: 1rem;
        text-align: center;
    }

    div.text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex-grow: 1;
    }

    textarea.cipher-text, textarea.plain-text {
        min-width: 32rem;
        flex-grow: 1;
    }


</style>
