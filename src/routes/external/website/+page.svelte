<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.external.website.title')}</title>
    <meta name="description" content={$_('module.external.website.description')}/>
</svelte:head>

<section>
    {#each websites as website}
        <div>
            <a href={website.url} target="_blank">{website.name}</a>
            {website.description}
        </div>
    {/each}
</section>

<script lang="ts">
    import {_} from "svelte-i18n";

    const websites: Array<{
        name: string;
        url: string;
        description?: string;
    }> = [
        {
            name: "Hashes",
            url: "https://hashes.com/",
            description: "哈希原始值搜索"
        }
    ]
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
