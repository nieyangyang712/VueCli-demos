<template>
    <transition name="el-zoom-in-top">
        <div class="content">
            <el-card shadow="always">
                <div slot="header" class="clearfix">
                    <span>重置密码</span>
                </div>
                <el-form ref="AccountFrom" :model="fromData" :rules="rules" label-position="right" label-width="70px" class="demo-ruleForm">
                    <el-form-item label="账户" prop="account">
                        {{fromData.account}}
                    </el-form-item>

                    <el-form-item label="密码" prop="pwd">

                        <el-input type="password" v-model="fromData.pwd" autocomplete="off" placeholder="请输入密码"></el-input>

                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">

                        <el-input type="password" v-model="fromData.checkPass" autocomplete="off" placeholder="请输入密码"></el-input>

                    </el-form-item>
                    <div>
                    </div>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" @click.native.prevent="confirmChange" :loading="load">确认修改</el-button>
                        <el-button @click="goback">取消</el-button>
                    </el-form-item>
                </el-form>
                <div class="passwordDesc">
                    <p><i class="el-icon-info"></i> 密码应该包含6-18个字符</p>
                    <p><i class="el-icon-info"></i> 密码至少包括1个字母，1个数字，1个特殊字符</p>
                </div>
            </el-card>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                //                var pattern = /^.*(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ])(?=.{6,16}).*$/;
                var pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,18}$/;
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (!pattern.test(value)) {
                    callback(new Error('至少包括1个字母，1个数字，1个特殊字符'));
                } else {
                    if (this.fromData.checkPass !== '') {
                        this.$refs.AccountFrom.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.fromData.pwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                fromData: {
                    pwd: "",
                    checkPass: "",
                    account: ''
                },
                rules: {
                    pwd: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                    account: [{
                        required: true,
                        message: '账户名不能为空',
                        trigger: 'blur'
                    }, ],
                },
            };

        },
        created() {
            this.fromData.account = this.account
        },
        props: {
            load: {
                type: Boolean,
                default: false
            },
            account: {
                type: String
            }
        },
        methods: {
            confirmChange() {
                this.$refs.AccountFrom.validate(valid => {
                    if (valid) {
                        this.$emit('confirmChange', this.fromData)
                    }
                });

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            goback() {
                let isgoback = 0;
                this.$emit('goback', isgoback)
            }
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
        width: 500px;
        height: 400px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .passwordDesc {
        font-size: 12px;
        color: #909399;
        margin-left: 68px;
        line-height: 20px;
    }

    .el-form-item {
        margin-bottom: 20px;
    }

</style>
