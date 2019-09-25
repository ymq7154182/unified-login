<template>
  <div>
    <el-container>
      <el-header>产品使用说明</el-header>
      <el-container>
        <el-aside>
          <el-menu
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <!--<el-submenu index="1">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>支持走班的智能选排课系统</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<template slot="title">分组一</template>-->
                <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
              <!--</el-menu-item-group>-->
              <!--<el-menu-item-group title="分组2">-->
                <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              <!--</el-menu-item-group>-->
              <!--<el-submenu index="1-4">-->
                <!--<template slot="title">选项4</template>-->
                <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--</el-submenu>-->
            <!--</el-submenu>-->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">支持走班的智能选排课系统</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">考勤管理与课堂小助手</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">成绩统一管理与自动分析系统</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="ymq-icontianshenpi icontext"></i>
              <span slot="title">学生成绩挖掘分析平台</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">语文作文·智慧写作平台</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">活动节考勤与即时分析</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span slot="title">学校资产精准管理整合平台</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-setting"></i>
              <span slot="title">校园餐饮小督查平台</span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="el-icon-setting"></i>
              <span slot="title">教师绩效评价与发展平台</span>
            </el-menu-item>
            <el-menu-item index="10">
              <i class="el-icon-setting"></i>
              <span slot="title">在线评教评学与实时分析</span>
            </el-menu-item>
            <el-menu-item index="11">
              <i class="el-icon-setting"></i>
              <span slot="title">学涯评测与认知规划平台</span>
            </el-menu-item>
            <el-menu-item index="12">
              <i class="el-icon-setting"></i>
              <span slot="title">高考志愿填报预测系统</span>
            </el-menu-item>
            <el-submenu index="ee">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>STEM课程</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="13" style="margin-left: 30px">Python数据科学与AI</el-menu-item>
              <el-menu-item index="14" style="margin-left: 30px">大数据采集与交互机器人</el-menu-item>
              <el-menu-item index="15" style="margin-left: 30px">智能交通信号控制</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div v-if="indexshow === '1'">
              <div class="titletext">
                <span>支持走班的智能选排课系统</span>
              </div>
              <div class="tablestyle">
                <el-table :data="data1"  style="width: 100%" border :row-style="tableRowClassName" :header-cell-style="{background:'#99CCCC',color:'#606266'}">
                  <el-table-column prop="role" label="角色" align="center"></el-table-column>
                  <el-table-column prop="username" label="测试账号" align="center"></el-table-column>
                  <el-table-column prop="password" label="密码" align="center"></el-table-column>
                  <el-table-column prop="des" label="功能描述" align="center"></el-table-column>
                </el-table>
              </div>
              <div style="margin-top: 100px">
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>

            </div>
            <div v-if="indexshow === '2'">
              <div class="titletext">
                <span>考勤管理与课堂小助手</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '3'">
              <div class="titletext">
                <span>成绩统一管理与自动分析系统</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '4'">
              <div class="titletext">
                <span>学生成绩挖掘分析平台</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '5'">
              <div class="titletext">
                <span>语文作文·智慧写作平台</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '6'">
              <div class="titletext">
                <span>活动节考勤与即时分析</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '7'">
              <div class="titletext">
                <span>学校资产精准管理整合平台</span>
              </div>
              <div class="tablestyle">
                <el-table :data="data7"  style="width: 100%" border :row-style="tableRowClassName7" :header-cell-style="{background:'#99CCCC',color:'#606266'}">
                  <el-table-column prop="username" label="测试账号" align="center"></el-table-column>
                  <el-table-column prop="password" label="密码" align="center"></el-table-column>
                  <el-table-column prop="des" label="所有权限" align="center"></el-table-column>
                  <el-table-column prop="role" label="所属用户" align="center"></el-table-column>
                </el-table>
              </div>
              <div style="margin-top: 50px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '8'">
              <div class="titletext">
                <span>校园餐饮小督查平台</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/1333.jpg" class="img">
              </div>
              <div>
                <span>请用手机微信打开下面链接查看系统</span>
              </div>
              <div>
                <p>http://zhongkeruitong.top/show/canteen-system/wechat/authorize?returnUrl=/index.html&path=menu</p>
              </div>
              <div style="margin-top: 40px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>

            </div>
            <div v-if="indexshow === '9'">
              <div class="titletext">
                <span>教师绩效评价与发展平台</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '10'">
              <div class="titletext">
                <span>在线评教评学与实时分析</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '11'">
              <div class="titletext">
                <span>学涯测评与认知规划平台</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '12'">
              <div class="titletext">
                <span>高考志愿填报系统预测</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '13'">
              <div class="titletext">
                <span>Python数据科学与AI</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '14'">
              <div class="titletext">
                <span>大数据采集与交互机器人</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
              <el-button @click="nextpage">下一页</el-button>
            </div>
            <div v-if="indexshow === '15'">
              <div class="titletext">
                <span>智能交通信号控制</span>
              </div>
              <el-button @click="prepage">上一页</el-button>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'usetext',
  data () {
    return {
      indexshow: '1',
      data1: [
        {
          role: '学生',
          username: '10003',
          password: '123456',
          des: '学生选课，查看课表'
        },
        {
          role: '教务老师',
          username: 'admin',
          password: 'admin',
          des: '基础信息管理、新建排课任务、配课分班、一键排课、查看课表'
        }
      ],
      data7: [
        {
          username: 'asset',
          password: '123456',
          des: '资产的所有管理、资产标签生成与打印、智能导出等',
          role: '校资产管理员'
        },
        {
          username: 'admin',
          password: '123456',
          des: '部门资产的流转审批',
          role: '资产审批管理员'
        },
        {
          username: 'demo',
          password: '123456',
          des: '资产的申请、维修、归还、报废等',
          role: '普通教师'
        },
        {
          username: 'rep',
          password: '123456',
          des: '资产的维修管理',
          role: '维修'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.indexshow = key
    },
    prepage () {
      this.indexshow = String(Number(this.indexshow) - 1)
    },
    nextpage () {
      this.indexshow = String(Number(this.indexshow) + 1)
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 0) {
        return ' background: oldlace;height: 80px'
      } else if (rowIndex === 1) {
        return 'background: #f0f9eb;height: 80px'
      }
    },
    tableRowClassName7 ({row, rowIndex}) {
      if (rowIndex === 1 || rowIndex === 3) {
        return ' background: #99CCFF;height: 80px'
      } else {
        return 'height: 80px'
      }
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    box-shadow: 0 10px 10px  rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
  }

  .el-aside {
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
    height: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .icontext {
    font-size: 18px;margin-left: 5px;margin-right: 5px
  }
  .titletext {
    font-size: 20px;
    font-weight: bold;
    margin-top: 80px;
  }
  .tablestyle {
    margin-top: 40px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .imgdiv {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .img {
    border-radius: 40px;
    width: 400px;
    box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.5);
  }
  .el-menu-vertical-demo {
    width: 92%;
    box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.5);
  }
</style>
