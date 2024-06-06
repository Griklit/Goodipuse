<svelte:head>
    <title>ui123hahaha</title>
    <meta name="description" content="ui123hahaha"/>
</svelte:head>

<section>
    <div class="ui-board">
        <h1>Hello, World!</h1>
        <div class="win11-ui-input">
            <label for="nmsl" class="win11-ui-input">Header</label>
            <input id="nmsl" class="win11-ui-input" placeholder="Hello, World!"/>
        </div>

        <div class="win11-ui-textarea">
            <label for="nmsl" class="win11-ui-input">Header</label>
            <textarea class="win11-ui-textarea" placeholder="Hello, World!"/>
        </div>

        <label class="win11-ui-checkbox">
            <input class="win11-ui-checkbox" type="checkbox"/>
            <span class="win11-ui-checkbox"/>
            Text
        </label>

        <div class="win11-ui-card-surface-can-press">
            123
        </div>

        <div class="win11-ui-card-surface">
            123
        </div>

        <button class="win11-ui-button" onclick="console.log('nmsl')">Button</button>

    </div>


</section>

<script lang="ts">
    import '$lib/styles/win11-ui/input.css'
    import '$lib/styles/win11-ui/textarea.css'
    import '$lib/styles/win11-ui/checkbox.css'
    import '$lib/styles/win11-ui/card.css'
    import '$lib/styles/win11-ui/button.css'

</script>

<style>
    div.ui-board {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*gap: 1.25rem;*/
        /*background-color: black;*/
        /*padding: 1.25rem;*/
    }

</style>
