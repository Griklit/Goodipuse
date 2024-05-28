<svelte:head>
    <title>{$_('title') + ' | ' + $_('module.external/software.title')}</title>
    <meta name="description" content={$_('module.external/software.description')}/>
</svelte:head>

<section>
    <Card filename="Stegsolve.jar" description="图片隐写工具" url="http://www.caesum.com/handbook/stego.htm"/>
    <Card filename="斯托夫文件格式分析器.7z"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
    <Card filename="Test.null"/>
</section>

<script>
    import {_} from "svelte-i18n";

    import Card from "./Card.svelte";
</script>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 0.5rem 2.5rem;
    }
</style>
