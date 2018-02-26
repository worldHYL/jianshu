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
  components: {
      MyHeader,
      MyAside
  }
}
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
.notification .main .push-list li{
  border-top: 1px solid #f0f0f0;
}
.notification .main .push-list .wrap{
  padding: 20px;
  display: block;
}
.notification .main .push-list .all-push{
  position: relative;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  text-align: center;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}
.notification .main .push-list .all-push i{
  margin-top: 14px;
  font-size: 25px;
  color: #ea6f5a;
  display: block;
}
.notification .main .push-list .name{
  display: inline-block;
  font-size: 15px;
  vertical-align: middle;
  max-width: 500px;
}
</style>
