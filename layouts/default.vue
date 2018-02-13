<template>
  <div id="default-template">
    <nuxt/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue)
  //时间过滤器
  Vue.filter('formatDate',function () {
      var date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      function fillZero(num) {
          return num = num > 9? num :'0' + num;
      }
      return fillZero(year) +'.' + fillZero(month) + '.' + fillZero(day) +' '+ fillZero(hour) +':'+ fillZero(minute);
  })
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {

}
</script>
<style scoped>
  body{
    padding-top: 56px!important;
  }
</style>