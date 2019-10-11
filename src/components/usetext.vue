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
              <i class="ymq-icontubiao-qiapian icontext"></i>
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
              <i class="ymq-iconceshishenqing icontext"></i>
              <span slot="title">语文作文·智慧写作平台</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="ymq-iconfanshe icontext"></i>
              <span slot="title">活动节考勤与即时分析</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="ymq-icontuoguan icontext"></i>
              <span slot="title">学校资产精准管理整合平台</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="ymq-iconranqijianceqi icontext"></i>
              <span slot="title">校园餐饮小督查平台</span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="ymq-iconicon_bangzhuwendang icontext"></i>
              <span slot="title">教师绩效评价与发展平台</span>
            </el-menu-item>
            <el-menu-item index="10">
              <i class="ymq-iconshujukanban icontext"></i>
              <span slot="title">在线评教评学与实时分析</span>
            </el-menu-item>
            <el-menu-item index="11">
              <i class="ymq-icon-lumingpai icontext"></i>
              <span slot="title">学涯评测与认知规划平台</span>
            </el-menu-item>
            <el-menu-item index="12">
              <i class="ymq-iconedit-square icontext"></i>
              <span slot="title">高考志愿填报预测系统</span>
            </el-menu-item>
            <el-menu-item index="13">
              <i class="el-icon-location"></i>
              <span slot="title">STEM课程</span>
            </el-menu-item>
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
              <div class="imgdiv">
                <el-row>
                  <el-col>
                    <img src="../assets/566.png" class="img">'
                  </el-col>
                  <!--<el-col :span="6">-->
                    <!--<div>本系统是一款手机app</div>-->
                  <!--</el-col>-->
                </el-row>

              </div>
              <div style="margin-top: 30px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '3'">
              <div class="titletext">
                <span>成绩统一管理与自动分析系统</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/5544.png" class="img">
              </div>
              <div>
                <p>点击首页相关链接进行查看</p>
              </div>
              <div>
                <p>测试账号：100520 密码：123456</p>
              </div>
              <div style="margin-top: 30px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '4'">
              <div class="titletext">
                <span>学生成绩挖掘分析平台</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/11111.jpg" class="img">
              </div>
              <div>
                <p>测试账号1：100001 密码：123456</p>
              </div>
              <div style="margin-top: 30px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '5'">
              <div class="titletext">
                <span>语文作文·智慧写作平台</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/01231.jpg" class="img">
              </div>
              <div>
                <p>测试账号：zihuixiezuo 密码：123456</p>
              </div>
              <div style="margin-top: 30px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '6'">
              <div class="titletext">
                <span>活动节考勤与即时分析</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/bac.png" class="img">
              </div>
              <div style="margin-top: 30px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
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
              <el-table :data="data2"  style="width: 100%" border :row-style="tableRowClassName7" :header-cell-style="{background:'#99CCCC',color:'#606266'}">
                <el-table-column prop="username" label="测试账号" align="center"></el-table-column>
                <el-table-column prop="password" label="密码" align="center"></el-table-column>
                <el-table-column prop="role" label="所有权限" align="center"></el-table-column>
                <el-table-column prop="des" label="功能描述" align="center"></el-table-column>
              </el-table>
              <div style="margin-top: 30px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '10'">
              <div class="titletext">
                <span>在线评教评学与实时分析</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/074.jpg" class="img">
              </div>
              <div>
                <span>请用手机打开下面链接查看系统</span>
              </div>
              <div>
                <p>http://zhongkeruitong.top/show/taq/#/login</p>
              </div>
              <div>
                <span>数据统计后端地址：</span>
              </div>
              <div>
                <p>http://zhongkeruitong.top/show/taq/dist/index.html#/login?redirect=%2Fdashboard</p>
                <p>测试账号：zgczxpjpx 密码：123456</p>
              </div>
              <div style="margin-top: 40px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '11'">
              <div class="titletext">
                <span>学涯测评与认知规划平台</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/7899.jpg" class="img">
              </div>
              <div>
                <span>请用手机微信打开下面链接查看系统</span>
              </div>
              <div>
                <p>课程预约系统：http://zhiheyikaoqin.cn/show/sdc/sdc/index.html#/course</p>
                <p>职业测评系统： www.zhongkeruitong.top/evaluate/evaluate/index.html</p>
              </div>
              <div style="margin-top: 40px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '12'">
              <div class="titletext">
                <span>高考志愿填报系统预测</span>
              </div>
              <div class="imgdiv">
                <img src="../assets/4545.png" class="img1">
              </div>
              <div>
                <span>请用手机微信打开下面链接查看系统</span>
              </div>
              <div>
                <p>http://www.zhongkeruitong.top/show/cee/wechat/authorize?returnUrl=index.html</p>
              </div>
              <div style="margin-top: 20px">
                <el-button @click="prepage" type="primary">上一页</el-button>
                <el-button @click="nextpage" type="primary">下一页</el-button>
              </div>
            </div>
            <div v-if="indexshow === '13'">
              <div class="titletext">
                <span>STEM课程</span>
              </div>
              <div style="margin-top: 40px">
                <span>“STEM”课程包括Python数据科学与AI、大数据采集与交互机器人、智能交通信号控制等课程请访问首页相关链接进行查看</span>
              </div>
              <div style="margin-top: 40px">
                <el-button @click="prepage" type="primary">上一页</el-button>
              </div>
            </div>
          </el-main>
          <el-footer>
            <div>
              <div style="color: black;width: 100%;"><span style="margin-right: 1em;font-size: 12px">Copyright</span><span style="font-size: 12px">大数据技术与认知智能研究中心 ©2019</span> </div>
            </div>
          </el-footer>
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
      data2: [
        {
          role: '系统管理员',
          username: '10001',
          password: '123456',
          des: '管理员需要对教师进行权限配置，对绩效工作进行积分配置；并查看教师绩效工作的审核结果，以及教师所获积分的统计详情。'
        },
        {
          role: '教师组长',
          username: '10003',
          password: '123456',
          des: '教师组长需要对教师提供的绩效工作进行审核；可以查看组内教师所获积分的统计详情。'
        },
        {
          role: '教师',
          username: '10010',
          password: '123456',
          des: '教师需要填写自己的基本工作和绩效工作任务，也可以将自己在工作过程中的体会和感受分享给其他的教师；同时教师可以查看自己绩效工作的审核结果，以及个人积分统计详情。同时教师在使用过程中，有什么问题或建议，可以提交使用反馈。'
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
    box-shadow: 0 5px 5px  rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
  }

  .el-aside {
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
    height: 100%;
    margin-right: 20px;
    box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.5);
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
  .img1 {
    border-radius: 40px;
    height: 400px;
    box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.5);
  }
  .el-menu-vertical-demo {

  }
</style>
