<script>
    import './styles.css';
    import {page} from '$app/stores';
    import {_} from 'svelte-i18n';
</script>

<div class="app">
    <nav>
        <!--
        <a class:selected={$page.url.pathname === '/'} href="/">
            {$_('page.home.title')}</a>
        <a class:selected={$page.url.pathname === '/substitution/custom'} href="/substitution/custom">
            {$_('module.substitution/custom.title')}</a>
        <a class:selected={$page.url.pathname === '/substitution/caesar'} href="/substitution/caesar">
            {$_('module.substitution/caesar.title')}</a>
        <a class:selected={$page.url.pathname==='/substitution/a1z26'} href="/substitution/a1z26">
            {$_('module.substitution/a1z26.title')}</a>
        <a class:selected={$page.url.pathname === '/base64/image'} href="/base64/image">
            {$_('module.base64/image.title')}</a>
        <a class:selected={$page.url.pathname==='/external/software'} href="/external/software">
            {$_('module.external/software.title')}</a>-->
        <a href="/" style="width: 90%">
            <div class="navigate-card" class:selected={$page.url.pathname === '/'}>
                <div style="margin: auto">{$_('page.home.title')}</div>
            </div>
        </a>
        <a href="/classical/caesar" style="width: 90%">
            <div class="navigate-card" class:selected={$page.url.pathname === '/classical/caesar'}>
                <div style="margin: auto">{$_('module.classical/caesar.title')}</div>
            </div>
        </a>
        <a href="/classical/a1z26" style="width: 90%">
            <div class="navigate-card" class:selected={$page.url.pathname === '/classical/a1z26'}>
                <div style="margin: auto">{$_('module.classical/a1z26.title')}</div>
            </div>
        </a>
        <a href="/base64/image" style="width: 90%">
            <div class="navigate-card" class:selected={$page.url.pathname === '/base64/image'}>
                <div style="margin: auto">{$_('module.base64/image.title')}</div>
            </div>
        </a>
        <a href="/external/software" style="width: 90%">
            <div class="navigate-card" class:selected={$page.url.pathname === '/external/software'}>
                <div style="margin: auto">{$_('module.external/software.title')}</div>
            </div>
        </a>

    </nav>
    <main>
        <slot/>
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
    }

    nav {
        display: flex;
        flex-direction: column;
        flex: 0 0 12%;
        min-width: 12rem;
        place-items: center;
        gap: 0.3rem 0;
        padding: 2rem 0;
    }

    main {
        padding: 2rem;
        flex: 1;
        overflow: scroll;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a.selected {
        font-weight: bold;
    }

    div.navigate-card {
        min-height: 2.2rem;
        display: flex;
        align-items: center;
        border-radius: 5px;
        position: relative;
    }

    div.navigate-card.selected {
        background: #E8EAF0;
    }

    div.navigate-card:hover {
        background: #E8EAF0;
    }

    div.navigate-card:active {
        background: #EBEDF3;
    }

    div.navigate-card.selected::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 66%;
        background: #0067C0;
        border-radius: 5px;
    }

</style>
