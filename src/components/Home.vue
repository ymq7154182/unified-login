<template>
    <div>
      <Sidebar/>
      <div class="homebb">
        <!--<el-carousel height="700px">-->
          <!--<el-carousel-item>-->
            <!--<img src="../assets/img_bg_1.png" width="1920">-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item>-->
            <!--<img src="../assets/img_bg_2.png" width="1920">-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item>-->
            <!--<img src="../assets/img_bg_3.png" width="1920">-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <div  class="hometext hometext1">
          <span>融合大数据与教育AI服务平台</span>
        </div>
        <div class="hometext hometext2">
          <span>智慧管理、智慧教学、学涯规划、智慧学习</span>
        </div>
        <div class="hometext hometext3">
          <el-button type="primary" round style="width: 150px;height: 50px">了解详情</el-button>
        </div>
      </div>
      <div class="home1">
        <!--<div style="text-align: center;margin-top: 150px">-->
          <!--<span style="font-size: 28px">大数据平台</span>-->
        <!--</div>-->
        <!--<div class="homepart" @click="gotopage11">-->
          <!--&lt;!&ndash;<div class="homepart1">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="word3">&ndash;&gt;-->
              <!--&lt;!&ndash;<span>基于知识图谱构建的智能化工具平台</span>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="homepart2">&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="../assets/22222.png" width="800px">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <div class="text">
          <span style="font-size: 28px">智能校园</span>
        </div>
        <div class="part">
          <el-card class="box-card box-card1" shadow="hover" @click.native="gotopage1">
            <div class="circle circle1"></div>
            <div class="word1">
              <span>智能排课</span>
            </div>
            <div class="word2">
              <span>新课改走班制下学生自主选课与多约束条件下智能排课服务系统</span>
            </div>
          </el-card>
          <el-card class="box-card box-card6"  shadow="hover" @click.native="gotopage6">
            <div class="circle circle6"></div>
            <div class="word1">
              <span>学生考勤</span>
            </div>
            <div class="word2">
              <span>走班制下的实时监测课堂考勤及学生安全管理的家校互动平台</span>
            </div>
          </el-card>
          <el-card class="box-card box-card7"  shadow="hover" @click.native="gotopage7">
            <div class="circle circle7"></div>
            <div class="word1">
              <span>教师评价</span>
            </div>
            <div class="word2">
              <span>实时记录教师各项工作，辅助学校对教师绩效进行评价，并作为教师成长档案，推动教师发展</span>
            </div>
          </el-card>
          <el-card class="box-card box-card2"  shadow="hover" @click.native="gotopage2">
            <div class="circle circle2"></div>
            <div class="word1">
              <span>成绩分析</span>
            </div>
            <div class="word2">
              <span>多源的成绩综合管理平台，学生成绩挖掘与智能提升，服务于教师及学校对成绩的多维分析</span>
            </div>
          </el-card>
        </div>
        <div class="part" style="margin-top: 20px">
          <el-card class="box-card box-card8"  shadow="hover" @click.native="gotopage8">
            <div class="circle circle8"></div>
            <div class="word1">
              <span>学涯规划</span>
            </div>
            <div class="word2">
              <span>学生测评数据、学习过程数据等融合运用，构建有效的学生兴趣与能力倾向画像，促进学涯发展</span>
            </div>
          </el-card>
          <el-card class="box-card box-card3"  shadow="hover" @click.native="gotopage3">
            <div class="circle circle3"></div>
            <div class="word1">
              <span>高考预测</span>
            </div>
            <div class="word2">
              <span>基于全量、多维、真实的覆盖十年的考录数据，提供高考志愿的智能推荐，及一站式的报考服务</span>
            </div>
          </el-card>
          <el-card class="box-card box-card4"  shadow="hover" @click.native="gotopage4">
            <div class="circle circle4"></div>
            <div class="word1">
              <span>资产管理</span>
            </div>
            <div class="word2">
              <span>多层级、跨部门、多权限的资产全生命周期管理与智能分析平台;实现跨平台对接与数据融合。</span>
            </div>
          </el-card>
          <el-card class="box-card box-card5" shadow="hover" @click.native="gotopage5">
            <div class="circle circle5"></div>
            <div class="word1">
              <span>餐饮管理</span>
            </div>
            <div class="word2">
              <span>师生定制化配菜服务及多维评价分析，构建起餐饮与师生健康相融合的推荐服务系统</span>
            </div>
          </el-card>
        </div>
        <div class="text">
          <span style="font-size: 28px">平台与工具</span>
        </div>
        <div class="part2">
          <div class="morepart" @click="gotopage9">
            <div class="circlemore">
              <i class="ymq-icondaibanshixiang styleword"></i>
            </div>
            <div class="word1">
              <span>自动化评教评学</span>
            </div>
          </div>
          <div class="morepart" @click="gotopage10">
            <div class="circlemore">
              <i class="el-icon-data-line styleword"></i>
            </div>
            <div class="word1">
              <span>活动实时分析</span>
            </div>
          </div>
          <div class="morepart">
            <div class="circlemore">
              <i class="ymq-iconbianjisekuai styleword"></i>
            </div>
            <div class="word1">
              <span>智慧写作</span>
            </div>
          </div>
          <div class="morepart"  @click="gotopage12">
            <div class="circlemore">
              <i class="ymq-iconteam styleword"></i>
            </div>
            <div class="word1">
              <span>STEAM</span>
            </div>
          </div>
          <div class="morepart" @click="gotopage11">
            <div class="circlemore">
              <i class="ymq-iconweizhigeshi styleword"></i>
            </div>
            <div class="word1">
              <span>大数据平台</span>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
</template>
<script>
import Sidebar from '@/components/common/Sidebar'
import Footer from '@/components/common/Footer'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Footer
  },
  mounted () {
  },
  methods: {
    gotopage1 () {
      var url = 'http://zhongkeruitong.top/show/class_system/#/login'
      window.open(url, '_blank')
    },
    gotopage2 () {
      var url = 'http://zhongkeruitong.top/show/scoreAprile/static/teacher.html#/login'
      window.open(url, '_blank')
    },
    gotopage3 () {
      var url = 'http://www.zhongkeruitong.top/show/cee/wechat/authorize?returnUrl=index.html'
      window.open(url, '_blank')
    },
    gotopage4 () {
      var url = 'http://zhongkeruitong.top/show/assertmanager/static/index.html#/login'
      window.open(url, '_blank')
    },
    gotopage5 () {
      var url = 'http://zhongkeruitong.top/show/canteen-system/index_pc.html#/login'
      window.open(url, '_blank')
    },
    gotopage6 () {
      var url = 'http://zhongkeruitong.top:18088/attendance/login.html'
      window.open(url, '_blank')
    },
    gotopage7 () {
      var url = 'http://zhongkeruitong.top/show/teacher_manager/static/index.html'
      window.open(url, '_blank')
    },
    gotopage8 () {
      var url = 'http://zhongkeruitong.top/show/sdc/sdc/index.html?from=singlemessage&isappinstalled=0#/tech'
      window.open(url, '_blank')
    },
    gotopage9 () {
      var url = 'http://zhongkeruitong.top/show/taq/#/login'
      window.open(url, '_blank')
    },
    gotopage10 () {
      // var url = 'http://58.119.112.13:11009/#/HomePage'
      // window.open(url, '_blank')
    },
    gotopage11 () {
      var url = 'http://36.112.18.33:8080/cmf/login'
      window.open(url, '_blank')
    },
    gotopage12 () {
      var url = 'http://58.119.112.15:11010'
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .homebb {
    height: 665px;
    background: url("../assets/img_bg_1.png");
    background-size: 100%;
    position: relative;
  }
  /*.el-carousel__item {*/
  /*width: 1000px;*/
  /*}*/

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home1 {
    margin: 0 auto;
    width: 80%;
  }
  .text {
    margin-top: 90px;
    text-align: center;
    margin-bottom: 40px;
  }
  .part {
    height: 350px;
    display: flex;
  }
  .part2 {
    width: 90%;
    margin: 0 auto;
    height: 170px;
    display: flex;
  }
  .part el-card {
    flex: 1;
    margin-right: 20px;
  }
  .part2 .morepart {
    flex: 1;
    margin-left: 20px;
  }
  .morepart {
    width: 100%;
    transition: all 0.6s;
  }
  .morepart:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
  .el-card {
    border: 0 solid;
  }
  .box-card {
    width: 100%;
    transition: all 0.6s;
  }
  .box-card:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
  .box-card1 {
    animation: go 0.5s;
  }
  .box-card2 {
    animation: go 1s;
  }
  .box-card3 {
    animation: go 1.5s;
  }
  .box-card4 {
    animation: go 2.5s;
  }
  .box-card5 {
    animation: go 3s;
  }
  .box-card6 {
    animation: go 3.5s;
  }
  .box-card7 {
    animation: go 4s;
  }
  .box-card8 {
    animation: go 4.5s;
  }
  .circle {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin: 0 auto;
    transition: all 0.6s;
    box-shadow: -1px 5px 10px #CCCCCC;
  }
  @keyframes go {
    0% {
      transform: translate3d(0, 150px, 0)
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  /*.circle:hover {*/
    /*transform: rotate(360deg);*/
  /*}*/
  .circlemore {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: #4B89ED;
    box-shadow: 0 5px 5px grey;
    text-align: center;
  }
  .circle1 {
    background: url("../assets/3233.png");
    background-size: 100%;
  }
  .circle2 {
    background: url("../assets/5544.png");
    background-size: 100%;
  }
  .circle3 {
    background: url("../assets/4545.png");
    background-size: 100%;
  }
  .circle4 {
    background: url("../assets/1235.png");
    background-size: 100%;
  }
  .circle5 {
    background: url("../assets/1333.jpg");
    background-size: 100%;
  }
  .circle6 {
    background: url("../assets/566.png");
    background-size: 100%;
  }
  .circle7 {
    background: url("../assets/666.png");
    background-size: 100%;
  }
  .circle8 {
    background: url("../assets/134444.png");
    background-size: 100%;
  }
  .word1 {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }
  .word2 {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #999999;
  }
  .styleword {
    font-size: 40px;
    color: white;
    line-height: 100px
  }
  .hometext {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    /*color: #575757;*/
  }
  .hometext1 {
    top: 25%;
    font-size: 48px
  }
  .hometext2 {
    top: 38%;
    font-size: 24px
  }
  .hometext3 {
    top: 48%;
  }
  .homepart {
    width: 95%;
    margin: 50px auto;
    height: 700px;
    background: url("../assets/678.jpg");
    background-size: 100%;
    display: flex;
    transition: all 0.6s;
  }
  .homepart:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 5px 5px grey;
  }
  .homepart div {
    flex: 1;
  }
  .homepart1 {
    background-color: #4A89ED;
  }
  .homepart2 {
    /*background: url("../assets/00000.png") no-repeat;*/
    /*background-size: cover;*/
  }
  .word3 {
    font-size: 45px;
    color: white;
    margin-top: 120px;
    width: 91%;
    margin-left: 20px;
  }
</style>
