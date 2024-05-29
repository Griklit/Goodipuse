<div class="app">
    <nav>
        {#each routers as router}
            <a class="navigate-card" class:selected={$page.url.pathname === router.path} href={router.path}>
                {router.title}
            </a>
        {/each}
    </nav>
    <main>
        <slot/>
    </main>
</div>

<script lang="ts">
    import './styles.css';
    import '$lib/styles/scrollbar.css'

    import {page} from '$app/stores';
    import {_} from 'svelte-i18n';

    let routers: Array<{ path: string, title: string }> = [
        {path: '/', title: $_('page.home.title')},
        {path: '/substitution/caesar', title: $_('module.substitution/caesar.title')},
        {path: '/substitution/a1z26', title: $_('module.substitution/a1z26.title')},
        {path: '/substitution/custom', title: $_('module.substitution/custom.title')},
        {path: '/base64/image', title: $_('module.base64/image.title')},
        {path: '/external/software', title: $_('module.external/software.title')},
        {path: '/playground', title: 'playground'},
    ];
</script>

<style>
    .app {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
    }

    nav {
        background-color: #F3F3F3;
        display: flex;
        flex-direction: column;
        flex: 0 0 8%;
        min-width: 12rem;
        place-items: center;
        gap: 4px 0;
        padding: 2rem 0.75rem;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
    }

    a.navigate-card {
        width: 100%;
        text-decoration: none;
        color: black;
        height: 34px;
        border: 1px solid #F3F3F3;
        display: flex;
        border-radius: 3px;
        position: relative;
        align-items: center;
        justify-content: center;
    }

    a.navigate-card.selected {
        background: #E9E9E9;
    }

    a.navigate-card:hover {
        background: #E9E9E9;
    }

    a.navigate-card:active {
        background: #EDEDED;
        color: #5D5D5D;
    }

    a.navigate-card::before {
        content: "";
        opacity: 0;
        position: absolute;
        left: 0;
        width: 3px;
        height: 16px;
        background: #0067C0;
        border-radius: 100px;
    }

    a.navigate-card.selected::before {
        opacity: 1;
        animation: active 0.2s ease;
        animation-fill-mode: both;
    }

    main {
        padding: 2rem 0.75rem;
        flex: 1;
        overflow: scroll;
        overflow-x: hidden;
    }

    @keyframes active {
        0% {
            transform: scaleY(80%);
        }
        100% {
            transform: scaleY(100%);
        }
    }
</style>
