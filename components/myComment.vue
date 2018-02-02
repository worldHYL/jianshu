<template>
    <div id="comment-list" class="comment-list">
        <!--提交留言的表单-->
        <form class="new-comment">
            <nuxt-link class="avatar" to="/u/213">
                <img src="../assets/img/default-avatar.jpg" alt="">
            </nuxt-link>
            <textarea @focus="send = true" placeholder="写下你的评论" v-model = 'value'></textarea>
            <transition :duration="200"
                        enter-active-class = 'animated fadeIn'
                        leave-active-class = "animated fadeOut">
                <div v-if="send" class="write-function-block clearfix">
                    <div class="emoji-modal-wrap">
                        <a href="javascript:void(0)" @click="showEmoji =!showEmoji" class="emoji">
                            <i class="fa fa-smile-o"></i>
                        </a>
                        <div v-if="showEmoji" class="arrow-up emoji-modal">
                            <vue-emoji @select="selectEmoji">

                            </vue-emoji>
                        </div>
                    </div>
                    <div class="hint">ctrl+enter 发表</div>
                    <a href="javascript:void(0)" class="btn btn-send" @click="sendData">发送</a>
                    <a @click="send=false" href="javascript:void(0)" class="cancel">取消</a>
                </div>
            </transition>
        </form>
    </div>
</template>
<script>
    import vueEmoji from '~/components/vueEmoji'
    export default {
        name: "myComment",
        data(){
            return{
                send:false,
                showEmoji:false,
                value:'',
            }
        },
        methods:{
            selectEmoji:function (code) {
                this.showEmoji = false;
                this.value += code;
            },
            sendData:function () {
                console.log('发送给value值得数据给后端')
            },
        },
        components:{
            vueEmoji,
        }
    }
</script>
<style scoped>
    .note .post .comment-list{
        padding-top: 20px;
        margin-bottom:500px;
    }
    .note .post .comment-list .new-comment{
        position:relative;
        margin-left:48px;
        margin-bottom:20px;
    }
    .note .post .comment-list .avatar{
        width: 38px;
        height: 38px;
        display: inline-block;
        margin-right: 5px;
    }
    .note .post .comment-list .new-comment .avatar{
        position:absolute;
        left:-48px;
    }
    .note .post .comment-list textarea{
        width: 100%;
        height: 80px;
        padding: 10px 15px;
        border:1px solid #ccc;
        border-radius: 4px;
        display: inline-block;
        vertical-align: top;
        outline-style: none;
        resize: none;
        font-size: 13px;
        background-color: #f8f8f8;
        z-index: 999;
    }
    .note .post .comment-list .new-comment .emoji-modal-wrap{
        position: relative;
    }
    .note .post .comment-list .new-comment .emoji{
        float:left;
        margin-top:14px;
    }
    .note .post .comment-list .new-comment .emoji i{
        font-size: 23px;
        color:#969696;
    }
    .note .post .comment-list .new-comment .emoji i:hover{
        color: #333333!important;
    }
    .note .post .comment-list .new-comment .hint{
        float:left;
        margin:20px 0 0 20px;
        font-size:13px;
        color:#969696;
    }
    .note .post .comment-list .new-comment .cancel{
        float:right;
        font-size:16px;
        margin:18px 30px 0 0;
        color:#969696!important;
    }
    .note .post .comment-list .new-comment .cancel:hover{
        color: #333333!important;
    }
    .note .post .comment-list .new-comment .btn-send{
        float:right;
        width:78px;
        padding:8px 18px;
        margin: 10px 0px;
        background-color: #42c02e;
        border-radius: 20px;
        color:white!important;
        text-align: center;
        box-shadow: none;
    }
    .note .post .comment-list .new-comment .btn-send:hover{
        background-color: #3db922;
    }
    .note .post .comment-list .new-comment .emoji-modal-wrap .emoji-modal{
        background-color: white;
        position: absolute;
        width: 402px;
        height: 208px;
        padding: 10px;
        left:-48px;
        top:45px;
        border:1px solid #d9d9d9;
        border-radius:4px;
    }
    .arrow-up:after{
        content:'';
        display: inline-block;
        border-bottom:10px solid #d9d9d9;
        border-left:10px solid rgba(238,238,238,0);
        border-right:10px solid rgba(238,238,238,0);
        position:absolute;
        left:46px;
        top:-20px;
        border-bottom-color:#d9d9d9;
        width: 20px;
        height: 20px;
    }
</style>