<template>
  <div>
      <my-header></my-header>
       <div class="note">
           <!--文章区域-->
           <div class="post">
               <!--正文-->
               <div class="article">
                   <h1 class="title">大年初一</h1>
                   <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                        <img src="../../assets/img/user.jpg" alt="">
                        </nuxt-link>
                        <div class="info">
                            <span class="name">测试用户</span>
                            <a href="javascript:void(0)" class="btn-sm" :class="followObj" @click="bjclick" @mouseover="bjover"  @mouseout="bjout" ref="gz">
                                <i class="fa" :class="iconObj" ref="icon"></i>
                                 <span ref="guanzhu">关注</span>
                            </a>
                        <div class="meta">
                            <span>2018.01.23 16:09</span>
                            <span>字数 3273</span>
                            <span>阅读 5550</span>
                            <span>评论 55</span>
                            <span>喜欢 34</span>
                        </div>
                        </div>
                       
                    </div>
                    <!--文章内容-->
                   <div data-note-content="" class="show-content">
                    <p>大年初一的早晨，定了六点的闹钟。当它准时奏起起床的音乐时，我还是在心里挣扎了很久才睁开眼睛。昨晚睡得太晚了。</p>
                    <p>佑翻了个身，拥我入怀。“新年好，老婆！”他笑着吻了一下我的额头。</p>
                    <p>“新年好，老公！新的一年终于来了！”我更深地扎进他的怀里，充分地感受着这温暖的怀抱。</p>
                    <p>“你们的婚姻真是童话婚姻。”我又想起了你说的这句话。是的，今年是我们结婚整整二十年，我用我的感性维持着我们婚姻的鲜度，我不喜欢那种麻木到两个人只有柴米油盐的生活。</p>
                    <p>怎么又想起了你，在大洋彼岸的你还好吗？七年了，你不想念我们，不想念你的祖国吗？</p>
                    <p>“过年好，希望你一切都好！”我叹了一口气，在心里默默地祝福了你。</p>

                   </div>
               </div>
               <div class="show-foot">
                   <nuxt-link to="/nb/123" class="notebook">
                   <i class="fa fa-book"></i>
                   <span>我的文集</span>
                   </nuxt-link>
                   <div class="copyright">
                       © 著作权归作者所有
                   </div>
               </div>
               <div class="follow-detail">
                <div class="info">
                  <nuxt-link class="avatar" to="/u/123">
                  <img src="../../assets/img/user.jpg" alt="">
                   </nuxt-link>          
                   <a class="btn btn-success followb" href="javascript:void(0)" :class="followObj" @click="bjclick" @mouseover="bjover"  @mouseout="bjout" ref="gz">
                       <i class="fa" :class="iconObj" ref="icon2"></i>
                       <span ref="guanzhu2">关注</span></a>
                   <nuxt-link class="title" to="/u/123">散漫</nuxt-link>
                   <i class="fa fa-mars ic-man"></i>
                   <p>写了 13138 字，被 27 人关注，获得了 29 个喜欢</p>
                </div>
                <div class="signature">知我者，谓我心忧。不知我者，谓我何求。。。</div>
                </div>
               <div class="meta-bottom clearfix">
                 <div class="like"> 
                    <div class="btn" :class="likeObj" @click="likeOk"> 
                        <div class="btn-like">
                            <a class="fontLike"><i class="fa fa-heart-o"></i>
                            喜欢
                            </a>
                        </div>
                        <div class="modal-wrap">
                            <a class="fontNum">{{number}}</a>
                        </div>
                    </div>
                 </div>
                 <div class="share-group">
                        <b-tooltip  target = "Button1" title = "分享到微信"></b-tooltip >
                        <b-tooltip  target = "Button2" title = "分享到微博"></b-tooltip >
                        <b-tooltip  target = "Button3" title = "分享到QQ"></b-tooltip >
                     <a href="javascript:void(0)" id = "Button1"  variant = "outline-success">
                         <i class="fa fa-weixin weixin"></i>
                       </a>
                          <a href="javascript:void(0)" id = "Button2"  variant = "outline-success">
                         <i class="fa fa-weibo weibo"></i>
                     </a>
                          <a href="javascript:void(0)" id = "Button3"  variant = "outline-success">
                         <i class="fa fa-qq qq"></i>
                     </a>
                     <div class="btn more-share" @click.stop="moreBtn" id="ms" ref="mode">
                         更多分享
                     </div>
                     <div class="motai" v-show="mk">
                          <div class="content">
                          <ul>
                              <li><i class="fa fa-star"></i><span>分享到QQ空间</span></li>
                              <li><i class="fa fa-twitter"></i><span>分享到Twitter</span></li>
                              <li><i class="fa fa-facebook-official"></i><span>分享到FaceBook</span></li>
                              <li><i class="fa fa-google-plus"></i><span>分享到Google+</span></li>
                              <li><i class="fa fa-bug"></i><span>分享到豆瓣</span></li>
                         </ul>
                          </div>
                         <div class="san"></div>
                     </div>
                 </div>
               </div>
              <!--留言-->
              <myComment></myComment>
           </div>

           <!--悬浮的操作框-->
           <div class="side-bar"></div>
           <!--对应的推荐阅读-->
           <div class="note-bottom"></div>
       </div>
  </div>
</template>
<script>
import myHeader from "~/components/MyHeader";
import myComment from "~/components/MyComment";
import $ from 'jquery';
export default {
  data() {
    return {
      number: 26,
      mk:false,
      followObj: {
        follow: true,
        followed: false
      },
      iconObj: {
        "fa-plus": true,
        "fa-check": false
      },
      likeObj: {
        "like-group": true,
        likeActive: false
      },

    };
  },
  methods: {
    bjclick() {
      this.followObj.follow = !this.followObj.follow;
      this.followObj.followed = !this.followObj.followed;
      this.iconObj["fa-plus"] = !this.iconObj["fa-plus"];
      this.iconObj["fa-check"] = !this.iconObj["fa-check"];
      let word = this.$refs.guanzhu.innerHTML;
      this.$refs.guanzhu.innerHTML = word == "关注" ? "已关注" : "关注";
      this.$refs.guanzhu2.innerHTML = word == "关注" ? "已关注" : "关注";
    },
    bjover() {
      let word = this.$refs.guanzhu.innerHTML;
      if (word == "已关注") {
        this.$refs.icon.className = "fa fa-times";
        this.$refs.icon2.className = "fa fa-times";
        this.$refs.guanzhu.innerHTML = "取消关注";
        this.$refs.guanzhu2.innerHTML = "取消关注";
        this.$refs.gz.style.background = "#f8f8f8";
      }
    },
    bjout() {
      let word = this.$refs.guanzhu.innerHTML;
      if (word == "取消关注") {
        this.$refs.icon.className = "fa fa-check";
        this.$refs.icon2.className = "fa fa-check";
        this.$refs.gz.style.background = "";
        this.$refs.guanzhu.innerHTML = "已关注";
        this.$refs.guanzhu2.innerHTML = "已关注";
      }
    },
    likeOk() {
      if(this.likeObj["likeActive"]==true){
          //不喜欢
        --this.number;
      }else{
         //喜欢
        ++this.number;
      }
      this.likeObj["like-group"] = !this.likeObj["like-group"];
      this.likeObj["likeActive"] = !this.likeObj["likeActive"];
    },
    //阻止事件传播
    moreBtn(ev){
        this.mk=true;
    },
    //使用refs和target判断id值
    // handleBodyClick(ev){
    //     let con=this.$refs.mode.id;
    //      let add=ev.target.id;
    //      if(con!=add){
    //        this.mk=false;
    //      }
    // },

    handleBodyClick(ev){
      this.mk=false;
    }
  },
mounted () {
  document.addEventListener('click', this.handleBodyClick);
},
  components: {
    myHeader,
    myComment
  }
};
</script>

<style scoped>

</style>
