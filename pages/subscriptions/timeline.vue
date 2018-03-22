<template>
    <div class="aaa">
        <div class="my-container">
            <my-header></my-header>
            <div class="row">
                <div class="col-4 main">
                    <div>
                        <a href="javascript:void(0)" class="change-type" @click.stop="shade">
                            全部关注
                            <i class="fa fa-toggle-down "></i>
                        </a>
                        <a href="javascript:void(0)" class="add-people">
                            <i class="fa fa-plus"></i>添加关注
                        </a>
                        <div class="arrow" v-show="arrow">
                            <div><a href="javascript:void(0)">全部关注</a></div>
                            <div><a href="javascript:void(0)">只看作者</a></div>
                            <div><a href="javascript:void(0)">只看专题</a></div>
                            <div><a href="javascript:void(0)">只看文集</a></div>
                            <div><a href="javascript:void(0)">只看推送更新</a></div>
                        </div>
                    </div>
                    <div class="collection" v-for="(friend,index) in friends" @click="changeColor(index)">
                        <div :class="friend.active" class="friends">
                            <div class="avatar"><img :class="friend.class" src="../../assets/img/default-avatar.jpg" alt=""></div>
                            <a :href="friend.url"><span>{{friend.text}}</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-8 aside">
                    <div class="article">
                        <ul class="note-list">
                            <li id="article" class="have-img">
                                <nuxt-link to="/p/123" class="wrap-img">
                                    <img src="../../assets/img/default-avatar.jpg" alt="">
                                </nuxt-link>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/u/123" class="avatar"><img src="../../assets/img/user.jpg" alt=""></nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/u/123" class="nickname">测试用户</nuxt-link>
                                            <span class="time">喜欢了这篇文章 · 8小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link class="title" to="/p/123">
                                        如何把书中的知识转化成能力？这是我见过最好回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着知识经济的兴起，读书的重要性得到了大家的普遍认同，于是市场上出现很多读书方法，比如速度、多读、慢读、列读……不管你采用哪一种读书方法，最终都要回归到“行动”二字上，正如陆...
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/u/123" class="collection-tag">
                                            测试用户
                                        </nuxt-link>
                                        <nuxt-link to="/p/123" class="tag">
                                            <i class="fa fa-eye"> 579</i>
                                        </nuxt-link>
                                        <nuxt-link to="/p/123" class="tag">
                                            <i class="fa fa-comment"> 200</i>
                                        </nuxt-link>
                                        <span><i class="fa fa-heart">546</i></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myHeader from "~/components/MyHeader"
    import Vue from "vue"
    export default {
        name: "timeline",
        data() {
            return {
                arrow: false,
                friends:[
                    {active:"active",class:"circle",url:"#article",text:"简友圈"},
                    {active:"",class:"square",url:"#article",text:"社会热点"}],
            }
        },
        methods: {
            shade(ev) {
                this.arrow = !this.arrow
            },
            handleBodyClick() {
                this.arrow = false
            },
            changeColor(index) {
                if(index==0){
                    Vue.set(this.friends,1,{active:"",class:"square",text:"社会热点"})
                    Vue.set(this.friends,index,{active:"active",class:"circle",text:"简友圈"})
                }else{
                    Vue.set(this.friends,index,{active:"active",class:"square",text:"社会热点"})
                    Vue.set(this.friends,0,{active:"",class:"circle",text:"简友圈"})
                }
            }
        },
        components: {
            myHeader,
        },
        mounted() {
            document.addEventListener('click', this.handleBodyClick)
        }
    }
</script>

<style scoped>
    .row {
        padding-top: 30px;
    }
    .row .main {
        position: relative;
    }
    .main .change-type {
        margin-left: 15px;
        font-size: 15px;

    }
    .main .arrow {
        top: 23px;
        left: 30px;
        min-width: 130px;
        text-align: center;
        margin-top: 7px;
        border-top: 1px solid #f0f0f0;
        padding: 5px 0;
        margin: 2px 0 0;
        z-index: 1000;
        position: absolute;
        background-color: #fff;
        color: #333;
        border-radius: 5px;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    }
    .main .arrow div {
        padding: 8px 0;
    }
    .main .arrow div:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .main .add-people {
        float: right;
        margin: 4px 10px 0 0;
        font-size: 13px;
        color: #333;
    }
    .main .collection .active{
        background-color: #f0f0f0;
    }
    .main .collection .friends{
        padding: 10px 13px;
        font-size: 14px;
    }
    .main .collection .friends:hover {
        background-color: #f0f0f0;
    }
    .main .collection .friends .avatar {
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: inline-block;
        margin-right: 4px;
    }
    .main .collection .friends .avatar img.circle{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .main .collection .friends .avatar img.square{
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }
    .note-list li{
        padding: 0 0 17px 0;
        position: relative;
        width: 100%;
        margin: 0 0 17px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
    }
    .note-list li.have-img>.wrap-img{
        position: absolute;
        top: 50%;
        right: 0;
        width: 150px;
        height: 120px;
        margin-top: -60px;
    }
    .note-list li.have-img>.wrap-img img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
    .note-list li.have-img .content{
        padding-right: 160px;
    }
    .note-list .author{
        margin-bottom: 1px;
        font-size: 13px;
    }
    .note-list .author .avatar
    .note-list .author .info{
        display: inline-block;
        vertical-align: middle;
    }
    .avatar{
        width: 32px;
        height: 32px;
        display: block;
    }
    .avatar img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #ccc;
    }
    .note-list .author .avatar{
        margin: 0 5px 0 0;
    }
    .note-list .author .info .time{
        color: #969696;
        padding-left: 10px;
    }
    .note-list .title{
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 7px;
        display: block;
    }
    .note-list .title:visited{
        color: #969696;
    }
    .note-list .abstract{
        font-size: 13px;
        margin:0 0 7px 0;
        line-height: 24px;
    }
    .note-list .meta{
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
    }
    .note-list .meta .collection-tag{
        color: #337ab7!important;
        padding: 3px 6px;
        vertical-align: middle;
        margin-right: 10px;
        display: inline-block;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border:none;

    }
    .note-list .meta .collection-tag:hover{
        background-color: #fef7f6;
    }
    .note-list .meta .tag{
        margin-right: 10px;
        color: #b4b4b4!important;
    }
    .note-list .meta .tag:hover{
        color: #787878!important;
    }
    .note-list .meta span{
        color: #b4b4b4;
    }
</style>