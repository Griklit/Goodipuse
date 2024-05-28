<a class="card" href={"/external-software/" + filename}>
    <h1>{title}</h1>
    <p>{description}</p>
    {#if url !== null}
        <a class="url" href={url} target="_blank">{url}</a>
    {/if}
</a>

<script lang="ts">
    export let filename: string;
    export let title: string = filename;
    export let description: string = "";
    export let url: string | null = null;
</script>

<style>
    a.card {
        padding: 1rem;
        display: flex;
        max-width: 32rem;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: white;
        border-radius: 1rem;
        color: black;
        text-decoration: none;
    }

    a:hover {
        background-color: #afafaf;
    }

    p {
        align-self: end;
    }

    a.url {
        color: blue;
    }
</style>
