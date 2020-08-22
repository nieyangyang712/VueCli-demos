<template>
    <div class="upload">
        <div class="add" @click="chooseType">
            <div class="add-image" align="center">
                <img src='../../../assets/images/photo.png' style='width:0.32rem;height:0.32rem' />
            </div>
        </div>
        <input type="file" accept='image/*' ref="getPhoto" id='upload_file' @change="uploadAvatar('getPhoto')" style='display:none' class="needsclick" />
    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs';
    export default {
        props: {
            //            colorbg: {
            // type: String,
            // default: '#fff'
            // },
        },
        components: {

        },
        name: "upload",
        data() {
            return {
                src: ''
            }
        },
        created() {


        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            chooseType() {
                //                var notNeed = FastClick.notNeeded(document.body);
                // $.fn.triggerFastClick = function() {
                // this.trigger("click");
                // if (!notNeed) {
                // this.triggerFastClick("click");
                // }
                // }
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//                if (isiOS) {
 // $("#upload_file").trigger("click");
 // }
                $("#upload_file").trigger("click");
            },
            uploadAvatar(node) { //图片上传
                console.log('in')
                let that = this;
                let $node = this.$refs[node];
                let file = $node.files[0]; //获取当前选择的照片
                let formData = new FormData();
                let _this = this;
                if (!file) return;
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    let img = new Image();
                    img.onload = function() {
                        that.src = e.target.result;
                        //                        that.$emit('preimg', that.src)
                        let data = that.compress(img);
                        let blob = that.dataURItoBlob(data);
                        formData.append("file", blob);
                        let base = process.env.API_ROOT
                        let config = {
                            //添加请求头
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                        };
                        axios.post(base + '/upload', formData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                        }).then((res) => {
                            console.log(res)
                            if (res.data.flag) {
                                that.$dialog.toast({
                                    mes: res.data.msg,
                                    timeout: 1000
                                });
                                $node.value = ''
                                that.$emit('preimg', res.data.add)
                            } else {
                                that.$dialog.toast({
                                    mes: res.data.msg,
                                    timeout: 1000
                                });
                            }
                        })

                        //                        _this.submitModify(formData); //上传方法
                        //上传成功清空input的值
                        //                        $node.value = ''
                    }
                    img.src = e.target.result;
                };
            },
            compress(img) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                let initSize = img.src.length;
                let width = img.width;
                let height = img.height;
                canvas.width = width;
                canvas.height = height;
                // 铺底色
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, width, height);

                //进行最小压缩
                let ndata = canvas.toDataURL("image/jpeg", 0.1);
                return ndata;
            },
            dataURItoBlob(base64Data) {
                var byteString;
                if (base64Data.split(",")[0].indexOf("base64") >= 0)
                    byteString = atob(base64Data.split(",")[1]);
                else byteString = unescape(base64Data.split(",")[1]);
                var mimeString = base64Data
                    .split(",")[0]
                    .split(":")[1]
                    .split(";")[0];
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ia], {
                    type: mimeString
                });
            }
        },
        watch: {}
    };

</script>

<style scoped lang="scss">


</style>
