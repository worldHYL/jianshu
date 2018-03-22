<template>
    <div class="aside">
        <div class="user-dynamic">
            <div class="badge-icon">
                <a href="javascript:void(0)">
                    <img src="../assets/img/vip.png" alt="">
                    简书伯乐
                </a>
            </div>
            <div class="badge-icon">
                <a href="javascript:void(0)">
                    <img src="../assets/img/talentScout.png" alt="">
                    简书会员
                </a>
            </div>
        </div>
        <div class="title">
            个人介绍
        </div>
        <div class="description">
            <div class="js-intro">
                专业服装设计师、手绘专题副编，主要作品为服装画、着装搭配文章，生活随笔等，我的微信15980027033、请备注简书!
                <br>
                <br>
                简书三个官方专题的推荐作者……
                <br>
                <br>
                我已加入“维权骑士”(rightknights.com)的版权保护计划。
            </div>
            <a href="javascript:void(0)" class="weibo"><i class="fa fa-weibo"></i></a>
            <a href="javascript:void(0)" class="weixin"><i class="fa fa-weixin"></i>
                <div class="QR">
                    <div><img src="../assets/img/QR.png" alt=""></div>
                    <div class="triangle"></div>
                </div>
            </a>
        </div>
        <div class="user-dynamic">
            <div class="badge-icon">
                <nuxt-link to="/users/132/subscriptions" class="heintro"><i class="fa fa-th-large" aria-hidden="true"></i><span>他关注的专题/文集/连载</span></nuxt-link>
            </div>
            <div class="badge-icon">
                <nuxt-link to="/users/123/likes_notes" class="heintro"><i class="fa fa-heart-o" aria-hidden="true"></i><span>他喜欢的文章</span></nuxt-link>
            </div>
        </div>
        <div>
            <div>
                <div class="title">他创建的专题</div>
                <div class="special">
                    <div>
                        <a href="javascript:void(0)" class="avatar-collection"><img  src="../assets/img/freehand.png" alt=""></a>
                        <a href="javascript:void(0)" class="name">手绘-新手乐园</a>
                    </div>
                    <div>
                        <a href="javascript:void(0)" class="avatar-collection"><img  src="../assets/img/cloth.jpg" alt=""></a>
                        <a href="javascript:void(0)" class="name">服装+设计</a>
                    </div>
                    <div>
                        <a href="javascript:void(0)" class="avatar-collection"><img  src="../assets/img/literature.jpg" alt=""></a>
                        <a href="javascript:void(0)" class="name">文艺画报</a>
                    </div>
                    <div></div>
                </div>
                <div class="title">他管理的专题</div>
                <div class="special">
                    <div>
                        <a href="javascript:void(0)" class="avatar-collection"><img  src="../assets/img/freehand.png" alt=""></a>
                        <a href="javascript:void(0)" class="name">他管理的专题</a>
                    </div>
                    <div></div>
                </div>
                <div class="special">
                    <div class="title">他的文集</div>
                    <div>
                        <a href="javascript:void(0)" class="avatar-collection"><div class="icon"><i class="fa fa-book" aria-hidden="true"></i></div> </a>
                        <a href="javascript:void(0)" class="name">日记本</a>
                    </div>
                    <div></div>
                </div>
                <div class="special">
                    <span class="title black">加入黑名单</span>
                    <span class="point">&nbsp;·&nbsp;</span>
                    <span class="title black">举报用户</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "otherinfor-aside"
    }
</script>

<style scoped>
    .aside {
        padding-bottom: 500px;
    }
    .aside .user-dynamic {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 6px;
        margin-bottom: 16px;
    }
    .aside .user-dynamic .badge-icon {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #333;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .aside .user-dynamic .badge-icon .heintro{
        line-height: 30px;
    }
    .aside .user-dynamic .badge-icon i{
        margin-right:10px;
    }
    .aside .user-dynamic .badge-icon img {
        width: 20px;
        height: 20px;
        margin-right: 3px;
    }
    .aside .title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #969696;
    }
    .aside .description {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 16px;
        margin-bottom: 10px;
    }
    .aside .description .js-intro {
        margin-bottom: 10px;
        line-height: 20px;
        font-size: 14px;

    }
    .aside .description .weibo {
        margin-right: 5px;
    }
    .aside .description .weibo i {
        color: red;
    }
    .aside .description .weixin {
        position: relative;
    }
    .aside .description .weixin i {
        color: limegreen;
    }
    .aside .description .weixin img {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 5px;
        left: -50px;
        box-shadow: 6px 3px 5px #888888;
        border: 1px solid #e1e1e1;
    }
    .aside .description .weixin .triangle {
        position: absolute;
        top: -3px;
        left: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(225, 225, 225, 0.8);
    }
    .aside .description .weixin .QR {
        display: none;
    }
    .aside .description .weixin:hover .QR {
        display: block;
    }
    .aside .special .avatar-collection{
        width: 32px;
        height: 32px;
        display: inline-block;
        margin-right:5px;
    }
    .aside .special .avatar-collection img{
        width: 100%;
        border-radius: 10%;
    }
    .aside .special{
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
    .aside .special div{
        margin-bottom: 10px;
        line-height: 20px;
    }
    .aside .special div:last-child{
        width: 280px;
        height: 0px;
    }
    .aside .special .name{
        position: relative;
        max-width: 236px;
        vertical-align: middle;
        top: 1px;
        font-size: 14px;
        color: #333;
    }
    .aside .special .avatar-collection .icon{
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        font-weight: 400;
        color: #969696;
        margin-right: 5px;
        font-weight: 400!important;
        display: inline-block;
    }
    .aside .special .black{
        display: inline-block;
    }
    .aside .special .point{
        font-weight: 300;
    }
    .aside .special .black:hover{
        color:black;
    }
</style>