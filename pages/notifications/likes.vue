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
  name: "likes",
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
.notification .main .find-nothing{
  margin-top: 150px;
  text-align: center;
}
.notification .main .find-nothing img{
  width: 100px;
  vertical-align: middle;
}
.notification .main .find-nothing div{
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .like-list li{
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  line-height: 20px;
}
.notification .main .like-list .avatar{
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 5px;
}
.notification .main .like-list .info{
  display: inline-block;
  vertical-align: middle;
}
.notification .main .like-list .info .user{
  margin: 0 5px 0 0;
  color: #333!important;
}
.notification .main .like-list .info a{
  color: #3194d0!important;
}
.notification .main .like-list .time{
  margin-top: 2px;
  font-size: 12px;
  color:#969696;
}
</style>
