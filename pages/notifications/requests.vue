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
                    <ul class="push-list">
                        <li>
                            <a href="javaScript:void(0)" class="wrap">
                                <div class="all-push">
                                <i class="fa fa-upload"></i>
                                </div>
                                <div class="name">全部未处理请求</div>
                            </a>
                        </li>
                    </ul>
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
<style scoped>
    @import "../../assets/css/notifications.css";
    .wrap{
        display: block;
        padding: 20px;
        position: relative;
    }
    .push-list li{
        border-top:1px solid #f0f0f0;
    }
    .wrap .all-push{

        margin-right: 10px;
        width: 48px;
        height: 48px;
        text-align: center;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
        display: inline-block;
        vertical-align: middle;
    }
    .wrap i {
        margin-top: 14px;
        font-size: 25px;
        color: #ea6f5a;
        display: block;
    }
    .name{
        position: absolute;
        top: 35px;
        font-size: 15px;
        vertical-align: middle;
        display: inline-block;
    }
</style>
