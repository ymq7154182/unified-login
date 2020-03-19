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
        <el-button type="primary" round style="width: 150px;height: 50px" @click="gotocontent">了解详情</el-button>
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
      <div class="part" style="margin-top: 150px" id="here">
        <el-card style="width: 100%"  shadow="never">
          <!--<div class="circle circle7"></div>-->
          <!--<div class="word1">-->
          <!--<span>教师评价</span>-->
          <!--</div>-->
          <!--<div class="word2">-->
          <!--<span>实时记录教师各项工作，辅助学校对教师绩效进行评价，并作为教师成长档案，推动教师发展</span>-->
          <!--</div>-->
          <div style="font-size: 28px">
            <i class="ymq-iconright" style="font-size: 28px"></i>
            <span>
                多方面，全流程，智能化教学管理
            </span>
          </div>
          <div  class="part3word">
            <span>智能化教学管理</span>
          </div>
        </el-card>
        <el-card class="box-card box-card1" shadow="hover" @click.native="gotopage1">
          <div class="circle circle1"></div>
          <div class="word1">
            <span>支持走班的智能选排课系统</span>
          </div>
          <div class="word2">
            <span>新课改走班制下学生自主选课与多约束条件下智能排课服务系统</span>
          </div>
        </el-card>
        <el-card class="box-card box-card6"  shadow="hover" @click.native="gotopage6">
          <div class="circle circle6"></div>
          <div class="word1">
            <span>考勤管理与课堂小助手</span>
          </div>
          <div class="word2">
            <span>走班制下的实时监测课堂考勤及学生安全管理的家校互动平台</span>
          </div>
        </el-card>
        <el-card class="box-card box-card2"  shadow="hover" @click.native="gotopage9">
          <div class="circle circle2"></div>
          <div class="word1">
            <span>在线评教评学与实时分析</span>
          </div>
          <div class="word2">
            <span>实现自动化高效率评教评学及即时多维度的统计分析</span>
          </div>
        </el-card>
      </div>
      <div class="line"></div>
      <div class="part3">
        <div class="divchild1">
          <div style="font-size: 28px">
            <i class="ymq-iconright" style="font-size: 28px"></i>
            <span>
                致力于学生学习的多元化，全方位的智能平台
              </span>
          </div>
          <div  class="part3word">
            <span>智慧学习平台</span>
          </div>
        </div>
        <div class="divchild2">
          <div class="child2">
            <div class="child21 childhover1 childs" @click="gotopage14">
              <div class="child211">
                <div class="childtext2">
                  <div class="childline2"></div>
                  <span>学生成绩挖掘分析平台</span>
                </div>
              </div>
            </div>
            <div class="child22 childhover1 childs" @click="gotopage13">
              <div class="child211">
                <div class="childtext2">
                  <div class="childline2"></div>
                  <span>语文作文·智慧写作平台</span>
                </div>
              </div>
            </div>
            <div class="child23 childhover1 childs" @click="gotopage2">
              <div class="child211">
                <div class="childtext2">
                  <div class="childline2"></div>
                  <span>成绩统一管理与自动分析系统</span>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="child2">-->
            <!--<div class="child31 childhover2 linehover" @click="gotopage14">-->
              <!--<div  class="childtext">-->
                <!--<div>-->
                  <!--<div class="childline"></div>-->
                  <!--<div>学生成绩挖掘分析平台</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="child32 childhover2" @click="gotopage13"></div>-->
            <!--<div class="child33 childhover2 linehover" @click="gotopage2">-->
              <!--<div  class="childtext">-->
                <!--<div>-->
                  <!--<div class="childline"></div>-->
                  <!--<div>成绩统一管理与自动分析系统</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>

      <div class="line"></div>
      <div class="part4">
        <div class="part41">
          <div style="font-size: 28px">
            <i class="ymq-iconright" style="font-size: 28px"></i>
            <span>
                高效、简洁、一体化的智能管理平台
              </span>
          </div>
          <div  class="part3word">
            <span>校园智能管理服务</span>
          </div>
        </div>
        <div class="part41">
          <div style="height: 250px" class="part411 part421" @click="gotopage4"></div>
          <div class="word1">
            <span>学校资产精准管理整合平台</span>
          </div>
        </div>
        <div class="part41">
          <div style="height: 250px" class="part411 part422" @click="gotopage16"></div>
          <div class="word1">
            <span>智慧餐评</span>
          </div>
        </div>
        <div class="part41">
          <div style="height: 250px" class="part411 part423"></div>
          <div class="word1">
            <span>活动节考勤与即时分析</span>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="text">
        <span style="font-size: 28px">智能“评”与“测”</span>
      </div>
      <div class="part">
        <el-card class="box-card box-card7"  shadow="hover" @click.native="gotopage7">
          <div class="circle circle7"></div>
          <div class="word1">
            <span>教师绩效评价与发展平台</span>
          </div>
          <div class="word2">
            <span>实时记录教师各项工作，辅助学校对教师绩效进行评价，并作为教师成长档案，推动教师发展</span>
          </div>
        </el-card>
        <!--<el-card class="box-card box-card1" shadow="hover" @click.native="gotopage9">-->
          <!--<div class="circle circle9"></div>-->
          <!--<div class="word1">-->
            <!--<span>在线评教评学与实时分析</span>-->
          <!--</div>-->
          <!--<div class="word2">-->
            <!--<span>实现自动化高效率评教评学及即时多维度的统计分析</span>-->
          <!--</div>-->
        <!--</el-card>-->
        <el-card class="box-card box-card8"  shadow="hover" @click.native="gotopage8">
          <div class="circle circle8"></div>
          <div class="word1">
            <span>学涯评测与认知规划平台</span>
          </div>
          <div class="word2">
            <span>学生测评数据、学习过程数据等融合运用，构建有效的学生兴趣与能力倾向画像，促进学涯发展</span>
          </div>
        </el-card>
        <el-card class="box-card box-card3"  shadow="hover" @click.native="gotopage3">
          <div class="circle circle3"></div>
          <div class="word1">
            <span>高考志愿填报预测系统</span>
          </div>
          <div class="word2">
            <span>基于全量、多维、真实的覆盖十年的考录数据，提供高考志愿的智能推荐，及一站式的报考服务</span>
          </div>
        </el-card>
      </div>

      <!--<div class="text">-->
      <!--<span style="font-size: 28px">智能校园</span>-->
      <!--</div>-->
      <!--<div class="part">-->
      <!--<el-card class="box-card box-card1" shadow="hover" @click.native="gotopage1">-->
      <!--<div class="circle circle1"></div>-->
      <!--<div class="word1">-->
      <!--<span>智能排课</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>新课改走班制下学生自主选课与多约束条件下智能排课服务系统</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--<el-card class="box-card box-card6"  shadow="hover" @click.native="gotopage6">-->
      <!--<div class="circle circle6"></div>-->
      <!--<div class="word1">-->
      <!--<span>学生考勤</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>走班制下的实时监测课堂考勤及学生安全管理的家校互动平台</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--<el-card class="box-card box-card7"  shadow="hover" @click.native="gotopage7">-->
      <!--<div class="circle circle7"></div>-->
      <!--<div class="word1">-->
      <!--<span>教师评价</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>实时记录教师各项工作，辅助学校对教师绩效进行评价，并作为教师成长档案，推动教师发展</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--<el-card class="box-card box-card2"  shadow="hover" @click.native="gotopage2">-->
      <!--<div class="circle circle2"></div>-->
      <!--<div class="word1">-->
      <!--<span>成绩分析</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>多源的成绩综合管理平台，学生成绩挖掘与智能提升，服务于教师及学校对成绩的多维分析</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--</div>-->
      <!--<div class="part" style="margin-top: 20px">-->
      <!--<el-card class="box-card box-card8"  shadow="hover" @click.native="gotopage8">-->
      <!--<div class="circle circle8"></div>-->
      <!--<div class="word1">-->
      <!--<span>学涯规划</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>学生测评数据、学习过程数据等融合运用，构建有效的学生兴趣与能力倾向画像，促进学涯发展</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--<el-card class="box-card box-card3"  shadow="hover" @click.native="gotopage3">-->
      <!--<div class="circle circle3"></div>-->
      <!--<div class="word1">-->
      <!--<span>高考预测</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>基于全量、多维、真实的覆盖十年的考录数据，提供高考志愿的智能推荐，及一站式的报考服务</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--<el-card class="box-card box-card4"  shadow="hover" @click.native="gotopage4">-->
      <!--<div class="circle circle4"></div>-->
      <!--<div class="word1">-->
      <!--<span>资产管理</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>多层级、跨部门、多权限的资产全生命周期管理与智能分析平台;实现跨平台对接与数据融合。</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--<el-card class="box-card box-card5" shadow="hover" @click.native="gotopage5">-->
      <!--<div class="circle circle5"></div>-->
      <!--<div class="word1">-->
      <!--<span>餐饮管理</span>-->
      <!--</div>-->
      <!--<div class="word2">-->
      <!--<span>师生定制化配菜服务及多维评价分析，构建起餐饮与师生健康相融合的推荐服务系统</span>-->
      <!--</div>-->
      <!--</el-card>-->
      <!--</div>-->
      <div class="text">
        <span style="font-size: 28px">“STEM”课程</span>
      </div>
      <div class="word5" style="margin-bottom: 40px">
        <span>为中小学生量身打造的，适应不同学习层次的，系列化的、 具备标准体系的AI实践课程</span>
      </div>
      <div class="part2">
        <div class="morepart" @click="gotopage15">
          <div class="circlemore">
            <i class="ymq-iconwuguan styleword"></i>
          </div>
          <div class="word1">
            <span>Python数据科学与AI</span>
          </div>
        </div>
        <div class="morepart" @click="gotopage17">
          <div class="circlemore">
            <i class="ymq-iconsave styleword"></i>
          </div>
          <div class="word1">
            <span>python趣味编程与计算思维</span>
          </div>
        </div>
        <div class="morepart" @click="gotopage18">
          <div class="circlemore">
            <i class="ymq-iconrenjijiaohu styleword"></i>
          </div>
          <div class="word1">
            <span>大数据采集与交互机器人</span>
          </div>
        </div>
        <div class="morepart">
          <div class="circlemore">
            <i class="ymq-icongongyezujian-zhishideng styleword"></i>
          </div>
          <div class="word1">
            <span>智能交通信号控制</span>
          </div>
        </div>
        <!--<div class="morepart"  @click="gotopage4">-->
          <!--<div class="circlemore">-->
            <!--<i class="ymq-iconshebeiguanli styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>学校资产精准管理服务系统</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="morepart">-->
          <!--<div class="circlemore">-->
            <!--<i class="ymq-iconweizhigeshi styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>校餐饮管理</span>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/common/Sidebar'
import Footer from '@/components/common/Footer'
import $ from 'jquery'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Footer
  },
  mounted () {
  },
  methods: {
    gotocontent () {
      // document.getElementById('here').scrollIntoView()
      var hshight = $($('#here')).offset().top
      $('html,body').animate({
        scrollTop: hshight
      }, 700)
    },
    gotopage1 () {
      var url = 'http://zhongkeruitong.top/show/class_system/#/login'
      window.open(url, '_blank')
    },
    gotopage2 () {
      // var url = 'http://zhongkeruitong.top/show/scoreAprile/static/teacherscore/index.html'
      var url = 'http://zhongkeruitong.top/scoreAprile/static/teacherscore/index.html'
      window.open(url, '_blank')
    },
    gotopage14 () {
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
      var url = 'http://zhiheyikaoqin.cn/show/sdc/sdc/index.html#/course'
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
      var url = 'http://zhongkeruitong.top/crawl'
      window.open(url, '_blank')
    },
    gotopage13 () {
      var url = 'http://114.242.223.253/zihui/#/'
      window.open(url, '_blank')
    },
    gotopage15 () {
      var url = 'http://zhongkeruitong.top/python_course/'
      window.open(url, '_blank')
    },
    gotopage16 () {
      var url = 'http://zhongkeruitong.top/show/canteen-system/wechat/authorize?returnUrl=/index.html&path=menu'
      window.open(url, '_blank')
    },
    gotopage17 () {
      var url = 'http://zhongkeruitong.top/show/pycourse/index.html#/'
      window.open(url, '_blank')
    },
    gotopage18 () {
      const {href} = this.$router.resolve({
        path: `/AICourse`
      })
      window.open(href, '_blank')
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
    background: url("../assets/6666.jpg");
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
  .part4 {
    height: 350px;
    display: flex;
  }
  .part4 .part41 {
    flex: 1;
    margin-right: 40px;
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
    /*background-color: #CCFFFF;*/
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
    /*background-color: #CCFFFF;*/
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
    background-size: 100% 100%;
  }
  .circle2 {
    background: url("../assets/68556.jpg");
    background-size: 100% 100%;
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
    background: url("../assets/444.jpg");
    background-size: 100% 100%;
  }
  .circle9 {
    background: url("../assets/074.jpg");
    background-size: 100% 100%;
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
  .word5 {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #999999;
  }
  .word4 {
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
    top: 18%;
    font-size: 48px
  }
  .hometext2 {
    top: 40%;
    font-size: 24px
  }
  .hometext3 {
    top: 49%;
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
  .part3 {
    display: flex;
    height: 240px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .divchild1 {
    margin-right: 10px;
    flex: 1;
  }
  .divchild2 {
    flex: 3;
  }
  .child2 {
    display: flex;
    height: 100%;

  }
  .child2 .childs {
    margin-right: 40px;
    flex: 1;
  }
  .child21 {
    background-image: url("../assets/5544.png");
    background-size: 100% 100%;
  }
  /*@keyframes goback {*/
    /*0% {}*/
    /*100%{*/
      /*transform: translateY(240px);*/
    /*}*/
  /*}*/
  .child211{
    background-color: rgba(0, 0, 0, 0.5);
    height: 20px;
    /*height: 100%;*/
    opacity: 0;
    position: relative;
    transition: all 0.5s;
  }
  .child21:hover .child211{
    border-radius: 10px;
    height: 100%;
    opacity: 1;
    /*animation: goback 1s;*/
  }
  .child21:hover .childtext2 {
    color: #CCCCFF;
  }
  .child21:hover .childline2 {
    width: 150px;
    border: 1px solid #CCCCFF;
  }
  .child22:hover .child211{
    border-radius: 10px;
    height: 100%;
    opacity: 1;
    /*animation: goback 1s;*/
  }
  .child22:hover .childline2 {
    width: 150px;
    border: 1px solid #FFCC33;
  }
  .child22:hover .childtext2 {
    color: #FFCC33;
  }
  .child23:hover .child211{
    border-radius: 10px;
    height: 100%;
    opacity: 1;
    /*animation: goback 1s;*/
  }
  .child23:hover .childtext2 {
    color: #E3E9F7;
  }
  .child23:hover .childline2 {
    width: 150px;
    border: 1px solid #E3E9F7;
  }
  .child22 {
    background-image: url("../assets/01231.jpg");
    background-size: 100% 100%;
  }
  .child23 {
    background-image: url("../assets/89079.jpg");
    background-size: 100% 100%;
  }
  .child31 {
    background-color: #F6F6F6;
  }
  .child32 {
    background-image: url("../assets/01231.jpg");
    background-size: 100% 100%;
  }
  .child33 {
    background-color: #F6F6F6;
  }
  .part3word {
    margin-top: 40px;color: #EDEDED;font-size: 30px;font-weight: bold
  }
  .line {
    width: 90%;margin: 40px auto;border: 1px solid #ebeef5
  }
  .childtext {
    color: #7C7C7C;font-weight: bold;width: 200px;margin-left: 40px;margin-top: 100px;
  }
  .childtext2 {
    color: white;font-weight: bold;width: 200px;margin-left: 40px;margin-top: 80px;position: absolute;
    transition: all 2s;
  }
  .childline {
    border: 1px solid black;width: 40px;margin-bottom: 20px;
    transition: all 1s;
  }
  .linehover:hover .childline {
    width: 150px;
    border: 1px solid #99CCCC;
  }
  .childline2 {
    border: 1px solid white;width: 40px;margin-bottom: 20px;
    margin-top: 20px;
    transition: all 1s;
  }
  .childhover1 {
    transition: all 0.6s;
  }
  .childhover1:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 5px 5px grey;
    border-radius: 10px;
    /*border-radius: 50%;*/
  }
  .childhover2 {
    transition: all 0.6s;
  }
  .childhover2:hover {
    cursor: pointer;
    transform: translateY(10px);
    box-shadow: 0 5px 5px grey;
    /*border-radius: 50%;*/
  }
  .part411 {
    height: 300px;
    border-radius: 20px;
    box-shadow: 0 5px 5px grey;
    transition: all 0.6s;
  }
  .part421 {
    background: url("../assets/1235.png");
    background-size: 100% 100%;
  }
  .part422 {
    background: url("../assets/55545.jpg");
    background-size: 100% 100%;
  }
  .part421:hover {
    transform: translate(-10px,-10px);
    border-radius: 40px;
    cursor: pointer;
  }
  .part422:hover {
    transform: translateY(-10px);
    border-radius: 40px;
    cursor: pointer;
  }
  .part423 {
    background: url("../assets/bac.png");
    background-size: 100% 100%;
  }
  .part423:hover {
    transform: translate(10px,-10px);
    border-radius: 40px;
    cursor: pointer;
  }
</style>
