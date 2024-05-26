<script>
    import './styles.css';
    import {page} from '$app/stores';
</script>

<div class="app">
    <nav>
        <a class:selected={$page.url.pathname === '/'} href="/">Home</a>
        <a class:selected={$page.url.pathname === '/caesar'} href="/caesar">Caesar</a>
        <a class:selected={$page.url.pathname === '/base64/image'} href="/base64/image">Base64-Image</a>
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
        width: 15%;
        place-items: center;
        gap: 1rem 0;
        padding: 2rem 0;
        background: #f0f0f0;
    }

    main {
        padding: 2rem;
        width: 85%;
        overflow: scroll;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a.selected {
        font-weight: bold;
    }
</style>
