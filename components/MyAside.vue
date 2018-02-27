<template>
    <div class="broadside">
        <ul>
            <li class="active">
                <nuxt-link to="/notifications/comments"><i class="fa fa-
comment-o"></i>评论
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/notifications/chats"><i class="fa fa-
envelope-open-o"></i>简信
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/notifications/requests"><i class="fa fa-
upload"></i>投稿请求
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/notifications/likes"><i class="fa fa-heart-
o"></i>喜欢和赞
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/notifications/follows"><i class="fa fa-user-
o"></i>关注
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "MyAside",
        data() {
            return {
                lis: [
                    {url: '', icon: '', title: "评论"},
                    {url: '', icon: '', title: "简信"},
                    {url: '', icon: '', title: "投稿请求"},
                    {url: '', icon: '', title: "喜欢和赞"},
                    {url: '', icon: '', title: "关注"}],
            }
        },
    }
</script>

<style scoped>
    .active {
        background-color: #f0f0f0;
    }
    .broadside ul li:hover {
        background-color: #f0f0f0;
    }

    .broadside ul li {
        border-radius: 4px;
    }

    .broadside ul li a {
        height: auto;
        padding: 10px 25px;
        line-height: 30px;
        display: block;
    }

    .broadside ul li i {
        color: #ea6f5a;
        margin-right: 15px;
        font-size: 24px;
        vertical-align: middle;
        font-weight: 400;
    }
</style>