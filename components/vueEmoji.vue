<template>
    <div>
        <ul class="emojiTab">
            <li v-for="(pannel,index) in pannels" @click="changeActive(index)" :class="{active:index == activeIndex}">
                {{pannel}}
            </li>
        </ul>
        <ul class="emojiTabContent">
            <li v-for="(emojiGroup,index) in emojis" :key="index" v-if="index == activeIndex">
                <a href="javascript:void(0)" v-for="(emoji,index) in emojiGroup" :key="index"
                   @click="selectItem(emoji)">
                    <span :class="'sprite-' + getPureName(emoji)"></span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import data from '../static/emoji-data.js'

    export default {
        name: 'vueEmoji',
        data() {
            return {
                emojiData: data,
                pannels: ['表情', '自然', '物品', '地点', '符号'],
                activeIndex: 0
            }
        },
        methods: {
            changeActive: function (index) {
                this.activeIndex = index;
            },
            getPureName: function (name) {
                return name.replace(/:/g, '');
            },
            selectItem: function (emoji) {
                this.$emit('select', emoji);
            }
        },
        computed: {
            emojis: function () {
                return this.pannels.map(item => {
                    return Object.keys(this.emojiData[item]);
                })
            }
        },
        comments: [
            {
                id: 19935725,
                floor: 2,
                liked: true,
                likes_count: 20,
                note_id: 23054702,
                user_id: 6780849,
                user: {
                    avatar: '~/assets/img/default.avatar.jpg'
                },
                is_author: false,
                nickname: "七岁就狠拽",
                badge: null,
                create_at: '2018-01-25T09:40:18.000+08:00',
                children_count: 4,
                compiled_content: '今年25岁的我，年纪轻轻月薪就已经达到2800了，加上提成满勤再加上我天生的睿智头脑，平常帮客人拿下拖鞋点下烟得点小费可以拿到3100。觉得自己这几年过得也不容易，现在这么有钱，都不知道怎么花了，开始花钱大手大脚了，以前网吧包夜都是喝自来水，现在敢喝红茶了，还是一晚上买两瓶，甚至打电话出去叫炒河粉而且还要加个鸡蛋，我觉得现在有点迷失自我，有什么办法？希望能回到初心！',
                children: [
                    {
                        id: 20116365,
                        user_id: 5954136,
                        user: {
                            id: 2604707,
                            nick_name: '与笑颜开',
                        },
                        parent_id: 19935725,
                        create_at: '2018-01-30T14:26:00.000+08:00',
                        compiled_content: '混凝土方块移动工程师是啥子工作，我咋没听过？我也做过混凝土这行',
                    }, {
                        id: 20122216,
                        user_id: 9933465,
                        user: {id: 9933465, slug: "2fd904a45f5f", nickname: "美女荷官"},
                        parent_id: 19935725,
                        create_at: '2018-01-30T14:25:32.000+08:00',
                        compiled_content: '是你李大钊飘了,还是我陈独秀拿不动刀了',
                    }, {
                        id: 20122226,
                        user_id: 5954136,
                        user:
                            {id: 9964877, slug: "eca4b8eed92d", nickname: "保坤文化传媒"},
                        parent_id: 19935725,
                        create_at: '2018-01-30T14:25:49.000+08:00',
                        compiled_content: "楼上评论的都是大佬啊"
                    },
                ],
            },
            {
                children: [],
                children_count: 0,
                compiled_content: "楼上评论的都是大佬啊",
                created_at: "2018-01-29T11:26:53.000+08:00",
                floor: 4,
                id: 20080144,
                liked: false,
                likes_count: 2,
                note_id: 23054702,
                avatar: "http://cdn2.jianshu.io/assets/default_avatar/1-04bbeead395d74921af6a4e8214b4f61.jpg",
                badge: null,
                is_author:false,
                nickname: "yuebiubiu",
                slug: "c076e512783d",
                user_id: 3160769,
            },
            {
                children: [],
                children_count: 0,
                compiled_content: "各位都是段子手",
                created_at: "2018-01-29T15:25:53.000+08:00",
                floor: 4,
                id: 20080156,
                liked: false,
                likes_count: 66,
                note_id: 23054702,
                avatar: "http://upload.jianshu.io/users/upload_avatars/1710594/403d9083-7d79-4242-b5e9-7abe04a51323.jpg"
                ,
                badge: null,
                is_author:false,
                nickname: "嘟嘟嘟",
                slug: "s1d13156c165",
                user_id: 1651651,
            },
        ]
    }
</script>
<style>
    @import './../assets/css/emoji-sprite.scss';

    .emojiTab {
        height: 36px;
        overflow: hidden;
        margin-bottom: 0;
    }

    .emojiTab li {
        float: left;
        width: 76px;
        font-size: 12px;
        line-height: 36px;
        cursor: pointer;
        text-align: center;
        position: relative;
    }

    .emojiTab li.active::after {
        content: '';
        width: 100%;
        height: 1px;
        background: #0689dd;
        left: 0;
        bottom: 4px;
        position: absolute;
    }

    .emojiTabContent {
        height: 140px;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
    }

    .emojiTabContent li {
        font-size: 0;
        padding: 5px;
    }

    .emojiTabContent li a {
        float: left;
        overflow: hidden;
        height: 35px;
        transition: all ease-out .2s;
        border-radius: 4px;
    }

    .emojiTabContent li a:hover {
        background-color: #d8d8d8;
        border-color: #d8d8d8;
    }

    .emojiTabContent li a span {
        width: 25px;
        height: 25px;
        display: inline-block;
        border: 1px solid transparent;
        cursor: pointer;
    }
</style>