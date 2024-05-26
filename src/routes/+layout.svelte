<script>
    import './styles.css';
</script>

<div class="app">
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/caesar">Caesar</a>
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
        min-width: 15%;
        place-items: center;
        gap: 1rem 0;
        padding: 2rem 0;
        background: #f0f0f0;
    }
    main{
        padding: 2rem;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>
