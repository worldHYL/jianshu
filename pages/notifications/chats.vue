<template>
    <div>
        <my-header></my-header>
        <div class="my-container">
            <div class="row">
                <div class="col-4 aside">
                    <my-aside></my-aside>
                </div>
                <div class="col-8 main">
                    <div class="menu">全部简信</div>
                    <ul class="jianxin-list">
                        <li>
                            <div class="pull-right">
                                <span class="time">
                                    2018.02.26 21:02
                                </span>
                                <div>
                                    <a href="javascript:void(0)" @click="dropdown=true"><i class="fa fa-angle-down"></i></a>
                                    <ul class="dropdown-menu" v-show="dropdown=false">
                                        <li><a href="javascript:void(0)"><i class="fa fa-trash-o"></i>删除会话</a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-ban"></i>加入黑名单</a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-flag"></i>举报用户</a></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="avatar">
                                <img src="../../assets/img/default-avatar.jpg" alt="">
                            </a>
                            <a href="javascript:void(0)" class="name">测试用户</a>
                            <a href="javascript:void(0)" class="wrap">
                                <p> 欢迎加入丰富多彩的原创内容社区——简书。有任何疑问（如何投稿，专题主编，签约作者，简叔，简小...</p>
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
        name: "chats",
        components: {
            MyHeader,
            MyAside
        },
        data(){
            return{
                dropdown:false,
            }
        },
    };
</script>
<style>
    @import "../../assets/css/notifications.css";
    .jianxin-list>li{
        position:relative;
    }
    .avatar{
        float:left;
        margin:20px 10px 20px 10px;
        width: 48px;
        height: 48px;
        display: block;
        cursor: pointer;
    }
    .avatar img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
    }
    .name{
        position: absolute;
        top: 25px;
        font-size: 15px;
    }
    .wrap{
        display: block;
        padding: 20px 20px 20px 0;
        min-height: 88px;
    }
    .wrap p{
        margin: 28px 0 0;
        font-size: 12px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .pull-right{
        margin: 20px 20px 0 0;
        font-size: 13px;
    }
    .pull-right div{
        display: inline-block;
    }
    .dropdown-menu{
        position: absolute;
        z-index: 1000;
        float: left;
        padding: 5px 0;
        margin: 2px 0 0;
        list-style: none;
        display: block;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
        background-clip: padding-box;
        top: auto;
        left: auto;
        right: 15px;
        color: #333;
        min-width: 130px;
        margin-top: 0;
        border-color: transparent;
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
    }
    .dropdown-menu li{
        text-align: left;
    }
    .dropdown-menu li a{
        padding: 10px 20px;
        display: block;
        clear: both;
        font-weight: 400;
        line-height: 1.42857;
        color: #333;
        white-space: nowrap;
        font-size:14px;
    }
    .dropdown-menu li a i{
        margin-right:10px;
    }
</style>
