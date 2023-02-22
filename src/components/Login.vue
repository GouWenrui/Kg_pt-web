<template>
  <div class="loginbody">
      <div class="logintext">
        <h3>人类基因(based GO-Database)知识图谱可视化和预训练系统</h3>
      </div>
    <div class="logindata">
      <div class="formdata">
        <el-form :model="loginForm" label-width="60px" :rules="rules" ref="loginForm" class="login_form">
          <el-form-item  prop="no">
            <span slot="label">
              <span style="color: #e29797; font-size: 15px"><strong>账号</strong></span>
            </span>
            <el-input type="text" prefix-icon="el-icon-s-custom" v-model="loginForm.no" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <span slot="label">
              <span style="color: #e29797; font-size: 15px"><strong>密码</strong></span>
            </span>
            <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.password" show-password autocomplete="off" @keyup.enter.native="confirm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginbutton" round @click="confirm" :disabled="confirm_disabled">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      confirm_disabled:false,
      loginForm:{
        no:'',
        password:''
      },
      rules:{
        no: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{

    confirm(){
      this.confirm_disabled=true;
      this.$router.push('/Index')

    }
  }
}
</script>

<style>
  .loginbody {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    background-image: url("../assets/loginbg.jpg");
    background-size: 100% 100%;
    background-position: center center;
    overflow: auto;
    background-repeat: no-repeat;
    position: fixed;
    line-height: 100%;
    padding-top: 150px;
  }

  .logintext {
    margin-bottom: 20px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    color: #e29797;
    text-shadow: 2px 2px 4px #000000;
  }

  .logindata {
    width: 400px;
    height: 300px;
    transform: translate(-50%);
    margin-left: 50%;
  }
  .loginbutton{
    width: 100px;
    margin-left: 100px;
    background-color: #e29797;
  }

</style>
