<a class="card" href={"/external-software/" + filename}>
    <h1>{title !== null ? title : filename}</h1>
    {#if url !== null}
        <a class="url" href={url} target="_blank">⇱</a>
    {/if}
    <p class="desc">{description}</p>
</a>

<script lang="ts">
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
        padding: 1rem 1.6rem;
        display: flex;
        max-width: 32rem;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: white;
        border-radius: 1rem;
        gap: 0.75rem 0.624rem;
    }

    h1 {
        font-size: 2rem;
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
