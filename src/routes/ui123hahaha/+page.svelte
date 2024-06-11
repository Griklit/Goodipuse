<svelte:head>
    <title>ui123hahaha</title>
    <meta name="description" content="ui123hahaha"/>
</svelte:head>

<section>
    <div class="ui-board">
        <h1>Hello, World!</h1>
        <label class="win11-ui-input">
            <span class="win11-ui-input">Header</span>
            <input class="win11-ui-input" placeholder="Hello, World!"/>
        </label>

        <div class="win11-ui-input inline">
            <span class="win11-ui-input inline">Header</span>
            <label class="win11-ui-input inline">
                <input class="win11-ui-input inline" placeholder="Hello, World!"/>
            </label>
        </div>

        <div class="win11-ui-input inline mini">
            <span class="win11-ui-input inline mini">Header</span>
            <label class="win11-ui-input inline mini">
                <input class="win11-ui-input inline mini" placeholder="Hello, World!"/>
            </label>
        </div>

        <label class="win11-ui-textarea">
            <span class="win11-ui-textarea">Header</span>
            <textarea class="win11-ui-textarea" placeholder="Hello, World!"/>
        </label>

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
