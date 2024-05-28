<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.substitution/custom.title')}</title>
    <meta name="description" content={$_('module.substitution/custom.description')}/>
</svelte:head>

<section>
    <textarea class="cipher-text" rows="12" bind:value={cipherText} on:input={updateResults} placeholder="密文"/>
    <textarea class="plain-text" rows="12" disabled bind:value={plainText} placeholder="明文"/>
    <div class="key">
        {#each key as map}
            <div class="map">
                <input class="letter" type="text" maxlength="1" bind:value={map[0]} on:input={updateMap}/>
                <span>↓</span>
                <input class="letter" type="text" maxlength="1" bind:value={map[1]} on:input={updateMap}/>
            </div>
        {/each}
    </div>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';

    let cipherText: string | null = null;
    let plainText: string | null = null;

    let caseSensitive: boolean = false;
    let key: Array<[string, string]> = [["", ""]];

    function updateResults() {
    }

    function updateMap() {
        let last_map = key[key.length - 1]
        console.log(last_map)
        console.log(key)
        if (last_map[0] !== "" || last_map[1] !== "") {
            console.log("push")
            key.push(["", ""])
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
