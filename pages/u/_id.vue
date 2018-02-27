<template>
  <div>
    <my-header></my-header>
    <div class="person my-container">
      <div class="row">
          <div class="col-8 main" >
             <div class="main-top">
                 <nuxt-link to="/u/123" class="avatar">
                 <img src="../../assets/img/default-avatar.jpg" alt="">
                 </nuxt-link>
                 <div class="title">
                  <nuxt-link to="/u/123" class="name">明日_何其多</nuxt-link>
                 </div>
                 <div class="info">
                  <ul>
                      <li>
                          <div class="meta-block">
                              <nuxt-link to="/u/123/following">
                              <p>66</p>
                              关注
                              <i class="fa fa-angle-right "></i>
                              </nuxt-link>
                          </div>
                      </li>
                          <li>
                          <div class="meta-block">
                              <nuxt-link to="/u/123/followers">
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
             <div id="outer-container">
                 <ul class="trigger-menu">
                     <li v-for="(trigger,index) in triggers" ref="triggers" :key="index" @click="dhClick(index)" >
                        <a href="javascript:void(0)">
                            <i :class="trigger.icon"></i>
                            {{trigger.title}}
                        </a>
                     </li>
                 </ul>
                 <div id="list-container">
                     <!--动态列表模块-->
                     <ul class="note-list" v-if="dynamic">
                         <!--喜欢了文章-->
                         <li>
                             <div class="content">
                                    <div class="author">
                                     <nuxt-link to="/u/123" class="avatar">
                                     <img src="../../assets/img/default-avatar.jpg" alt="">
                                     </nuxt-link>
                                     <div class="info">
                                         <nuxt-link to="/u/123" class="nickname">明日</nuxt-link>
                                         <em> • </em>
                                         <span>喜欢了文章 • 02.05 12:14</span>
                                     </div>
                                 </div>
                                <blockquote style="padding-top:0;border-left:0;padding-left:0">
                                   <nuxt-link to="/p/123" class="liketitle">这是动态页面</nuxt-link>
                                    <p class="abstract" style="color:#333">
                                    的哈伦裤收到了拉施蒂利克哈三联肯定会拉黑施蒂利克黄蜡石客户端粮库sad老客户看见了粉红色大立科技发货了跨境电商好几款看见 .
                                    </p>
                                    <div class="meta">
                                        <div class="origin-author">
                                            <nuxt-link to="/u/123">清仁</nuxt-link>
                                        </div>
                                        <nuxt-link to="/p/123">
                                        <i class="fa fa-eye"></i>
                                        2360
                                        </nuxt-link>
                                        <nuxt-link to="/p/123">
                                        <i class="fa fa-comment"></i>
                                        400
                                        </nuxt-link>
                                        <span class="heart">
                                            <i class="fa fa-heart"></i>
                                            288
                                        </span>
                                    </div>
                                 </blockquote>
                             </div>
                              
                         </li>
                     </ul>
                     <!--文章列表模块-->
                     <ul class="note-list" v-if="article">
                       <li>
                         <div class="content">
                           <div class="author">
                             <nuxt-link to="/u/123" class="avatar">
                             <img src="../../assets/img/default-avatar.jpg" alt="">
                             </nuxt-link>
                             <div class="info">
                               <nuxt-link to="/u/123" class="nickname">
                                   明日_何其多
                               </nuxt-link>
                               <span class="time">02.05 11:48</span>
                             </div>
                           </div>
                           <nuxt-link to="/p/123" class="title">
                           简书项目
                           </nuxt-link>
                           <p class="abstract">这是文章页面!</p>
                           <div class="meta">
                               <nuxt-link to="/p/123">
                                        <i class="fa fa-eye"></i>
                                        62
                                        </nuxt-link>
                                        <nuxt-link to="/p/123">
                                        <i class="fa fa-comment"></i>
                                        88
                                        </nuxt-link>
                                        <span class="heart">
                                            <i class="fa fa-heart"></i>
                                            26
                                        </span>
                           </div>
                         </div>
                       </li>
                     </ul>
                     <!--最新评论-->
                      <ul class="note-list" v-if="new_comment">
                       <li>
                         <div class="content">
                           <div class="author">
                             <nuxt-link to="/u/123" class="avatar">
                             <img src="../../assets/img/default-avatar.jpg" alt="">
                             </nuxt-link>
                             <div class="info">
                               <nuxt-link to="/u/123" class="nickname">
                                   明日_何其多
                               </nuxt-link>
                               <span class="time">02.05 11:48</span>
                             </div>
                           </div>
                           <nuxt-link to="/p/123" class="title">
                           简书项目
                           </nuxt-link>
                           <p class="abstract">这是评论页面!</p>
                           <div class="meta">
                               <nuxt-link to="/p/123">
                                        <i class="fa fa-eye"></i>
                                        6
                                        </nuxt-link>
                                        <nuxt-link to="/p/123">
                                        <i class="fa fa-comment"></i>
                                        4
                                        </nuxt-link>
                                        <span class="heart">
                                            <i class="fa fa-heart"></i>
                                            2
                                        </span>
                           </div>
                         </div>
                       </li>
                     </ul>
                     <!--热门-->
                      <ul class="note-list" v-if="hot">
                       <li>
                         <div class="content">
                           <div class="author">
                             <nuxt-link to="/u/123" class="avatar">
                             <img src="../../assets/img/default-avatar.jpg" alt="">
                             </nuxt-link>
                             <div class="info">
                               <nuxt-link to="/u/123" class="nickname">
                                   明日_何其多
                               </nuxt-link>
                               <span class="time">02.05 11:48</span>
                             </div>
                           </div>
                           <nuxt-link to="/p/123" class="title">
                           使用简书
                           </nuxt-link>
                           <p class="abstract">这是热门页面!</p>
                           <div class="meta">
                               <nuxt-link to="/p/123">
                                        <i class="fa fa-eye"></i>
                                        6
                                        </nuxt-link>
                                        <nuxt-link to="/p/123">
                                        <i class="fa fa-comment"></i>
                                        4
                                        </nuxt-link>
                                        <span class="heart">
                                            <i class="fa fa-heart"></i>
                                            2
                                        </span>
                           </div>
                         </div>
                       </li>
                     </ul>
                 </div>
             </div>
          </div>
          <div class="col-4 aside clearfix" >
              <div class="title">个人介绍</div>
              <a href="javascript:void(0)" class="function-btn">
                  <i class="fa fa-pencil"></i>
                  编辑
              </a>
              <div class="description">
              </div>
              <ul class="user-dynamic">
                  <li>
                      <nuxt-link to="/u/123/subscription">
                      <i class="fa fa-th-large"></i>
                      <span>我关注的专题/文集/连载</span>
                      </nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="/u/123/liked_notes">
                      <i class="fa fa-heart-o"></i>
                      <span>我喜欢的文章</span>
                      </nuxt-link>
                  </li>
              </ul>
              <!--专题和文集-->
               <div>
                 <div class="title change" >我创造的专题</div>
                 <div class="new-collection-block">
                     <nuxt-link to="/collections/new" class="new-collection-btn">
                     <i class="fa fa-plus"></i>
                     <span>创建一个新专题</span>
                     </nuxt-link>
                 </div>
               </div>
               <div>
                      <div class="title change" >我的文集</div>
                       <ul class="list">
                           <li>
                               <nuxt-link to="/nb/123">
                                 <i class="fa fa-book"></i>
                               </nuxt-link>
                               <nuxt-link to="/nb/123" class="name">
                                日记本
                               </nuxt-link>
                           </li>
                       </ul>
               </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
export default {
  data() {
    return {
      triggers: [
        {
          icon: "fa fa-file-text",
          title: "文章"
        },
        {
          icon: "fa fa-snapchat-ghost",
          title: "动态"
        },
        {
          icon: "fa fa-comments ",
          title: "最新评论"
        },
        {
          icon: "fa fa-fire",
          title: "热门"
        }
      ],
      icons:'fa-check',
      dynamic: false,
      article:false,
      hot:false,
      new_comment:false
    };
  },
  methods: {
    dhClick(i) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
     if(i==0){
      this.article=true;
      this.dynamic=false;
      this.hot=false;
      this.new_comment=false;
     }else if (i == 1) {
       this.article=false;
        this.dynamic = true;
        this.hot=false;
      this.new_comment=false;
      }else if(i==2){
       this.article=false;
        this.dynamic = false;
        this.hot=false;
      this.new_comment=true;
      }else if(i==3){
       this.article=false;
        this.dynamic = false;
        this.hot=true;
      this.new_comment=false;
      }
    },
    followBtn(){
     if(this.$refs.followed.innerHTML=='取消关注'){
     this.icons="fa-plus";
     this.$refs.followed.innerHTML="关注";
     this.$refs.aFollow.className='no_follow';
     }else if(this.$refs.followed.innerHTML=='关注'){
     this.icons="fa-check";
     this.$refs.followed.innerHTML="已关注";
     this.$refs.aFollow.className='is_follow';
     }
    },
    followOver(){
    if(this.$refs.followed.innerHTML=='已关注'){
     this.icons='fa-times';
     this.$refs.followed.innerHTML="取消关注";
     }
    },
    followOut(){
    if(this.$refs.followed.innerHTML=='取消关注'){
    this.icons='fa-check';
     this.$refs.followed.innerHTML="已关注";
     }
    }
  },
  mounted(){
    this.article=true;
    this.$refs.triggers[0].className = "trigger_active";
  },
  components: {
    MyHeader
  }
};
</script>

<style scoped>
.person {
  overflow-x: hidden;
}
.person .row {
  padding-top: 30px;
}
.person .main .main-top {
  margin-bottom: 20px;
}
.person .main .main-top .avatar {
  float: left;
  width: 80px;
  height: 80px;
  margin-left: -2px;
}
.person .main .main-top .title {
  padding: 5px 0 0 100px;
}
.person .main .main-top .title .name {
  font-size: 21px;
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;
}
.person .main .main-top .info {
  margin-top: 5px;
  padding-left: 100px;
  font-size: 14px;
}
.person .main .main-top .info ul li {
  display: inline-block;
}
.person .main .main-top .info ul .meta-block {
  font-size: 12px;
  margin: 0 7px 6px 0;
  padding: 0 7px 0 0;
  border-right: 1px solid #f0f0f0;
  color: #969696;
}
.person .main .main-top .info ul p {
  margin-bottom: -3px;
  font-size: 15px;
  color: #333;
}
.person .main .main-top .info ul .meta-block i {
  margin-left: 3px;
}
.trigger-menu {
  margin-bottom: 20px !important;
  border-bottom: 1px solid #f0f0f0;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  color: #969696;
  margin-bottom: -1px;
}
.trigger_active {
  color: #646464 !important;
  border-bottom: 2px solid #646464;
}
/*切换动画*/
.trigger-menu li::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  bottom: 0px;
  width: 0;
  transition: all ease 0.3s;
  opacity: 0;
  border-bottom: 2px solid #b4b4b4;
}
.trigger-menu li:hover {
  color: #646464 !important;
}
.trigger-menu li:hover::after {
  left: 0%;
  width: 100%;
  opacity: 1;
  border-bottom: 2px solid #646464;
}
.trigger-menu a {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
}
.trigger-menu i {
  margin-right: 5px;
  font-size: 17px;
}

.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 17px;
  padding: 0 2px 17px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
.note-list .author {
  margin-bottom: 14px;
  font-size: 13px;
}
.note-list .author .avatar {
  display: inline-block;
  vertical-align: middle;
}
.note-list .author .info {
  display: inline-block;
  vertical-align: middle;
  color: #333;
}
.note-list .author .info .nickname {
  vertical-align: middle;
}
.note-list .author .info em {
  vertical-align: middle;
}
.note-list .author .info span {
  display: inline-block;
  vertical-align: middle;
  color: #969696;
  padding-left: 3px;
}
.note-list .comment {
  font-size: 15px;
  line-height: 1.7;
}
.note-list blockquote {
  margin-bottom: 0;
  color: #969696;
  padding: 10px 20px;
  font-size: 17.5px;
  border-left: 3px solid #d9d9d9;
}
.note-list blockquote .origin-author {
  font-size: 12px;
  color: #969696;
}
.note-list .origin-author a {
  margin-right: 5px;
  color: #3194d0 !important;
}
.note-list blockquote .title {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
  color: #333 !important;
}
.note-list .meta {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.note-list .origin-author {
  margin-bottom: 5px;
  display: inline;
}
.note-list .meta>a {
  margin-right: 10px;
  color:#b4b4b4!important;
}
.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4!important;
}

.note-list .liketitle {
  margin: -7px 0 4px;
  display: inline;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #333 !important;
}
.note-list .follow-detail {
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
  background-color: #f7f7f7;
}
.note-list .follow-detail .avatar-collection {
  float: left;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  display: block;
}
.avatar-collection img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10%;
  vertical-align: middle;
}
.no_follow {
  float: right;
  margin-top: 8px;
  border-color: #42c02e;
  background-color: #42c02e;
  color: #fff !important;
  border-radius: 40px;
  outline: none;
  padding: 5px 20px;
  cursor: pointer;
}
.is_follow {
  float: right;
  outline: none;
  margin-top: 8px;
  color: #8c8c8c !important;
  font-size: 15px;
  padding: 5px 6px;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
}
.is_follow i {
  font-size: 16px;
}
.is_follow span {
  margin-left: 2px;
  display: inline;
  font-size: 16px;
}
.no_follow i {
  font-size: 16px;
}
.no_follow span {
  margin-left: 2px;
  display: inline;
  font-size: 16px;
}
.note-list .follow-detail .info .title {
  font-size: 17px;
  font-weight: 400;
}
.note-list .follow-detail .info p {
  color: #969696;
  margin-bottom: 10px;
}
.note-list .follow-detail .creater {
  color: #3194d0 !important;
}
.note-list .follow-detail .signature {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #969696;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.person .aside .title {
  float: left;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
}
.person .aside .function-btn {
  float: right;
  font-size: 13px;
  color: #969696 !important;
}
.person .aside .function-btn:hover {
  color: #333 !important;
}
.person .aside .description {
  position: relative;
  margin: 32px 0 16px 0;
  padding: 0 0 16px;
  border-bottom: 1px solid #f0f0f0;
}
.person .aside .user-dynamic {
  padding-bottom: 6px !important;
  margin-bottom: 16px !important;
  border-bottom: 1px solid #f0f0f0;
}
.person .aside .user-dynamic li {
  margin-bottom: 10px;
}
.person .aside .user-dynamic i {
  margin-right: 10px;
  font-size: 20px;
  vertical-align: middle;
}
.person .aside .user-dynamic span {
  font-size: 14px;
  line-height: 30px;
}
.person .aside .new-collection-block {
  position: relative;
  margin-bottom: 16px;
  padding: 0 0 16px;
  border-bottom: 1px solid #f0f0f0;
}
.person .aside .new-collection-btn {
  font-size: 13px;
  color: #42c02e !important;
}
.person .aside .new-collection-btn i {
  padding-right: 2px;
}
.person .aside .change {
  float: none;
}
.person .aside .list {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 16px !important;
}
.person .aside .list li a {
  color: #969696 !important;
  margin-right: 5px;
  vertical-align: middle;
}
.person .aside .list li a.name {
  color: #333 !important;
}
</style>
