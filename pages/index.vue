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
                    <div class="recommend-collection">
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/a1.jpg" alt="">
                            <span>文学</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/a2.jpg" alt="">
                            <span>简书电影</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/a3.jpg" alt="">
                            <span>读书历史</span>
                        </nuxt-link><nuxt-link to="/collection/123">
                        <img src="../assets/img/a3.jpg" alt="">
                        <span>读书历史</span>
                    </nuxt-link><nuxt-link to="/collection/123">
                        <img src="../assets/img/a3.jpg" alt="">
                        <span>读书历史</span>
                    </nuxt-link><nuxt-link to="/collection/123">
                        <img src="../assets/img/a3.jpg" alt="">
                        <span>读书历史</span>
                    </nuxt-link><nuxt-link to="/collection/123">
                        <img src="../assets/img/a4.png" alt="">
                        <span>读书历史</span>
                    </nuxt-link>
                        <nuxt-link to="/collection/123" class="more-hot">
                            <span>更多热门专题</span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </nuxt-link>
                    </div>
                    <div class="splite-line"></div>
                    <!--文章列表-->
                    <div id="list-container">
                        <ul class="note-list">
                            <li class='have-img'>
                                <nuxt-link class="wrap-img" to="/p/123">
                                    <img src="../assets/img/img1.jpg" alt="">
                                </nuxt-link>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/u/123" class="avatar">
                                            <img src="../assets/img/auther-img.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/u/123" class="nickname">
                                                测试用户
                                            </nuxt-link>
                                            <span class="time">八小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p/123" class="title">
                                        如何把书中的知识转化为能力,这是我见过的最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着经济考虑收到后付款了卡萨丁分类考试的快乐收到付款了还是得噶快乐 回复的高科技回复的简单分工会宽带缴费简单分工空间的风格和会计师的风格看见对方 健康辅导和高科技和空间发的空间发的哈空间换个方式的考虑后果;kdjfhg kjdkfjgh kdf房价多少了看见的咖啡馆尽量快点发几个路口对方立刻感觉了对方空间管理空间发的连接管来克服了更好看对方立刻给家里开的房间管理扣裂缝的结果来看放到鼓励开发大概到付件案件管理会计l
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/p/123" class="collection-tag">
                                            短篇小说
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-eye"></i>
                                            579
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>546
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/u/123" class="avatar">
                                            <img src="../assets/img/auther-img.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/u/123" class="nickname">
                                                测试用户
                                            </nuxt-link>
                                            <span class="time">八小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p/123" class="title">
                                        如何把书中的知识转化为能力,这是我见过的最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着经济考虑收到后付款了卡萨丁分类考试的快乐收到付款了还是得噶快乐 回复的高科技回复的简单分工会宽带缴费简单分工空间的风格和会计师的风格看见对方 健康辅导和高科技和空间发的空间发的哈空间换个方式的考虑后果;kdjfhg kjdkfjgh kdf房价多少了看见的咖啡馆尽量快点发几个路口对方立刻感觉了对方空间管理空间发的连接管来克服了更好看对方立刻给家里开的房间管理扣裂缝的结果来看放到鼓励开发大概到付件案件管理会计l
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/p/123" class="collection-tag">
                                            短篇小说
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-eye"></i>
                                            579
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>546
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/u/123" class="avatar">
                                            <img src="../assets/img/auther-img.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/u/123" class="nickname">
                                                测试用户
                                            </nuxt-link>
                                            <span class="time">八小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p/123" class="title">
                                        如何把书中的知识转化为能力,这是我见过的最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着经济考虑收到后付款了卡萨丁分类考试的快乐收到付款了还是得噶快乐 回复的高科技回复的简单分工会宽带缴费简单分工空间的风格和会计师的风格看见对方 健康辅导和高科技和空间发的空间发的哈空间换个方式的考虑后果;kdjfhg kjdkfjgh kdf房价多少了看见的咖啡馆尽量快点发几个路口对方立刻感觉了对方空间管理空间发的连接管来克服了更好看对方立刻给家里开的房间管理扣裂缝的结果来看放到鼓励开发大概到付件案件管理会计l
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/p/123" class="collection-tag">
                                            短篇小说
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-eye"></i>
                                            579
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>546
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/u/123" class="avatar">
                                            <img src="../assets/img/auther-img.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/u/123" class="nickname">
                                                测试用户
                                            </nuxt-link>
                                            <span class="time">八小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p/123" class="title">
                                        如何把书中的知识转化为能力,这是我见过的最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着经济考虑收到后付款了卡萨丁分类考试的快乐收到付款了还是得噶快乐 回复的高科技回复的简单分工会宽带缴费简单分工空间的风格和会计师的风格看见对方 健康辅导和高科技和空间发的空间发的哈空间换个方式的考虑后果;kdjfhg kjdkfjgh kdf房价多少了看见的咖啡馆尽量快点发几个路口对方立刻感觉了对方空间管理空间发的连接管来克服了更好看对方立刻给家里开的房间管理扣裂缝的结果来看放到鼓励开发大概到付件案件管理会计l
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/p/123" class="collection-tag">
                                            短篇小说
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-eye"></i>
                                            579
                                        </nuxt-link>
                                        <nuxt-link class="tag" to="/p/123">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>546
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--阅读更多-->
                    <nuxt-link to="/" class="load-more">
                        阅读更多
                    </nuxt-link>
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
                    <!--自己添加二维码-->
                    <nuxt-link to="/" class="download">
                        <img src="../assets/img/QR.png" alt="">
                        <div class="title">下载简书app <i class="fa fa-angle-right"></i> </div>
                        <div>随时随地发现和创作内容</div>
                    </nuxt-link>
                    <div class="recommend-author">
                        <div class="title">
                            <span>推荐作者</span>
                            <a class="page-change" href="javascript:void(0)" @click="rotate">
                                <i ref="refresh" class="fa fa-refresh"></i>换一批
                            </a>
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link class="avator" to="/u/123">
                                    <img src="../assets/img/auther-img.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="follow">
                                    <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="name">
                                    战小狼
                                </nuxt-link>
                                <p>写了152.9k字.7.2k喜欢</p>
                            </li>
                            <li>
                                <nuxt-link class="avator" to="/u/123">
                                    <img src="../assets/img/auther-img.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="follow">
                                    <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="name">
                                    战小狼
                                </nuxt-link>
                                <p>写了152.9k字.7.2k喜欢</p>
                            </li>
                            <li>
                                <nuxt-link class="avator" to="/u/123">
                                    <img src="../assets/img/auther-img.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="follow">
                                    <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="name">
                                    战小狼
                                </nuxt-link>
                                <p>写了152.9k字.7.2k喜欢</p>
                            </li>
                            <li>
                            <nuxt-link class="avator" to="/u/123">
                                <img src="../assets/img/auther-img.jpg" alt="">
                            </nuxt-link>
                            <nuxt-link to="/u/123" class="follow">
                                <i class="fa fa-plus-square-o"></i>
                                关注
                            </nuxt-link>
                            <nuxt-link to="/u/123" class="name">
                                战小狼
                            </nuxt-link>
                            <p>写了152.9k字.7.2k喜欢</p>
                        </li>
                        </ul>
                        <div class="find-more">查看全部 <i class="fa fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="my-container">
            <span>名字:<a href="#">霍亚磊</a></span>
            <span>工作经验:<a href="#">3年</a></span>
            <span>期望工作:<a href="#">web前端</a></span>
            <span>联系方式: <a href="#">17639775152</a></span>
        </footer>
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
                },
                deg:360
            }
        },
        methods:{
            rotate:function () {
                this.deg = this.deg + 360
                this.$refs.refresh.style.transform = `rotate(${this.deg}deg)`;
            }
        },
        components:{
            myHeader
        },
    }
</script>
<style scoped>

</style>