import { ajaxLogin } from '../../assets/javascript/baseAjax'
export default {
    data() {
        return {
            loginForm: {
                "userName": "",
                "password": "",
                "remember": false
            },
            loginRules: {
                "userName": [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                "password": [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        }
    },
    beforeCreate: function () { },
    created: function () {
        window.vue = this;
    },
    beforeMount: function () { },
    mounted: function () {
    },
    computed: {
    },
    beforeUpdate: function () { },
    updated: function () { },
    beforeDestroy: function () {

    },
    destroyed: function () { },
    watch: {

    },
    methods: {
        handleLogin(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let param = {
                        username: this.loginForm.userName,
                        password: this.loginForm.password
                    }
                    ajaxLogin(param).then(res => {
                        if (res) {
                            this.__setLocal('login', this.loginForm);
                            this.__setLocal('realname', res.realname);
                            this.$msg("", 'success', '登录成功');
                            this.$router.push('/home');
                        }
                    }).catch(err => {
                        console.log(err)
                        this.$msg("", 'warning', '登录失败')
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        }
    }
}
