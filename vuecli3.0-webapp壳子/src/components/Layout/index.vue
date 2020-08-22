<template>
    <yd-layout>
        <router-view></router-view>
        <yd-tabbar slot="tabbar" active-color='#4B9DF4' color='#475669' @click.native='routeclick'>
            <yd-tabbar-item title="首页" link="/home/index" :active="activeItem.indexOf('/home')!=-1">
                <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="分析" link="/analysis/index" :active="activeItem.indexOf('/analysis')!=-1">
                <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="营销" link="/marketing/index" :active="activeItem.indexOf('/marketing')!=-1">
                <yd-icon name="weibo" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="服务" link="/service/index" :active="activeItem.indexOf('/service')!=-1">
                <yd-icon name="tencent-weibo" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="我的" link="/aboutMe/index" :active="activeItem.indexOf('/aboutMe')!=-1">
                <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
    </yd-layout>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        components: {},
        name: "layoutIndex",
        data() {
            return {
                activeItem: '/index',
            }
        },
        computed: {
            ...mapState([
                'loading'
            ])
        },
        created() {
            // 得到全部路由信息
            //            this.routerData = this.$router.options.routes
            // if (this.$route.path == '/notfound/index') {
            // history.back()
            // }
            this.activeItem = this.$route.path
        },
        mounted() {

        },

        methods: {
            routeclick() {

            },
        },
        watch: {
            '$route.path': function(newVal, oldVal) {
                this.activeItem = newVal
            },
            '$store.state.loading': function(newVal, oldVal) {
                if (newVal == true) {
                    this.$dialog.loading.open('请稍后');
                } else {
                    this.$dialog.loading.close();
                }
            }
        }
    };

</script>
<style scoped lang="scss">
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to

    /* .slide-fade-leave-active for below version 2.1.8 */
        {
        transform: translateX(10px);
        opacity: 0;
    }

</style>
