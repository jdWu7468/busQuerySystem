<template>
    <div class="login-container">
        <div class="login-wrap" v-show="showLogin">
            <p style="color:#0096FF;font-weight:bold;font-size:25px;margin-bottom: 20px">登&nbsp;&nbsp;录</p>
            账号：<el-input type="text" placeholder="请输入用户名" v-model="username" class = "form-control"></el-input>
            密码：<el-input type="password" placeholder="请输入密码" v-model="password" class = "form-control"></el-input>
            <el-button v-on:click="login">登录</el-button>
            <el-button type = "primary"  v-on:click="ToRegister" style="background-color:#fff;border:1px solid #8e8e8e;color:#8e8e8e">注册</el-button>
            <p v-show="showTishi" style="color:#0096FF">{{tishi}}</p>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <p style="color:#0096FF;font-weight:bold;font-size:25px;margin-bottom: 20px ">注&nbsp;&nbsp;册</p>
            账号：<el-input type="text" placeholder="请输入用户名" v-model="newUsername" class = "form-control"></el-input>
            密码：<el-input type="password" placeholder="请输入密码" v-model="newpassword" class = "form-control"></el-input>
            <el-button v-on:click="register">注册</el-button>
            <el-button type = "primary"  v-on:click="ToLogin" style="background-color:#fff;border:1px solid #8e8e8e;color:#8e8e8e">登录</el-button>
            <p v-show="showTishi" style="color:#0096FF">{{tishi}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name:'LoginForm',
	data(){
		return {
			      showLogin: true,
            showRegister: false,
            showTishi: false,
            tishi: '',
            username: '',
            password: '',
            newUsername: '',
            newpassword: ''
		}
	},

    methods:{
        ToRegister(){
            this.showRegister = true
            this.showLogin = false
        },
        ToLogin(){
            this.showRegister = false
            this.showLogin = true
        },
        login() {
            if(this.username == "" || this.password == "") {
                alert("请输入用户名或密码")
            }else{
                let data = {'username':this.username,'password':this.password}

                this.$http.post('/api/user/selectUser',data).then((res)=>{
                    console.log(res)
                    /*接口的传值是(-1,该用户不存在),(0,密码错误)*/
                    if(res.data == -1) {
                        this.tishi = "该用户不存在"
                        this.showTishi = true
                    }else if(res.data == 0) {
                        this.tishi = "密码输入错误"
                        this.showTishi = true
                    }else {
                        this.tishi = "登录成功"
                        this.showTishi = true
                        this.$router.push('/Mine')
                    }

                })
            }
        },

        register(){
            if(this.newUsername == "" || this.newpassword == ""){
                alert("请输入用户名或密码")
            }else{
                let data = {'username':this.newUsername,'password':this.newpassword}
                this.$http.post('/api/user/addUser',data).then((res)=>{
                    console.log(res)
                    /*接口的传值是(-1,该用户已存在)*/
                    if(res.data == -1) {
                        this.tishi = "该账号已存在"
                        this.showTishi = true
                        this.username = ''
                        this.password = ''
                    }
                    else if(res.status == 200){
                        this.tishi = "注册成功"
                        this.showTishi = true
                        this.username = ''
                        this.password = ''
                         /*注册成功之后再跳回登录页*/
                        setTimeout(function(){
                            this.showRegister = false
                            this.showLogin = true
                            this.showTishi = false
                        }.bind(this),1000)
                    }
                })
            }
        }
    }
}
</script>
<style>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 15px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin:10px auto;
        width: 350px;
        height: 270px;
        padding: 20px 35px 15px 35px;
        background: rgba(255,255,255,0.7);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login-wrap{
        text-align: center;
        padding-left: 20px;
    }
    .register-wrap{
      text-align: center;
      padding-left: 20px;
    }
    .form-control{
        width:170px;
        margin-bottom: 10px;
        margin-right: 30px;
        flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
    }
</style>
