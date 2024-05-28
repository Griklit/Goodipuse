<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.external/software.title')}</title>
    <meta name="description" content={$_('module.external/software.description')}/>
</svelte:head>

<section>
    <a href="/external-software/Stegsolve.jar">Stegsolve.jar</a>
    <a href="/external-software/斯托夫文件格式分析器.zip">斯托夫文件格式分析器.7z</a>
</section>

<script>
    import {_} from "svelte-i18n";
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
