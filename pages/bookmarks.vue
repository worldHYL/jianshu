<template>
  <div>
  <my-header></my-header>
  <div class="my-container bookmarks">
      <div class="row">
          <div class="main">
              <img src="../static/bookmarks.png" alt="" class="tag-banner">
              <!--收藏列表-->
              <ul class="nost-list">
                  <li>
                      <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="../assets/img/user.jpg" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">岁月成蹉跎</nuxt-link>
                                   <span class="time">前天 15:31</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                          《狼图腾》
                          </nuxt-link>
                          <p class="abstract">
                              《狼图腾》是世界上第一部部以狼为叙述主体的小说，1971年起腹稿于内蒙古锡盟东乌珠穆沁草原，1997年初稿于北京，2003年岁末定稿于北京，2004年4月出版。该书在中国大陆发行300余万册，连续6年蝉联文学图书畅销榜的前十名，获得各种奖项几十余种.
                          </p>
                          <div class="meta">
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> 66
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> 88
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> 86
                              </span>
                              <a href="javascript:void(0)" class="cancel">取消收藏</a>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
export default {
  name:'bookmarks',
  components:{
      MyHeader
  }
}
</script>
<style scoped>
.bookmarks .main{
    padding-top: 30px;
    margin-left: 12.5%;
    width: 75%;
}
.bookmarks .main .tag-banner{
    width: 100%;
    margin-bottom: 30px;
    min-height: 100px;
}
.bookmarks .main .nost-list li{
    position: relative;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
} 
.bookmarks .main .nost-list .author{
 margin-bottom: 7px;
 font-size: 13px;
}
.bookmarks .main .nost-list .author .avatar{
    display: inline-block;
    margin-right: 5px;
}
.bookmarks .main .nost-list .author .info{
    display: inline-block;
    vertical-align: middle;
}
.nost-list .author .info span{
    padding-left: 3px;
    color: #969696;

}
.nost-list .content .title{
 margin-bottom: 4px;
 font-size: 18px;
 font-weight: 700;
 display: inline-block;
}
.nost-list .abstract{
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
}
.nost-list .meta{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
}
.nost-list .meta a{
    margin-right: 10px;
}
.nost-list .meta span{
    margin-right: 10px;
}
.nost-list li.have-img{
    min-height: 140px;
}
.nost-list .have-img .wrap-img{
    position: absolute;
    right: 0;
    top:50%;
    margin-top: -68px;
    width: 150px;
    height: 120px;
}
.nost-list .have-img .wrap-img img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
}
.nost-list .have-img>div{
    padding-right: 160px;
}
</style>
