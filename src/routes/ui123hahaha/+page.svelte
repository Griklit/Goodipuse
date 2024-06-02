<svelte:head>
    <title>ui123hahaha</title>
    <meta name="description" content="ui123hahaha"/>
</svelte:head>

<section>
    <div class="ui-board">
        <h1>Hello, World!</h1>
        <label class="win11-ui-input">
            <span class="win11-ui-input">Header</span>
            <input id="nmsl" class="win11-ui-input" placeholder="Hello, World!"/>
        </label>

        <label class="win11-ui-textarea">
            <span class="win11-ui-input">Header</span>
            <textarea class="win11-ui-textarea" placeholder="Hello, World!"/>
        </label>

        <label class="win11-ui-checkbox">
            <input class="win11-ui-checkbox" type="checkbox"/>
            <span class="win11-ui-checkbox"/>
            Text
        </label>
    </div>


</section>

<script lang="ts">
    import '$lib/styles/win11-ui/input.css'
    import '$lib/styles/win11-ui/textarea.css'
    import '$lib/styles/win11-ui/checkbox.css'

</script>

<style>
    div.ui-board {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        /*background-color: black;*/
        /*padding: 1.25rem;*/
    }

</style>
