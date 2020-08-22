<template>
    <transition name="el-zoom-in-top">
        <div class="content">
            <el-card shadow="always">
                <div slot="header" class="clearfix">
                    <span>邮箱验证</span>
                </div>
                <div>
                    账户&#12288;&#12288;<div class='codeDiv'>
                        <el-input placeholder="请输入验证码" v-model="accountName" @blur='validateAccount'>
                        </el-input>
                    </div>
                </div>
                <p class='wrong'>&nbsp;
                    <span v-show='wrongAccount'>账户名不能为空</span></p>
                <div style="margin-top:4px;">
                    验证码&#12288;<div class='codeDiv'>
                        <el-input placeholder="请输入验证码" v-model="code" @blur='validateCode'>
                        </el-input>
                    </div>
                    <el-button @click='getCode' :disabled='disabled'>{{desc}}</el-button>
                </div>
                <p class='wrong'>&nbsp;
                    <span v-show='wrongTip'>请输入验证码</span>
                </p>
                <div class="submit">
                    <el-button type="primary" @click='submit'>确定</el-button>
                    <el-button @click='goback'>取消</el-button>
                </div>

            </el-card>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                code: '',
                accountName: '',
                disabled: false,
                desc: '获取邮箱验证码',
                wait: 60,
                wrongAccount: false,
                wrongTip: false
            }
        },
        props: ['account'],
        created() {
            this.accountName = this.account
        },
        methods: {
            getCode() {
                if (this.accountName == '') {
                    this.wrongAccount = true
                    return
                }
                this.wrongAccount = false
                if (this.wait == 60) {
                    this.$emit('getCode', this.accountName)
                }
                this.disabled = true
                if (this.wait == 0) {
                    this.disabled = false
                    this.desc = '获取邮箱验证码';
                    this.wait = 60
                } else {
                    this.desc = this.wait + "秒后重新获取";
                    this.wait--;
                    setTimeout(() => {
                            this.getCode();
                        },
                        1000)
                }
            },
            submit() {
                if (this.code != '' && this.accountName != '') {
                    this.$emit('verifyCode', {
                        code: this.code,
                        account: this.accountName
                    })
                }
            },
            goback() {
                let isCode = 0
                this.$emit('goback', isCode)
            },
            validateAccount() {
                if (this.accountName == '') {
                    this.wrongAccount = true
                } else {
                    this.wrongAccount = false

                }

            },
            validateCode() {
                if (this.code == '') {
                    this.wrongTip = true
                } else {
                    this.wrongTip = false
                }

            }
        }
    }

</script>
<style lang="scss" scoped>
    .content {
        height: 100%;
        width: 100%;
        background-color: #F2F6FC;
        position: relative;
    }

    .el-card {
        width: 500px;
        height: 360px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

    }

    .codeDiv {
        display: inline-block;
    }

    .submit {
        margin-top: 10px;
        margin-left: 62px;
    }

    .wrong {
        font-size: 12px;
        margin-left: 64px;
        margin-top: 4px;
        color: #f56c6c
    }

</style>
