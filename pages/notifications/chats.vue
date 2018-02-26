<template>
  <div>
    <my-header></my-header>
    <div class="my-container">
      <div class="row">
        <div class="col-4 aside">
          <my-aside></my-aside>
        </div>
        <div class="col-8 main"></div>
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
  }
};
</script>
<style scoped>
  @import '../../assets/css/notifications.css'
.notification .aside {
  margin-top: 30px;
  padding: 0 0 30px;
  max-width: 280px;
  overflow: auto;
}
.notification .main {
  margin-top: 30px;
  padding-left: 30px;
}
.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .jianxin-list li{
position: relative;
border-top: 1px solid #f0f0f0;
}
.notification .main .jianxin-list .pull-right{
  margin: 20px 20px 0 0;
  font-size: 13px;
}
.notification .main .jianxin-list .pull-right .time{
  color:#9b9b9b;
}
.notification .main .jianxin-list .pull-right i{
  color: #9b9b9b;
  margin-left: 5px;
  cursor: pointer;
}
.notification .main .jianxin-list .pull-right .dropdown-menu{
  top: auto;
  left: auto;
  right: 15px;
  color: #333;
  display: block;
  min-width: inherit;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}
.notification .main .jianxin-list .pull-right .dropdown-menu li{
  border: none;
  line-height: 20px;
}
.notification .main .jianxin-list .pull-right .dropdown-menu a:hover{
  background-color: #f5f5f5;
}
.notification .main .jianxin-list .pull-right .dropdown-menu a{
  display: block;
  font-weight: 400;
  color: #333;
  clear: both;
  line-height: 1.4;
  padding: 10px 20px;
  white-space: nowrap;
}
.notification .main .jianxin-list .pull-right .dropdown-menu i{
  margin-right: 10px;
  color: #333;
}
.notification .main .jianxin-list .avatar{
 float: left;
 width: 48px;
 height: 48px;
 margin: 20px 10px 20px 20px;
}
.notification .main .jianxin-list .name{
  position:absolute;
  top: 25px;
  font-size: 15px;
}
.notification .main .jianxin-list .wrap{
  display:block;
  padding: 20px 20px 20px 0;
  min-height:80px;
}
.notification .main .jianxin-list p{
  margin-top:28px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}
</style>
