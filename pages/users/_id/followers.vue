<template>
    <div>
        <div class="my-container">
            <my-header></my-header>
            <div class="row">
                <div class="col-8 main">
                    <person-infor></person-infor>
                    <ul class="trigger-menu">
                        <li v-for="(triggerMenu,index) in triggerMenus"
                            @click="active(index)"><a :href="triggerMenu.href">{{triggerMenu.text}}</a><div  :class="triggerMenu.class" class="under-line"></div></li>
                    </ul>
                    <div class="list-container">
                        <div class="detailcontent">
                            <a href="javascript:void(0)" class="avatar-collection"><img src="../../../assets/img/default-avatar.jpg" alt=""></a>
                            <div class="info">
                                <a href="javascript:void(0)" class="title">我不是和么</a>
                                <div class="meta">
                                    <span>关注 73</span><span>粉丝13727</span><span class="bordernone">文章241</span><div class="meta">写了156113字,获得了56个喜欢</div>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="btn">
                                <div class="btn-follow">
                                    <button ref="follow" class="follow" @click="follow" @mouseover="followOver" @mouseout="followOut">已关注</button>
                                    <i ref="ifollow"  class="fa fa-check ifollow"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4 aside">
                    <aside-special></aside-special>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import myHeader from "~/components/MyHeader";
    import PersonInfor from "../../../components/personInfor";
    import asideSpecial from "~/components/AsideSpecial"
    export default {
        name: "subscriptions",
        data() {
            return {
                triggerMenus: [
                    {class:"",href: "javascript:void(0)", text: "关注的用户 5"},
                    {class:"active",href: "javascript:void(0)", text: "粉丝 999"}],

                classifys:[
                    {iUrl:"/default-avatar.jpg",url:"javascript:void(0)",classify:"读书"},
                    {iUrl:"/default-avatar.jpg",url:"javascript:void(0)",classify:"社会"},
                    {iUrl:"/default-avatar.jpg",url:"javascript:void(0)",classify:"人文社科"},
                ],
            }
        },
        methods: {
            active(index) {
                if (index == 0) {
                    Vue.set(this.triggerMenus, 0, {class: "active", href: "javascript:void(0)", text: "关注的用户 5"})
                    Vue.set(this.triggerMenus, 1, {class: "", href: "javascript:void(0)", text: "粉丝 999"})
                } else {
                    Vue.set(this.triggerMenus, 0, {class: "", href: "javascript:void(0)", text: "关注的用户 5 "})
                    Vue.set(this.triggerMenus, 1, {class: "active", href: "javascript:void(0)",text: "粉丝 999" })
                }
            },
            follow(index) {
                this.$refs.follow.innerHTML = this.$refs.follow.innerHTML == "关注" ? "取消关注" : "关注";
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
        },
        components: {
            PersonInfor,
            myHeader,
            asideSpecial,
        }
    }
</script>
<style scoped>
    .main .trigger-menu {
        border-bottom: 1px solid #f0f0f0;
    }
    .main .trigger-menu li div.under-line{
        position: absolute;
        width: 0%;
        height: 0;
        left:50%;
        top:40px;
        background-color: #a5a5a5;
        transition: all 0.5s;
    }
    .main .trigger-menu li:hover div.under-line{
        position: absolute;
        width: 100%;
        height: 2px;
        left:0;
        top:40px;
        background-color: #a5a5a5;
    }
    .main .trigger-menu li div.active{
        position: absolute;
        width: 100%;
        height: 2px;
        left:0;
        top:40px;
        background-color: #a5a5a5;
    }
    .main .trigger-menu li {
        position: relative;
        display: inline-block;
        padding: 8px 0;
        margin-bottom: -1px;
        line-height: 20px;
    }
    .main .trigger-menu li a {
        padding: 8px 20px;
        font-size: 15px;
        font-weight: 700;
        color: #969696 !important;
        line-height: 25px;
    }
    .main .list-container{
        margin-top:20px;
    }
    .main .list-container .detailcontent{
        padding-top: 0!important;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        line-height: normal;
    }
    .main .list-container .detailcontent .avatar-collection{
        width: 52px;
        height: 52px;
        margin-right: 8px;
        vertical-align: middle;
        display: inline-block;
    }
    .main .list-container .detailcontent .avatar-collection img{
        width: 100%;
        height:100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
    }
    .main .list-container .detailcontent .info{
        vertical-align: middle;
        display: inline-block;
    }
    .main .list-container .detailcontent .info .title{
        font-size: 15px;
        font-weight: 700;
        color: #333;
    }
    .main .list-container .detailcontent .info .meta{
        padding-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .main .list-container .detailcontent .info .meta span{
        margin-right:10px;
        padding-right: 10px;
        border-right:1px solid #969696;
    }
    .main .list-container .detailcontent .info .meta span.bordernone{
        border-right: none;
    }
    .main .list-container .detailcontent .info .meta a{
        margin-right: 3px;
        font-size: 12px;
        font-weight: 400;
        color: #3194d0!important;
    }
    .main .list-container .detailcontent .btn{
        float: right;
        padding: 8px 0;
        width: 100px;
        font-size: 15px;
        display: block;
    }
    .main .list-container .detailcontent .btn .btn-follow {
        width: 100px;
        height: 40px;
        float: right;
        position: relative;
        margin: 0px 0 0px 0px;
    }
    .main .list-container .detailcontent .btn .btn-follow .ifollow {
        position: absolute;
        top: 12px;
        left: 15px;
        color: #8c8c8c;
    }
    .main .list-container .detailcontent .btn .follow {
        width: 100px;
        height: 40px;
        padding: 8px 0px 8px 15px;
        float: right;
        font-size: 15px;
        text-align: center;
        color: #8c8c8c;
        background-color: transparent;
        border-radius: 40px;
        font-weight: 400;
        border: 1px solid hsla(0, 0%, 59%, .6);
        outline: none;
        cursor: pointer;
    }
    .main .list-container .detailcontent .btn .follow:hover {
        opacity: 0.9;
    }
    .main .list-container .detailcontent .btn .unfollow {
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
    .main .list-container .detailcontent .btn .btn-follow .iunfollow {
        position: absolute;
        top: 12px;
        left: 15px;
        color: #8c8c8c;
    }
</style>