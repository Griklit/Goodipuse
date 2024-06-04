<a class="win11-ui-card-surface-can-press card" href={"/external-software/" + filename}>
    <h1>{title !== null ? title : filename}</h1>
    {#if url !== null}
        <a class="url" href={url} target="_blank">⇱</a>
    {/if}
    <p class="desc">{description}</p>
</a>

<script lang="ts">
    import '$lib/styles/win11-ui/card.css';

    export let filename: string;
    export let title: string | null = null;
    export let description: string = "";
    export let url: string | null = null;
</script>

<style>
    a {
        color: black;
        text-decoration: none;
    }

    a.card {
        display: flex;
        max-width: 24rem;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem 0.624rem;
        padding: 0.75rem 1rem;
    }

    h1 {
        font-size: 1.2rem;
    }

    a.card:hover {
        background-color: #efefef;
    }


    a.url {
        align-self: end;
    }

    a.url:hover {
        color: blue;
        text-decoration: underline;
    }

    p.desc {
        text-indent: 2em;
        width: 100%;
    }
</style>
