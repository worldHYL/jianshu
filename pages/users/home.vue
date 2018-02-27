<template>
    <div>
        <my-header></my-header>
        <div class="my-container">
            <div class="row">
                <div class="col-8 main">
                    <div class="main-top">
                        <nuxt-link to="/user/home" class="avatar">
                            <img src="../../assets/img/default-avatar.jpg" alt="">
                        </nuxt-link>
                        <div class="title">
                            <nuxt-link to="/users/home" class="name">明日_何其多</nuxt-link>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <p>21</p>
                                        <span>关注<i class="fa fa-angle-right"></i></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>999</p>
                                        <span>粉丝<i class="fa fa-angle-right"></i></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>999</p>
                                        <span>文章<i class="fa fa-angle-right"></i></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>4161</p>
                                        <span>字数<i class="fa fa-angle-right"></i></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>66</p>
                                        <span>收藏喜欢<i class="fa fa-angle-right"></i></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4 aside">
                    这是侧边页面
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import myHeader from '../../components/myHeader'
    export default {
        components: {
            myHeader
        },
    }
</script>
<style>
    .row{
        padding-top: 30px;
    }
    .main-top{
    margin-bottom: 20px;
}
    .main-top .avatar{
    float: left;
    width: 80px;
    height: 80px;
    margin-left: -2px;
    display:block;
    cursor: pointer;
}
    .main-top .avatar img{
    vertical-align: middle;
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius:50%;
}
    .main-top .title{
        margin-bottom:20px;
        padding: 5px 0 0 100px;
}
    .main-top .title .name{
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
}
    .main-top .info{
        padding: 5px 0 0 100px;
    }
    .main-top .info ul{
        margin-bottom: 10px;
    }
    .main-top .info ul li{
        display: inline-block;
        line-height: 20px;
    }

</style>