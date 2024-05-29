<script lang="ts">
    export let placeholder: string = "";
</script>

<div class="input">
    <input {...$$restProps} placeholder={placeholder} />
</div>

<style>
    div.input {
        position: relative;
        border-radius: 3px;
        overflow: hidden;
    }

    div.input::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: #8A8A8A;
    }

    div.input:has(input:focus)::after {
        height: 2px;
        background: #005FB8;
    }


    input {
        border: 1px solid #ECECEC;
        border-radius: 3px;
        height: 30px;
        outline: none;
        width: 100%;
        padding: 0 11px;
        box-sizing: border-box;
        background: #FDFDFD;
    }

    input:hover {
        background: #F9F9F9;
    }

    input:active {
        background: #FFFFFF;
    }

    input:focus {
        background: #FFFFFF;
    }

    input::placeholder {
        color: #646464;
        opacity: 1;
    }
</style>