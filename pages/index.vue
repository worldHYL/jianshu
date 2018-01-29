<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <div class="col-8 main">
                    <div class="banner">
                        <div v-swiper:mySwiper="swiperOption">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="banner in banners">
                                    <img :src="banner">
                                </div>
                            </div>
                            <div class="swiper-pagination swiper-button-white"></div>
                            <div class="swiper-button-next swiper-button-white"></div>
                            <div class="swiper-button-prev swiper-button-white"></div>
                        </div>
                    </div>
                    <!--推荐专题-->

                </div>
                <div class="col-4 aside">
                    <div class="board">
                        <nuxt-link to="/">
                            <img src="../assets/img/board1.png" alt="">
                            <img src="../assets/img/board2.png" alt="">
                            <img src="../assets/img/board3.png" alt="">
                            <img src="../assets/img/board4.png" alt="">
                            <img src="../assets/img/board5.png" alt="">
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader'
    export default {
        data () {
            return {
                banners: [ './lbt1.jpg', './lbt2.jpg', './lbt3.jpg', './lbt4.jpg', './lbt5.jpg', './lbt6.jpg' ],
                swiperOption: {
                    autoplay:{
                        delay:1000,//切换时间
                        stopOnLastSlide:false,//是否停止在最后一张
                        disableOnInteraction:false,//禁止轮播
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation:{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev'
                    }
                }
            }
        },
        components:{
            myHeader
        },
    }
</script>
<style scoped>

</style>