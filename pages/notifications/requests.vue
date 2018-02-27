<template>
    <div>
        <my-header></my-header>
        <div class="my-container">
            <div class="row">
                <div class="col-4 aside">
                    <my-aside></my-aside>
                </div>
                <div class="col-8 main">
                    <div class="menu">全部投稿请求</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MyHeader from "~/components/MyHeader";
    import MyAside from '~/components/MyAside';

    export default {
        components: {
            MyHeader,
            MyAside
        }
    }
</script>
<style>
    @import "../../assets/css/notifications.css";
</style>
