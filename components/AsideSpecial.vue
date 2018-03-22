<template>
    <div>
        <div class="container">
            <div class="clear">
                <div class="title">个人介绍</div>
                <a href="javascript:void(0)" class="function-btn" @click="recomposeText">
                    <i class="fa fa-pencil"></i>
                    编辑
                </a>
            </div>
            <div class="text" v-show="!showText" v-for="comment in comments">{{comment.text}}</div>
            <div v-if="showText" class="showtext">
                <textarea class="comment" cols="35" rows="5">{{a}}</textarea><br>
                <button class="btn-hollow" @click="saveText">保存</button>
                <a class="cancel" href="javascript:void(0)" @click="showText=false">取消</a>
            </div>
            <div class="under-line"></div>
            <ul class="user-dynamic">
                <li>
                    <nuxt-link to="/users/123/subscriptions">
                        <i class="fa fa-th-large"></i>
                        <span>我关注的专题/文集/连载</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/users/123/liked_notes">
                        <i class="fa fa-heart-o"></i>
                        <span>我喜欢的文章</span>
                    </nuxt-link>
                </li>
            </ul>
            <!--专题和文集-->
            <div>
                <div class="clear">
                <div class="title">我创造的专题</div>
                <div class="creatspecial">
                    <i class="fa fa-plus"></i>
                    <span>新建专题</span>
                </div>
                </div>
                <div>
                    <a href="javascript:void (0)" class="avatar-collection"><img  src="../assets/img/cloth.jpg" alt=""></a>
                    <a href="javascript:void(0)"><div class="name" >即将毕业的大学生</div></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue"
    export default {
        name: "aside-special",
        data() {
            return {
                comments: [],
                a: '',
                showText: false,
            }
        },
        methods: {
            saveText() {
                Vue.set(this.comments, 0, {text: document.querySelector('.comment').value})
                this.a = document.querySelector('.comment').value;
                this.showText = false;
            },
            recomposeText() {
                this.showText = true;
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 30px;
        padding-right: 0px;
    }
    .clear {
        overflow: hidden;
    }
    .title {
        display: inline-block;
        float: left;
        margin-bottom: 10px;
        font-size: 14px;
        color: #969696;
    }
    .function-btn {
        display: block;
        float: right;
        font-size: 13px;
        color: #969696 !important;
    }
    .function-btn:hover {
        color: #333 !important;
    }
    .comment {
        background-color: hsla(0, 0%, 71%, .1);
        border-radius: 3px;
        resize: none;
        outline: none;
        padding: 5px 10px;

    }
    .text {
        font-size: 14px;
    }
    .under-line {
        width: 100%;
        height: 1px;
        margin-top: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #f0f0f0;
    }
    .btn-hollow {
        padding: 5px 20px;
        font-size: 14px;
        border: 1px solid rgba(59, 194, 29, .7);
        color: #42c02e !important;
        font-weight: 400;
        line-height: normal;
        border-radius: 40px;
        background: none;
        outline: none;
        cursor: pointer;
        margin-top: 10px;
    }
    .btn-hollow:hover {
        background-color: rgba(59, 194, 29, .05);
    }
    .cancel {
        margin-left: 10px;
        font-size: 14px;
        color: #969696 !important;
        line-height: 34px;
        vertical-align: middle;
        margin-top: 10px;
    }
    .cancel:hover {
        color: #000 !important;
    }
    .user-dynamic {
        padding-bottom: 6px !important;
        margin-bottom: 16px !important;
        border-bottom: 1px solid #f0f0f0;
    }
    .user-dynamic li {
        margin-bottom: 10px;
    }
    .user-dynamic i {
        margin-right: 10px;
        font-size: 20px;
        vertical-align: middle;
    }
    .user-dynamic span {
        font-size: 14px;
        line-height: 30px;
    }
    .new-collection-block {
        position: relative;
        margin-bottom: 16px;
        padding: 0 0 16px;
        border-bottom: 1px solid #f0f0f0;
    }
    .new-collection-btn {
        font-size: 13px;
        color: #42c02e !important;
    }
    .new-collection-btn i {
        padding-right: 2px;
    }
    .creatspecial{
        font-size: 13px;
        color: #42c02e;
        display: inline-block;
        float: right;
    }
    .list {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 16px !important;
    }
    .list li a {
        color: #969696 !important;
        margin-right: 5px;
        vertical-align: middle;
    }
    .list li a.name {
        color: #333 !important;
    }
    .avatar-collection{
        width: 32px;
        height: 32px;
        display: inline-block;
        margin-right:8px;
    }
    .avatar-collection img{
        width: 100%;
        border-radius: 10%;
    }
    .name{
        display: inline-block;
        font-size: 14px;
        color: #333;
    }
</style>