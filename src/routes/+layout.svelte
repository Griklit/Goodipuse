<div class="app">
    <div class="bar">
        <a class="title" href="/">{$_('title')}</a>
        <hr/>
        <nav>
            {#each routers as [path, router]}
                <a class="navigate-card" class:selected={$page.url.pathname === path} href={path}>
                    {router.title}
                </a>
            {/each}
        </nav>
        <a href="https://github.com/Griklit/Goodipuse" title="github" target="_blank">
            <Icon style="font-size: 2rem;" icon="logos:github-icon"/>
        </a>
    </div>
    <main>
        {#if $page.url.pathname !== "/"}
            <div class="title">
                <h1 class="title">{routers.get($page.url.pathname)?.title}</h1>
                <a class="main-page" href="/">返回</a>
            </div>
        {/if}
        <slot/>
    </main>
</div>

<script lang="ts">
    import './styles.css';
    import '$lib/styles/scrollbar.css'

    import {page} from '$app/stores';
    import {_} from 'svelte-i18n';
    import Icon from "@iconify/svelte";

    let routers = new Map<string, { title: string }>();
    routers.set('/substitution/caesar', {title: $_('module.substitution.caesar.title')});
    routers.set('/substitution/a1z26', {title: $_('module.substitution.a1z26.title')});
    routers.set('/substitution/custom', {title: $_('module.substitution.custom.title')});
    routers.set('/number/base', {title: $_('module.number.base.title')});
    routers.set('/base64/image', {title: $_('module.base64.image.title')});
    routers.set('/image/steganography', {title: $_('module.image.steganography.title')});
    routers.set('/external/software', {title: $_('module.external.software.title')});

    // routers.set('/playground', {title: 'playground'});
</script>

<style>
    .app {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
    }

    div.bar {
        background-color: #F3F3F3;
        padding: 0.5rem 0.75rem 2rem;
        display: flex;
        flex-direction: column;
        flex: 0 0 8%;
        align-items: center;
        min-width: 12rem;
        gap: 0.5rem 0;
    }

    a.title {
        font-size: 1.3rem;
        text-decoration: none;
        color: black;
    }

    hr {
        border: none;
        width: 90%;
        height: 1px;
        background-color: #ccc;
    }

    nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        place-items: center;
        gap: 0.25rem 0;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
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

    @keyframes active {
        0% {
            transform: scaleY(80%);
        }
        100% {
            transform: scaleY(100%);
        }
    }

    main {
        display: flex;
        flex-direction: column;
        padding: 2rem 0.75rem;
        flex: 1;
        overflow: scroll;
        overflow-x: hidden;
        gap: 0.75rem 0;
    }

    div.title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
    }

    h1.title {
        font-size: 1.5rem;
    }

    a.main-page {
        padding: 0.25rem 0.4rem;
        font-size: 0.875rem;
        background-color: #0067C0;
        border-radius: 0.25rem;
        color: #ffffff;
        text-decoration: none;
    }

    @media all and (orientation: portrait) {
        nav {
            display: none;
        }
    }

    @media all and (orientation: landscape) {
        div.title {
            display: none;
        }
    }
</style>
