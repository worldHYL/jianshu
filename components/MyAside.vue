<template>
    <div class="broadside">
        <ul id="changeColor" >
            <!--<li @click="changeColor(index)" v-for="(notification,index) in notifications" :class="notification.class"><nuxt-link :to="notification.url"> <i :class="notification.icon"></i>{{notification.name}}</nuxt-link></li>-->
            <li :class="{active:this.$route.path=='/notifications/comments'}"><nuxt-link to="/notifications/comments"><i class="fa fa-comment-o"></i>评论</nuxt-link></li>
            <li :class="{active:this.$route.path=='/notifications/chats'}"><nuxt-link to="/notifications/chats"><i class="fa fa-envelope-open-o"></i>简信</nuxt-link></li>
            <li :class="{active:this.$route.path=='/notifications/requests'}"><nuxt-link to="/notifications/requests"><i class="fa fa-upload"></i>投稿请求</nuxt-link></li>
            <li :class="{active:this.$route.path=='/notifications/likes'}"><nuxt-link to="/notifications/likes"><i class="fa fa-heart-o"></i>喜欢和赞</nuxt-link></li>
            <li :class="{active:this.$route.path=='/notifications/follows'}"><nuxt-link to="/notifications/follows"><i class="fa fa-user-o"></i>关注</nuxt-link></li>
        </ul>
    </div>
</template>
<script>
    import Vue from "vue"
    export default {
        data() {
            return {
               //  notifications:[
               //     {class:"active",url:"/notifications/comments",icon:"fa fa-comment-o",name:"评论"},
               //     {class:"",url:"/notifications/chats",icon:"fa fa-envelope-open-o",name:"简信"},
               //     {class:"",url:"/notifications/requests",icon:"fa fa-upload",name:"投稿请求"},
               //     {class:"",url:"/notifications/likes",icon:"fa fa-heart-o",name:"喜欢和赞"},
               //     {class:"",url:"/notifications/follows",icon:"fa fa-user-o",name:"关注"},
               // ],
            }
        },
        methods:{
            changeColor:function (index){
                // console.log(this.xnotifications[index])
                // for(let i =0;i<this.notifications.length;i++){
                //     Vue.set(this.notifications,i,{class:"",url:this.notifications[i].url,icon:this.notifications[i].icon,name:this.notifications[i].name})
                // }
                // Vue.set(this.notifications,index,{class:"active",url:this.notifications[index].url,icon:this.notifications[index].icon,name:this.notifications[index].name})


            },
        }
    }
</script>
<style scoped>
    .broadside ul li.active {
        background-color: #f0f0f0;
    }
    /*.broadside ul li:hover {*/
        /*background-color: #f0f0f0;*/
    /*}*/
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
        font-size: 20px;
        vertical-align: middle;
        font-weight: 600;
    }
</style>