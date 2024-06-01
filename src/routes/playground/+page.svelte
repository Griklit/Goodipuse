<svelte:head>
    <title>测试</title>
    <meta name="description" content="测试"/>
</svelte:head>

<section>
    <h1>Hello, World!</h1>
    <h1>{$_("nmsl.nmsl.nmsl")}</h1>
    <!--    <input style="width: 300px;" placeholder="你好世界"/>-->
    <!--    <br>-->
    <!--    <input style="width: 300px;" placeholder="你好世界"/>-->

    <div class="input">
        <input placeholder="你好世界"/>
    </div>

    <MyInput/>

</section>

<script lang="ts">
    import {_} from 'svelte-i18n';
    import MyInput from './MyInput.svelte'

    let a = true

    function nmsl(){
        console.log('nmsl')
    }

    function click() {
        a = !a
        console.log(a)
    }
</script>

<style>

    /*input {*/
    /*    border: 1px solid #E3E5EA;*/
    /*    border-radius: 4px;*/
    /*    height: 2rem;*/
    /*    border-bottom: none;*/
    /*    box-shadow: 0 2px 0 #85868A;*/
    /*    outline: none;*/
    /*    padding: 0 0.5rem;*/
    /*    margin-bottom: 2px;*/
    /*}*/

    div.input {
        position: relative;
        /*padding: 4px 11px 6px;*/
        /*border: 1px solid #ECECEC;*/
        border-radius: 3px;
        /*background: #FFFFFF;*/
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
