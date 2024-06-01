<svelte:head>
    <title>ui123hahaha</title>
    <meta name="description" content="ui123hahaha"/>
</svelte:head>

<section>
    <h1>Hello, World!</h1>

    <div class="win11-ui-input">
        <label class="win11-ui-input" for="nmsl">test</label>
        <input id="nmsl" class="win11-ui-input" placeholder="你好世界"/>
    </div>

    <div class="win11-ui-textarea">
        <p class="win11-ui-input">test</p>
        <textarea class="win11-ui-textarea" placeholder="你好世界" style="height: 100px"/>
    </div>


</section>

<script lang="ts">
    import '$lib/styles/win11-ui/input.css'
    import '$lib/styles/win11-ui/textarea.css'
</script>

<style>


</style>
