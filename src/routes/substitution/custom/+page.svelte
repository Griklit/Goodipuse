<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution/custom.title')}</title>
    <meta name="description" content={$_('module.substitution/custom.description')}/>
</svelte:head>

<section>
    {#if mapType === "text"}
    <textarea class="map map-text scrollbar" placeholder={mapTextHolder}
              bind:value={mapText} on:input={updateMapText}/>
    {:else if mapType === "list"}
        <div class="map map-list scrollbar">
            {#each mapList as [key, value]}
                <div class="map">
                    <input class="letter" type="text" maxlength="1" bind:value={key} on:input={updateMapList}/>
                    <span>→</span>
                    <input class="letter" type="text" maxlength="1" bind:value={value} on:input={updateMapList}/>
                </div>
            {/each}
        </div>
    {/if}
    <div class="text">
        <textarea class="cipher-text scrollbar" rows="12" placeholder={cipherTextHolder}
                  bind:value={cipherText} on:input={updateResults}/>
        <div class="option">
            忽略大小写：<input type="checkbox" bind:checked={caseSensitive} on:input={updateResults}/>
        </div>
        <textarea class="plain-text scrollbar" rows="12" disabled placeholder={plainTextHolder}
                  bind:value={plainText}/>
    </div>
</section>

<script lang="ts">
    import '$lib/styles/scrollbar.css'
    import {_} from 'svelte-i18n';

    let mapType: string = "text";

    let caseSensitive: boolean = false;

    let cipherText: string = "";
    let cipherTextHolder: string = "Hello, World!";
    let plainText: string = "";
    let plainTextHolder: string = "Aexxn, Wnrxd!";

    let map = new Map<string, string>();
    map.set("s", "");
    let mapText: string = "";
    let mapTextHolder: string = "h->a\nl->x\no->n";
    let mapList: Array<[string, string]> = [];

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

    function updateMapText() {
        console.log(mapText);
        let new_map = new Map<string, string>();
        let lines = mapText.split("\n");
        for (let line of lines) {
            if (line.length < 3) {
                continue;
            }
            let src = line[0];
            let dst = line[line.length - 1];
            console.log(src, dst);
            new_map.set(src, dst);
        }
        map = new_map;
        console.log(map)
        updateResults();
    }

    function updateMapList() {

        updateResults()
    }

</script>

<style>
    textarea {
        font-family: var(--font-mono), monospace;
        resize: none;
    }

    section {
        display: flex;
        flex-direction: row;
        gap: 0 1rem;
        width: 100%;
        height: 100%;
    }

    .map {
        width: 6%;
        min-width: 4rem;
    }


    textarea.map-text {
        padding: 1rem 0;
        text-align: center;
        white-space: pre;
        overflow-x: hidden;
        overflow-y: scroll;
    }


    div.map-list {
        padding: 1rem 0.25rem;
        background-color: #0000000a;
        border-radius: 8px;
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
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-content: stretch;
    }

    textarea.cipher-text, textarea.plain-text {
        padding: 1rem;
        width: 100%;
        flex-grow: 1;
    }

    div.option {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0.75rem 0;
    }


</style>
