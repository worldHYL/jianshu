<template>
    <div>
        <div class="main-top">
            <nuxt-link to="/u/123" class="avatar">
                <img src="../assets/img/default-avatar.jpg" alt="">
            </nuxt-link>
            <div class="title">
                <nuxt-link to="/u/123" class="name">明日_何其多</nuxt-link>
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
                            <nuxt-link to="/users/123/timeline">
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
        margin-top:30px;
        margin-bottom: 20px;
    }
    .main-top .avatar {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: -2px;
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