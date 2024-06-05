<svelte:head>
    <title>{$_('title')}</title>
    <meta name="description" content={$_('description')}/>
</svelte:head>

<section>
    <h1>{$_('page.home.description')}</h1>
    <nav>
        {#each routers as [path, router]}
            <a class="win11-ui-card-surface-can-press" class:selected={$page.url.pathname === path} href={path}>
                {router.title}
            </a>
        {/each}
    </nav>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
    import {page} from "$app/stores";
    import '$lib/styles/win11-ui/card.css'

    let routers = new Map<string, { title: string }>();
    routers.set('/substitution/caesar', {title: $_('module.substitution.caesar.title')});
    routers.set('/substitution/a1z26', {title: $_('module.substitution.a1z26.title')});
    routers.set('/substitution/custom', {title: $_('module.substitution.custom.title')});
    routers.set('/base64/image', {title: $_('module.base64.image.title')});
    routers.set('image/steganography', {title: $_('module.image.steganography.title')});
    routers.set('/external/software', {title: $_('module.external.software.title')});
</script>

<style>
    nav {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
        padding: 1rem 0;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        text-align: center;
    }
</style>
