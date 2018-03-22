<template>
    <div>
        <my-header></my-header>
        <div class="my-container">
            <div class="row">
                <div class="col-4 aside">
                    <my-aside></my-aside>
                </div>
                <div class="col-8 main">
                    <div class="menu">收到的评论</div>
                    <ul class="comment-list">
                        <div class="notification-list-placeholder comment">
                            <div class="avatar"></div>
                            <div class="wrap">
                                <div class="name"></div>
                                <div class="text"></div>
                            </div>
                            <p></p>
                            <p class="animation-delay"></p>
                            <div class="meta">
                                <i class="iconfont ic-list-comments"></i>
                                <div class="text"></div>
                                <i class="iconfont ic-go"></i>
                                <div class="text longer"></div>
                            </div>
                        </div>
                    </ul>
                    <div class="find-nothing">
                        <img src="../../assets/img/nothing.png" alt="">
                        <div class="menu2">这里还没有内容哦</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    <script>
        import MyHeader from "~/components/MyHeader";
        import MyAside from "~/components/MyAside";
        export default {
            name: "comments",
            components: {
                MyHeader,
                MyAside
            }
        }
    </script>
    <style scoped>
        @import "../../assets/css/notifications.css";
    </style>
