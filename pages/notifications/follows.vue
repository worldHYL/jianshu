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
import MyAside from "~/components/MyAside";
export default {
  name: "follows",
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
.notification .main .follow-list li {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
}
.notification .main .follow-list .avatar {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: inline-block;
}
.notification .main .follow-list .info {
  max-width: 420px;
  display: inline-block;
  vertical-align: top;
}
.notification .main .follow-list .info .user {
  font-size: 15px;
  color: #333;
  margin: 0 5px 0 0;
}
.notification .main .follow-list .time {
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}
.btn {
  padding: 0;
}
.no_follow {
  float: right;
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
  background-color: #fff;
  color: #8c8c8c !important;
  font-size: 15px !important;
  padding: 5px 6px !important;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
}
span {
  margin-left: 2px;
}
</style>
