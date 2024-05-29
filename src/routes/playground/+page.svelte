<svelte:head>
    <title>测试</title>
    <meta name="description" content="测试"/>
</svelte:head>

<section>
    <h1>Hello, World!</h1>
    <a class="navigate-card" href="/playground" class:selected={a} on:click={click}>
        test
    </a>
    <a class="navigate-card" href="/playground" class:selected={!a} on:click={click}>
        test
    </a>
    <input style="width: 300px;" placeholder="你好世界"/>
    <br>
    <input style="width: 300px;" placeholder="你好世界"/>
</section>

<script lang="ts">
    let a = true

    function click() {
        a = !a
        console.log(a)
    }
</script>

<style>

    input {
        border: 1.5px solid #E3E5EA;
        border-radius: 4px;
        height: 2rem;
        border-bottom: none;
        box-shadow: 0 1.5px 0 #85868A;
        outline: none;
        padding: 0 0.5rem;
        margin-bottom: 2px;
    }

    input:hover {
        background: #F5F6F9;
    }

    input:active {
        background: #FFFFFF;
    }

    input:focus {
        background: #FFFFFF;
        box-shadow: 0 2px 0 #0067C0;
    }

    input::placeholder {
        color: #5F5F60;
        opacity: 1;
    }

    input:focus::placeholder {
        color: #8D8D8D;
    }

    a.navigate-card {
        width: 100%;
        text-decoration: none;
        color: black;
        min-height: 3rem;
        display: flex;
        border-radius: 3px;
        position: relative;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    a.navigate-card:hover {
        background: #E8EAF0;
    }

    a.navigate-card:active {
        background: #EBEDF3;
    }

    a.navigate-card.selected::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 50%;
        background: #0067C0;
        border-radius: 5px;
        transform-origin: 50% 100%;
        animation: active 1s cubic-bezier(0, 0, 0, 1) 1s;
        animation-fill-mode: both;
    }

    /*a.navigate-card::before {*/
    /*    content: "";*/
    /*    position: absolute;*/
    /*    left: 0;*/
    /*    width: 4px;*/
    /*    height: 50%;*/
    /*    background: #0067C0;*/
    /*    border-radius: 5px;*/
    /*    transform-origin: 50% 100%;*/
    /*    animation: active2 1s cubic-bezier(0, 0, 0, 1) 2s;*/
    /*}*/

    /*a.navigate-card::before {*/
    /*    content: "";*/
    /*    position: absolute;*/
    /*    left: 0;*/
    /*    width: 4px;*/
    /*    height: 50%;*/
    /*    background: #0067C0;*/
    /*    border-radius: 5px;*/
    /*    transform-origin: 50% 100%;*/
    /*    animation: yincang 1s;*/
    /*}*/

    @keyframes active {
        0% {
            transform: scaleY(0%);
        }
        0.01% {
            transform: scaleY(200%);
        }
        100% {
            transform: scaleY(100%);
        }
    }

    @keyframes active2 {
        0% {
            transform: scaleY(100%);
        }
        100% {
            transform: scaleY(200%);
        }
    }

    @keyframes yincang {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
