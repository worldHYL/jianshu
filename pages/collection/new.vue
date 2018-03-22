<template>
    <div>
        <my-header></my-header>
        <div class="my-container new-collection">
            <div class="row">
                <div class="main">
                    <h3>新建专题</h3>
                    <table>
                        <thead>
                        <tr>
                            <th class="setting-head"></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody class="base">
                        <tr>
                            <td>
                                <div class="avatar-collection">
                                    <img src="../../assets/img/td.png">
                                </div>
                            </td>
                            <td>
                                <a href="javascript:void (0)" class="btn btn-hollow"><input unselectable="on" type="file" class="hide">上传专题封面</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title">
                                名称
                            </td>
                            <td>
                                <input class="input" type="text" name="nick-name" placeholder="填写名称，不超过50字">
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title">
                                描述
                            </td>
                            <td>
                                <textarea placeholder="填写描述"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title">
                                其他管理员
                            </td>
                            <td>
                                <div class="user-add">
                                    <input class="input" type="text" name="nick-name" placeholder="输入用户名">
                                    <ul class="drop-menu">

                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title">
                                是否允许投稿
                            </td>
                            <td>
                                <div class="ok ook allow">
                                    <input type="radio" name="push" checked @click="isAllow">
                                    <span>允许</span>
                                </div>
                                <div class="unok ook unallow" @click="">
                                    <input type="radio" name="push" @click="unAllow">
                                    <span>不允许</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title">
                                投稿是否需要审核
                            </td>
                            <td>
                                <div class="ok ook need">
                                    <input type="radio" name="pushneed" checked>
                                    <span>需要</span>
                                </div>
                                <div class="unok ook unneed">
                                    <input type="radio" name="pushneed" disabled>
                                    <span>不需要</span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="btn btn-success btn-zhuanti">创建专题</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '../../components/MyHeader'
    export default {
        components:{
            myHeader
        },
        methods:{
            isAllow:function (){
                document.getElementsByName("pushneed").disable = false
                console.log(document.getElementsByName("pushneed").disable)
            },
            unAllow:function (){
                document.getElementsByName("pushneed").disable = true
                console.log(document.getElementsByName("pushneed").disable)

            }
        }
    }
</script>
<style scoped>
    .new-collection .row{
        padding-top: 30px;
    }
    .new-collection .row .main{
        width: 100%;
        margin: 0 0px 60px 120px;
        padding: 0 135px 0 15px;
    }
    .new-collection .row .main h3{
        margin: 10px 0 20px;
        font-size: 21px;
        font-weight: 700;
        color: #333;
    }
    .new-collection .row .main table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .new-collection .row .main table tbody{
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    .new-collection .row .main table tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .new-collection .row .main table tr td:first-child{
        width: 20%;
    }
    .new-collection .row .main table tr td:last-child{
        width: 80%;
    }
    .new-collection .row .main table .base tr:nth-child(1){
        height: 132px;
    }
    .new-collection .row .main table .base tr:nth-child(2){
        height: 75px;
    }
    .new-collection .row .main table .base tr:nth-child(3){
        height: 142px;
    }
    .new-collection .row .main table .base tr:nth-child(4){
        height: 75px;
    }
    .new-collection .row .main table .base tr:nth-child(5){
        height: 56px;
    }
    .new-collection .row .main table .base tr:nth-child(6){
        height: 56px;
    }
    .new-collection .row .main table .base .avatar-collection{
        cursor: default;
        width: 100px;
        height: 100px;
    }
    .new-collection .row .main table .base .avatar-collection img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 10%;
    }
    .new-collection .row .main .btn-hollow{
        padding: 4px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        border-radius: 40px!important;
        background: none;
        border: 1px solid rgba(59,194,29,.7)!important;
        color: #42c02e!important;
    }
    .new-collection .row .main .btn-hollow:hover{
        color:#42c02e!important;
        background:rgb(245,252,243);
    }
    .new-collection .row .main .btn-hollow .hide{
        position: absolute;
        display: block!important;
        width: 82px;
        opacity: 0;
    }
    .new-collection .row .main table .base .setting-title{
        font-size: 15px;
        color: #969696;
    }
    .new-collection .row .main table .base .setting-title .user-add{
        position:relative;
    }
    .new-collection .row .main table .base .input{
        padding: 10px 15px;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
        width: 100%;
    }
    .new-collection .row .main table .base textarea{
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        padding: 10px 15px;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
        display: block;
        resize: none;
        outline-style: none;
    }
    .new-collection .row .main table .base ::-webkit-input-placeholder{
        color: #b8b8b8!important;
    }
    .new-collection .row .main table .base .ook span{
        margin: 0 5px 0 10px;
        font-size: 15px;
        color: #333;
        vertical-align: middle;
    }
    .new-collection .row .main table .base .ok{
        width: 25%;
        float: left;
        padding: 0 15px;
    }
    .new-collection .row .main table .base .unok{
        width: 75%;
        float: left;
        padding: 0 15px;
    }
    .btn-zhuanti{
        margin: 20px 0 50px;
        border-radius: 20px!important;
        border-color: #42c02e!important;
        padding: 8px 22px!important;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        background: #42c02e!important;
    }

</style>