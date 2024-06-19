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
            description: "一个专门用于哈希逆向的网站。"
        }, {
            name: "Regex101",
            url: "https://regex101.com/",
            description: "构建，测试以及调试正则表达式"
        }, {
            name: "FactorDB",
            url: "http://factordb.com/",
            description: "因式分解网站"
        }, {
            name: "GeoGebra",
            url: "https://www.geogebra.org/",
            description: "函数、图形、几何计算器"
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
