<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution.custom.title')}</title>
    <meta name="description" content={$_('module.substitution.custom.description')}/>
</svelte:head>

<section>
    <div class="win11-ui-textarea map">
        <label class="win11-ui-textarea" for="map">{$_('module.substitution.custom.key')}</label>
        <textarea class="win11-ui-textarea scrollbar" placeholder={"v->g\ni->o\nt->p"}
                  bind:value={mapText} on:input={updateMapText}/>
    </div>
    <div class="text">
        <div class="win11-ui-textarea cipher-text">
            <label class="win11-ui-textarea" for="cipher-text">{$_('module.substitution.custom.cipher_text')}</label>
            <textarea class="win11-ui-textarea scrollbar" rows="12" placeholder="Valli, Viidituse!"
                      bind:value={cipherText} on:input={updateResults}/>
        </div>
        <div class="option">
            <label class="win11-ui-checkbox">
                <input class="win11-ui-checkbox" type="checkbox" bind:checked={ignoreCase}
                       on:change={updateResults}/>
                <span class="win11-ui-checkbox"/>
                忽略大小写
            </label>
        </div>
        <div class="win11-ui-textarea plain-text">
            <label class="win11-ui-textarea" for="plain-text">{$_('module.substitution.custom.plain_text')}</label>
            <textarea class="win11-ui-textarea scrollbar" rows="12" disabled placeholder="Gallo, Goodipuse!"
                      bind:value={plainText}/>
        </div>
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
    import '$lib/styles/scrollbar.css'
    import '$lib/styles/win11-ui/textarea.css'
    import '$lib/styles/win11-ui/checkbox.css'

    let ignoreCase: boolean = true;

    let cipherText: string = "";
    let plainText: string = "";

    let map = new Map<string, string>();
    let mapText: string = "";

    function updateResults() {
        console.log(ignoreCase);
        let newText = [];
        for (let i = 0; i < cipherText.length; i++) {
            let char = cipherText[i];
            if (!ignoreCase) {
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
        width: 5%;
        min-width: 4rem;
    }

    div.text {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-content: stretch;
    }

    div.cipher-text, div.plain-text {
        flex-grow: 1;
    }

    div.option {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0.75rem 0;
    }


</style>
