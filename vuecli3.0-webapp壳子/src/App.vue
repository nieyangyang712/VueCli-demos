<template>
    <div id="app">
        <router-view></router-view> 　
    </div>
</template>

<script>
    import {
        bus
    } from './bus.js'
    export default {
        name: 'app',
        data() {
            return {

            }
        },
        mounted() {
            //加载完成清除loading
            $("#Loading").fadeOut("slow");
            var flag = true;
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                    flag = false;
                }
                if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                    flag = false;
                }
                if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                    flag = false;
                }
                if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
                    flag = false;
                }
            }
            if (flag == false) {
                //                this.$notify({
                //                    message: '升级至IE10以上或使用谷歌浏览器获取优质体验',
                //                    duration: 0,
                //                });
                this.$dialog.toast({
                    mes: '升级至IE10以上或使用谷歌浏览器获取优质体验',
                    timeout: 1000
                });
            };

            bus.$on('goto', (e) => {
                if (e == '/login') {
                    this.$router.push('/')
                    this.$router.push('/login')
                } else if (e == '/notfound') {
                    this.$router.push('/notfound')
                }
            })
            bus.$on('message', (e) => {
                //                this.$message.error('出现请求错误')
                this.$dialog.toast({
                    mes: '出现请求错误',
                    timeout: 1000
                });
            })
            bus.$on('codefalse', (e) => {
                //                this.$message.error(e)
                this.$dialog.toast({
                    mes: e,
                    timeout: 1000
                });
            })
        },
        watch: {}
    }

</script>
<style lang="scss">


</style>
