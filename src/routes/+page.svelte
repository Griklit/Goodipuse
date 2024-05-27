<svelte:head>
    <title>{$_('title')}</title>
    <meta name="description" content={$_('description')}/>
</svelte:head>

<section>
    <h1>{$_('description')}</h1>
</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
</script>

<style>
</style>
