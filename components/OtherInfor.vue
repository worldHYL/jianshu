<template>
    <div>
        <div class="main-top">
            <nuxt-link to="/u/123" class="avatar">
                <img src="../assets/img/default-avatar.jpg" alt="">
            </nuxt-link>
            <div class="btn-follow">
                <button class="follow" @click="follow" @mouseover="followOver" @mouseout="followOut"
                        ref="follow">关注</button>
                <i ref="ifollow" class="fa fa-plus ifollow"></i>
            </div>
            <nuxt-link class="btn-hallow" to="/notifications/chats">发简信</nuxt-link>
            <div class="title">
                <nuxt-link to="/u/123" class="name">测试用户</nuxt-link>
            </div>
            <div class="info">
                <ul>
                    <li>
                        <div class="meta-block">
                            <nuxt-link to="/users/123/following">
                                <p>66</p>
                                关注
                                <i class="fa fa-angle-right "></i>
                            </nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="meta-block">
                            <nuxt-link to="/users/123/followers">
                                <p>999</p>
                                粉丝
                                <i class="fa fa-angle-right "></i>
                            </nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="meta-block">
                            <nuxt-link to="/u/123">
                                <p>88</p>
                                文章
                                <i class="fa fa-angle-right "></i>
                            </nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="meta-block">
                            <p>68765</p>
                            字数
                            <i class="fa fa-angle-right "></i>
                        </div>
                    </li>
                    <li>
                        <div class="meta-block">
                            <p>686</p>
                            收获喜欢
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "other-infor",
        methods:{
            follow() {
                this.$refs.follow.innerHTML = this.$refs.follow.innerHTML == "关注" ? "取消关注" : "关注";
                this.$refs.follow.className = this.$refs.follow.innerHTML == "关注" ? "follow" : "unfollow";
                this.$refs.ifollow.className = this.$refs.follow.innerHTML == "关注" ? "fa fa-plus ifollow" : "fa fa-times iunfollow";
            },
            followOver() {
                this.$refs.follow.innerHTML = this.$refs.follow.innerHTML == "关注" ? "关注" : "取消关注";
                this.$refs.ifollow.className = this.$refs.follow.innerHTML == "关注" ? "fa fa-plus ifollow" : "fa fa-times iunfollow";
            },
            followOut() {
                this.$refs.follow.innerHTML = this.$refs.follow.innerHTML == "关注" ? "关注" : "已关注";
                this.$refs.ifollow.className = this.$refs.follow.innerHTML == "关注" ? "fa fa-plus ifollow" : "fa fa-check iunfollow";

            }
        }
    }
</script>

<style scoped>
    .main-top {
        margin-bottom: 20px;
    }
    .main-top .avatar {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: -2px;
    }
    .main-top .btn-follow {
        width: 100px;
        height: 40px;
        float: right;
        position: relative;
        margin: 23px 0 23px 16px;
    }
    .main-top .btn-follow .ifollow {
        position: absolute;
        top: 12px;
        left: 25px;
        color: white;
    }
    .main-top .follow {
        width: 100px;
        height: 40px;
        padding: 8px 0px 8px 15px;
        /*margin: 23px 0 23px 16px;*/
        float: right;
        font-size: 15px;
        text-align: center;
        background-color: rgb(66, 192, 46, 0.7);
        color: white;
        border-radius: 40px;
        font-weight: 400;
        border: 1px solid transparent;
        outline: none;
        cursor: pointer;
    }
    .main-top .follow:hover {
        opacity: 0.9;
    }
    .main-top .unfollow {
        width: 100px;
        float: right;
        /*margin: 23px 0 23px 16px;*/
        padding: 8px 0px 8px 22px;
        font-size: 15px;
        text-align: center;
        border-radius: 40px;
        font-weight: 400;
        border: 1px solid transparent;
        outline: none;
        cursor: pointer;
        color: #8c8c8c;
        background-color: transparent;
        border-color: hsla(0, 0%, 59%, .6);
    }
    .main-top .btn-follow .iunfollow {
        position: absolute;
        top: 12px;
        left: 15px;
        color: #8c8c8c;
    }
    .main-top .btn-hallow {
        width: 90px;
        padding: 8px 0;
        float: right;
        margin: 23px 0 23px 8px;
        font-size: 15px;
        border: 1px solid rgba(59, 194, 29, .7);
        color: #42c02e !important;
        font-weight: 400;
        border-radius: 40px;
        text-align: center;
    }
    .main-top .title {
        padding: 5px 0 0 100px;
    }
    .main-top .title .name {
        font-size: 21px;
        display: inline-block;
        font-weight: 700;
        vertical-align: middle;
    }
    .main-top .info {
        margin-top: 5px;
        padding-left: 100px;
        font-size: 14px;
    }
    .main-top .info ul li {
        display: inline-block;
    }
    .main-top .info ul .meta-block {
        font-size: 12px;
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
        color: #969696;
    }
    .main-top .info ul p {
        margin-bottom: -3px;
        font-size: 15px;
        color: #333;
    }
    .main-top .info ul .meta-block i {
        margin-left: 3px;
    }
</style>