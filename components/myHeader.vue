<template>
    <div>
        <nav class="navbar navbar-default nav-fixed-top">
            <div class="width-limit">
                <!--logo-->
                <nuxt-link to="/">
                    <img class="nav-logo" src="../assets/img/nav-logo.png" alt="">
                </nuxt-link>
                <!--写文章-->
                <nuxt-link to="/create" class="btn write-btn">
                    <i class="fa fa-pencil">写文章</i>
                </nuxt-link>
                <!--登录和注册按钮-->
                <nuxt-link class="sign-up" to="sign-up">注册</nuxt-link>
                <nuxt-link class="sign-in" to="sign-in">登录</nuxt-link>
                <!--如果用户登录了,那么显示用户头像-->
                <div style="display: none" class="user" @mouseleave="userShow=false">
                    <div class="drop-down" @mouseover="userShow=true">
                        <nuxt-link class="avater" to="/users">
                            <img src="../assets/img/default-avatar.jpg" alt="">
                        </nuxt-link>
                    </div>
                    <div class="drop-menu" v-show="userShow">
                        <ul>
                            <li>
                                <nuxt-link to="#"><i class="fa fa-home"></i>我的主页</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="#"><i class="fa fa-bookmark" aria-hidden="true"></i>收藏的文章</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="#"><i class="fa fa-heart" aria-hidden="true"></i>喜欢的文章</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="#"><i class="fa fa-cog"></i>设置</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="#"><i class="fa fa-sign-out" aria-hidden="true"></i>退出</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--左边的小导航条-->
                <div class="my-container">
                    <ul class="nav-list">
                        <li class="active">
                            <nuxt-link to="/"><i class="fa fa-compass" aria-hidden="true"></i><span>发现</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"><i class="fa fa-book" aria-hidden="true"></i><span>关注</span></nuxt-link>
                        </li>
                        <li class="notify" @mouseleave="messageShow=false" @mouseover="messageShow=true">
                            <nuxt-link to="/" ><i class="fa fa-bell-o" aria-hidden="true"></i><span>消息</span></nuxt-link>
                            <div class="drop-menu" v-show="messageShow" >
                                <ul>
                                    <li><nuxt-link to="/"><i class="fa fa-comment-o" aria-hidden="true"></i>评论</nuxt-link></li>
                                    <li><nuxt-link to="/"><i class="fa fa-envelope-open-o" aria-hidden="true"></i>简信</nuxt-link></li>
                                    <li><nuxt-link to="/"><i class="fa fa-upload" aria-hidden="true"></i>投稿请求</nuxt-link></li>
                                    <li><nuxt-link to="/"><i class="fa fa-heart-o" aria-hidden="true"></i>喜欢和赞</nuxt-link></li>
                                    <li><nuxt-link to="/"><i class="fa fa-user-o" aria-hidden="true"></i>关注</nuxt-link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="search">
                            <form action="" method="post">
                                <input type="text" placeholder="搜索" @focus="bgShow=true" @blur="bgShow=false">
                                <nuxt-link to="/search" :class="{active:bgShow}"><i class="fa fa-search" aria-hidden="true"></i></nuxt-link>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'myHeader',//给组件命名
        data() {
            return {
                userShow: false,
                messageShow:false,
                bgShow:false
            }
        }
    }
</script>
<style>
    nav {
        height: 56px;
        width: 100%;
    }

    .navbar {
        padding: 0;
        border-bottom: 1px solid #e7e7e7;
        margin-bottom: 20px;
        background-color: #fff;
    }

    .nav-fixed-top {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 65454;
    }

    nav .width-limit {
        width: 100%;
        min-width: 768px;
        margin: 0 auto;
    }

    nav .nav-logo {
        float: left;
        height: 56px;
        padding: 0;
    }

    nav .write-btn {
        float: right;
        width: 100px;
        height: 40px;
        margin: 8px 15px 0;
        font-size: 16px;
        background-color: #ea6f5a;
        color: #fff !important;
        border-radius: 20px;
        opacity: 0.8;
    }

    nav a.write-btn:hover {
        color: #ffffff !important;
        opacity: 1;
    }

    nav .user {
        float: right;
        position: relative;
    }

    nav .user .avater {
        width: 40px;
        height: 40px;
        display: block;
        position: relative;
        margin: 8px 28px 8px 20px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }

    nav .user:hover {
        background-color: #f5f5f5;
    }

    nav .user .avater::before {
        content: "";
        position: absolute;
        top: 18px;
        right: -14px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #999
    }

    nav .user .avater img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 50%;
    }

    nav .user .drop-menu {
        width: 160px;
        position: absolute;
        left: 0;
        box-shadow: 0 0 8px rgba(0, 0, 0, .1);
        font-size: 14px;
    }

    nav .user .drop-menu ul {
        border: 1px solid #ccc;
        margin: 0 !important;
    }

    nav .user .drop-menu ul li a {
        display: block;
        padding: 10px;
    }

    nav .user .drop-menu ul li i {
        margin: 0 15px 0 10px;
        color: #ea6f5a;
        font-size: 18px;
    }

    nav .user .drop-menu ul li a:hover {
        background-color: #f5f5f5;
    }

    nav .nav-list {
        height: 56px;
        float: left;
        margin: 0;
    }
    nav>.nav-list {
        overflow:hidden;
    }
    nav .nav-list>li{
        float:left;
    }
    nav .nav-list .user .drop-menu li {
        float: left;
    }
    nav .nav-list li:hover{
        background-color: #f5f5f5;
    }
    nav .nav-list li a {
        height: 55px;
        line-height: 56px;
        display: block;
        padding: 0 15px;
        font-size: 17px;
    }
    nav .nav-list li a i {
        margin-right: 8px;
        font-size: 18px;
        line-height: 56px;
    }
    nav .nav-list li.active {
        color: #ea6f5a;
        background-color:#fff;
    }
    nav .nav-list .notify{
        position:relative;
    }
    nav .nav-list .notify .drop-menu{
        width: 160px;
        position: absolute;
        left: 0;
        box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    }
    nav .nav-list .notify .drop-menu li a{
        font-size:14px !important;
    }
    nav .nav-list .notify .drop-menu li a i{
        color:#ea6f5a;
    }
    nav a.sign-in{
        float:right;
        width: 80px;
        height: 40px;
        margin:8px 6px 0 10px;
        line-height:38px;
        font-size:15px;
        text-align: center;
        color:#969696 !important;
    }
    nav a.sign-up{
        float:right;
        width:90px;
        height: 40px;
        margin:8px 6px 0 10px;
        line-height: 38px;
        font-size:15px;
        border:1px solid #ea6f5a;
        border-radius:20px;
        color:#ea6f5a;
        text-align: center;
    }
    nav a.sign-up:hover{
        background-color:rgb(254,247,246);
    }
    nav .nav-list .search{
        padding-left: 15px;
    }
    nav .nav-list .search:hover{
        background-color: #fff;
    }
    nav .nav-list .search .search-btn{
        display: block;
    }
    nav .nav-list .search form{
        position:relative;
    }
    nav .nav-list .search form a{
        display: inline-block;
        position:absolute;
        top:8px;
        right:0;
        width: 40px;
        height: 38px;
        border-radius: 20px;
        text-align: center;
    }
    nav .nav-list .search form a.active{
        background-color: #969696;
        color:#f1f1f1 !important;
    }
    nav .nav-list .search form a i{
        position:absolute;
        top:10px;
        left:10px;
        line-height:20px;
        width: 18px;
    }
    nav .nav-list .search form input{
        width: 240px;
        height: 38px;
        margin: 8px 0;
        border:none;
        background-color: #eee;
        border-radius:20px;
        padding-left: 20px;
        transition:width ease-in .2s;
    }
    @media(min-width:992px){
        .my-container{
            width: 960px;
        }
    }
    @media(max-width:1080px){
        .my-container{
            width:750px;
        }
        nav .nav-list .search form input{
            width:150px;
        }
        nav .nav-list .search form input:focus{
            width:150px;
        }
    }
    @media(max-width:1440px){
        nav .nav-list>.active>a>i{
            display: none;
        }
        nav .nav-list .search form input{
            width: 160px;
        }
        nav .nav-list .search form input:focus{
            width:240px;
        }
    }
    @media(max-width:1080px){
        nav .nav-list>.active>a>i{
            display: block;
        }
        nav .nav-list li a span{
            display: none;
        }
        nav .nav-list .search form input{
            width: 150px;
        }
        nav .nav-list .search form input:focus{
            width: 150px;
        }
    }
</style>