<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.external.software.title')}</title>
    <meta name="description" content={$_('module.external.software.description')}/>
</svelte:head>

<section>
    {#each files as file}
        <Card filename={file.filename} title={file.title} description={file.description} url={file.url}/>
    {/each}
</section>

<script lang="ts" context="module">
    import {_} from "svelte-i18n";

    import Card from "./Card.svelte";

    export const hydrate = true;

    const files: Array<{
        filename: string;
        title?: string;
        description?: string;
        url?: string;
    }> = [
        {
            filename: "Stegsolve.jar",
            title: "Stegsolve",
            description: "隐写图像破解工具",
            url: "http://www.caesum.com/handbook/stego.htm"
        },
        {
            filename: "斯托夫文件格式分析器.7z",
            title: "斯托夫文件格式分析器",
            description: "文件格式分析工具（已停更多年，不支持较新文件类型）",
        }
    ]
</script>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 0.5rem 2.5rem;
    }
</style>
