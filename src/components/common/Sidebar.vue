<template>
  <div>
    <div class="shortcut">
      <!--<div style="float: left">-->
        <!--<img src="../../assets/334.jpg" height="80">-->
        <!--<div>融合大数据与教育AI服务平台</div>-->
      <!--</div>-->
      <div class="fl">
        <img src="../../assets/99999.jpg" height="70" style="margin-left: 40px;margin-top: 10px">
      </div>
      <ul class="fr">
        <li><a href="#">产品</a></li>
        <li><a href="#">案例</a></li>
        <li><a href="#">社区</a></li>
        <li><a href="#" @click="gotousetext" class="textuse"><i class="ymq-iconshiyongwendang"></i> 使用说明</a></li>
        <li>
          <el-button type="primary" round class="buttonlogin" @click="login" v-if="flag">登录</el-button>
          <el-avatar :size="50" :src="circleUrl" v-if="flag===0" style="margin-top: 10px"></el-avatar>
          <div v-if="flag===0" style="float: right;margin-left: 20px;">
            <el-dropdown  trigger="click" @command="handleCommand" style="height: 50px">
               <span class="el-dropdown-link">
                 {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
               </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="set">设置</el-dropdown-item>
                <el-dropdown-item command="out">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </li>
      </ul>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        center>
        <div style="text-align: center;font-size: 22px">
          <span>用户登录</span>
        </div>
        <div style="width: 280px;margin: 20px auto">
          <el-form  label-width="80px" label-position="right">
            <el-form-item label="用户名：">
              <el-input v-model="username" placeholder="请输入用户名" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="password" placeholder="请输入密码" style="width: 200px" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login2">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      dialogVisible: false,
      username: '',
      password: '',
      circleUrl: 'http://hbimg.b0.upaiyun.com/35c1bbf1039fed2470db2891c03a0ccae2ae23ee1d44-pHn81e_fw658',
      flag: 1
    }
  },
  methods: {
    login () {
      this.dialogVisible = true
    },
    login2 () {
      this.dialogVisible = false
      this.flag = 0
      this.$message.success('登录成功！')
    },
    handleCommand (command) {
      if (command === 'out') {
        this.flag = 1
      }
    },
    gotousetext () {
      const {href} = this.$router.resolve({
        path: `/usetext`
      })
      window.open(href, '_blank')
    }
  }
}
</script>

<style scoped>
  .shortcut {
    height: 80px;
    line-height: 80px;
    background-color: white;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .fr {
    float: right;
    margin-right: 400px;
  }
  .fl {
    float: left;
  }
  .logo {
    background: url("../../assets/logo2.png");
  }
  a {
    text-decoration: none; /*取消下划线*/
    font-size: 16px;
    color: black;
  }
  .textuse:hover {
    color: #66CCFF;
  }
  ul {
    list-style: none;
  }
  .shortcut li {
    float: left;
    margin-left: 40px;
  }
  .buttonlogin {
    width: 100px;
    transition: all 0.6s;
  }
  .buttonlogin:hover{
    box-shadow: 0 2px 2px black;
    transform: translateY(-5px);
  }
</style>
