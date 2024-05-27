<script>
    import './styles.css';
    import {page} from '$app/stores';
    import {_} from 'svelte-i18n';
</script>

<div class="app">
    <nav>
        <a class:selected={$page.url.pathname === '/'} href="/">
            {$_('page.layout.home.title')}
        </a>
        <a class:selected={$page.url.pathname === '/classical/caesar'} href="/classical/caesar">
            {$_('page.layout.classical/caesar.title')}
        </a>
        <a class:selected={$page.url.pathname === '/base64/image'} href="/base64/image">
            {$_('page.layout.base64/image.title')}
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
        gap: 1rem 0;
        padding: 2rem 0;
        background: #f0f0f0;
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
</style>
