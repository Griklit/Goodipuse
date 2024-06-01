<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.external-software.title')}</title>
    <meta name="description" content={$_('module.external-software.description')}/>
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
            description: "隐写术是一种将事物隐藏在其他事物中的艺术，例如以某种方式将文本消息隐藏在图片中。通常，如果原始消息隐藏得很好，" +
                "你永远不会知道它在那里。就隐写术的挑战而言，它的水平往往是简单的虚构隐藏方案或编码方案。偶尔你会遇到这样一种情况，" +
                "即使用了一种真正的方法，通常有关于该方法的线索，其中一些方法可以使用破解程序。",
            // url: "http://www.caesum.com/handbook/stego.htm"
        },
        {
            filename: "斯托夫文件格式分析器.7z",
            title: "斯托夫文件格式分析器",
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
