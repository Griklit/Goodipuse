<svelte:head>
    <title>测试</title>
    <meta name="description" content="测试"/>
</svelte:head>

<section>

    <div class="animated-svg"></div>
    <svg style="background: #005FB8 ;fill: red" width="100" height="70" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.00195312 3.49805C0.00195312 3.36133 0.0507812 3.24414 0.148438 3.14648C0.246094 3.04883 0.363281 3 0.5 3C0.636719 3 0.753906 3.04883 0.851562 3.14648L3.5 5.79492L9.14844 0.146484C9.24609 0.0488281 9.36328 0 9.5 0C9.57031 0 9.63477 0.0136719 9.69336 0.0410156C9.75586 0.0644531 9.80859 0.0996094 9.85156 0.146484C9.89844 0.189453 9.93555 0.242187 9.96289 0.304688C9.99023 0.363281 10.0039 0.427734 10.0039 0.498047C10.0039 0.634766 9.95312 0.753906 9.85156 0.855469L3.85156 6.85547C3.75391 6.95312 3.63672 7.00195 3.5 7.00195C3.36328 7.00195 3.24609 6.95312 3.14844 6.85547L0.148438 3.85547C0.0507812 3.75781 0.00195312 3.63867 0.00195312 3.49805Z"/></svg>
    <div class="test"></div>
</section>

<script lang="ts">

</script>

<style>
    div.test {
        width: 100px;
        height: 100px;
        background-color: red;
        clip-path: polygon(0 0, 10% 0, 10% 100%, 0 100%);
        animation: reveal 5s ease both;
    }

    @keyframes reveal {
        0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
        100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }

    .animated-svg {
        position: relative;
        width: 200px;
        height: 100px;
        /*overflow: hidden; !* 隐藏超出部分 *!*/
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .animated-svg::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23000' stroke-width='3' fill='%23fff'/%3E%3C/svg%3E");
        background-size: cover; /* 使用cover保持图案的比例 */
        /*-webkit-clip-path: polygon(0 0, 0 100%, 0 100%, 0 0); !* 定义剪切区域 *!*/
        clip-path: polygon(0 0, 0 100%, 0 100%, 0 0);
        animation: reveal 4s linear forwards;
    }

    /*@keyframes reveal {*/
    /*    0% {*/
    /*        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);*/
    /*    }*/
    /*    100% {*/
    /*        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);*/
    /*    }*/
    /*}*/
</style>
