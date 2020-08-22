<template>
    <transition name="el-zoom-in-center">
        <div class="content">
            <el-card shadow="always">
                <div slot="header" class="clearfix">
                    <span>账户登录</span>
                </div>
                <el-form ref="AccountFrom" :model="accountLogin" :rules="rules" label-position="left" label-width="56px" class="demo-ruleForm login-container">
                    <el-form-item prop="account" label="账户">
                        <el-input type="text" v-model="accountLogin.account" auto-complete="off" placeholder="请输入账户" @blur='handelblur'></el-input>
                    </el-form-item>
                    <el-form-item prop="passWord" label="密码">
                        <el-input type="password" v-model="accountLogin.passWord" auto-complete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <div>
                        <span class='errorTip'>&nbsp;
                            <span v-if='wrongPassword'>{{wrongPasswordTip}}</span>
                        </span>
                        <el-button type='text' class='forgetP' @click='forgetPassword'>
                            忘记密码？
                        </el-button>
                    </div>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" :loading="loading" @click='handleLogin'>登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>

    </transition>
</template>

<script>
    export default {
        data() {
            return {
                rules: {
                    account: [{
                        required: true,
                        message: "请输入账号",
                        trigger: "blur"
                    }],
                    passWord: [{
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }],

                },
                accountLogin: {
                    account: "",
                    passWord: ""
                },
            };

        },
        created() {
            this.accountLogin = this.account
        },
        props: ['loading', 'account', 'wrongPassword', 'wrongPasswordTip'],
        methods: {
            //登陆
            handleLogin() {
                this.$refs.AccountFrom.validate(valid => {
                    if (valid) {
                        this.$emit('handleLogin', this.accountLogin)
                    }
                });
            },
            handelblur() {
                this.$emit('updataAccount', this.accountLogin)
            },
            forgetPassword() {
                let isCode = 1
                this.$emit('forgetPassword', isCode)
            },
        }
    };

</script>
<style lang="scss" scoped>
    .content {
        height: 100%;
        width: 100%;
        background-color: #F2F6FC;
        position: relative;
    }

    .el-card {
        width: 460px;
        height: 360px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

    }

    .errorTip {
        display: inline-block;
        width: 100px;
        font-size: 12px;
        color: #f56c6c;
        line-height: 30px;
        margin-left: 54px;
    }

    .forgetP {
        margin-left: 134px;
        margin-top: -10px;
    }

</style>
