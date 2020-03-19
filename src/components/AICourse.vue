<template>
  <div>
    <el-container>
      <el-header>烧脑人工智能：互联网大数据“魅力”之旅
        —基于互联网大数据的个性化资讯定制开发</el-header>
      <el-container>
        <el-aside>
          <el-menu
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">课程背景</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="ymq-icontubiao-qiapian icontext"></i>
              <span slot="title">实训目标</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">系统功能</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-location"></i>
              <span slot="title">技术方案</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-location"></i>
              <span slot="title">实训环境要求</span>
            </el-menu-item>
            <!--<el-submenu index="5-1">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>规划项目</span></template>-->
              <!--<el-menu-item index="14">1、概述</el-menu-item>-->
              <!--<el-menu-item index="15">2、武装飞船</el-menu-item>-->
              <!--<el-menu-item index="16">3、陨石入侵</el-menu-item>-->
              <!--<el-menu-item index="17">4、太空陨石入侵游戏界面与积分</el-menu-item>-->
            <!--</el-submenu>-->
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div v-if="indexshow === '1'">
              <div class="titletext">
                <p class="ptext">实践项目：基于互联网大数据的个性化资讯定制开发</p>
                <p class="ptext">大数据时代，互联网数据被认为规模最大、结果最复杂、潜在价值最高的源数据。国家政策也在大力推进大数据人才的培养，本实践课的目的正是为了给学生打开大数据的技术大门而设计，学生通过实际的操作定制自己感兴趣的资讯信息，达到对大数据具有感性认识和理性的逻辑设计技术。</p>
                <p class="ptext">互联网数据定向采集可做特定领域的问题发现、问题跟踪等。本课程将以资讯类数据为基础，采集建库并建设分布式搜索引擎服务，结合统一的微服务，学生可获取订阅信息。</p>
                <p class="ptext">综上所述，配置互联网数据采集、搜索引擎建索引、微服务访问三大大数据领域的重要模块可以让学生体验IT科技带来的力量，对提升学生的实践能力、设计能力、独立解决问题的能力有极大的帮助。</p>
                <p class="ptext">软件设计结构模块化、可配置化、程序结构化、数据格式标准化、代码统一化，各种文档资料规范化。</p>
              </div>
              <!--<div class="imgdiv">-->
                <!--&lt;!&ndash;<img src="../assets/图片1.png" class="img">&ndash;&gt;-->
              <!--</div>-->
              <div class="buttonpos">
                <el-button-group >
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '2'">
              <div class="titletext">
                <p class="ptext">1）学生自己动手配置采集互联网资讯数据，作为订阅数据源；</p>
                <p class="ptext">2）学生将采集的数据，同步到分布式搜索引擎中建索引；</p>
                <p class="ptext">3）学生通过微服务参数，完成对个性化订阅资讯数据的在线浏览；</p>
                <p class="ptext">通过基于配置、启动、关联等基本操作，强化学生的动手能力；提高学生对软件工程方法、技术、工具、过程和管理的认识；加强学生的团队意识；提高学生自主解决问题、协作解决问题的能力。</p>
              </div>
              <!--<div class="imgdiv" >-->
                <!--&lt;!&ndash;<img src="../assets/图片2.png" class="img">&ndash;&gt;-->
              <!--</div>-->
              <!--<div class="titletext">-->
                <!--<p class="ptext">本课程通过学习Python编程，让同学们踏入人工智能的大门，培养学生们对人工智能和计算机编程的兴趣。同时提高学生的科学素养，开拓思维，学会运用编程思想解决生活中的问题。</p>-->
              <!--</div>-->
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '3'">
              <div class="titletext">
                <p class="ptext">数据流程</p>
              </div>
              <div class="imgdiv" >
                <img src="../assets/图片1.png" class="img2">
                <p class="ptext">图1 数据采集流程</p>
              </div>
              <p class="ptext">模块功能：</p>
              <p class="ptext">1）数据采集模板配置工程</p>
              <div style="width: 90%;margin: 10px auto">
                <p class="ptext">数据采集模板配置工程主要完成采集站点的频道模板配置，配置重要信息有：</p>
                <p class="ptext">`website_name` varchar(64) DEFAULT '0' COMMENT '站点名称',</p>
                <p class="ptext">`contry` varchar(64) DEFAULT '0' COMMENT '国家名称',</p>
                <p class="ptext">`language` varchar(64) DEFAULT '0' COMMENT '语种',</p>
                <p class="ptext">`channel_name` varchar(256) DEFAULT '0' COMMENT '频道名称',</p>
                <p class="ptext">`channel_url` varchar(256) DEFAULT '0' COMMENT '频道url',</p>
                <p class="ptext">`channel_url_nextpage` varchar(256) DEFAULT '0' COMMENT '频道下一页url',</p>
                <p class="ptext">`start_time` timestamp NULL DEFAULT NULL COMMENT '开始时间',</p>
                <p class="ptext">`stop_time` timestamp NULL DEFAULT NULL COMMENT '结束时间',</p>
                <p class="ptext">`status` varchar(64) DEFAULT '0' COMMENT '抽取正常、抽取异常',</p>
                <p class="ptext">`title` varchar(256) DEFAULT '0' COMMENT '文章标题的xpath',</p>
                <p class="ptext">`author` varchar(64) DEFAULT '0' COMMENT '文章作者的xpath',</p>
                <p class="ptext">`pubtime` varchar(32) DEFAULT '0' COMMENT '发布时间的xpath',</p>
                <p class="ptext">`content` longtext COMMENT '正文的xpath',</p>
                <p class="ptext"> `source` varchar(50) DEFAULT '0' COMMENT '转发来源的xpath'</p>
              </div>
              <div class="titletext">
                <p class="ptext">配置模块在写库之前需要对配置的xpath进行测试验证，如果测试通过则写入到模板库，如果失败则提示，并要求用户重新配置模板。模板配置内容包括两类：一、频道中新闻列表的抽取，保证能把首页上的新闻url抽出来，如果想更深一步可以考虑进行翻页抽取url。二、具体页面的内容抽取，如标题、作者、发布时间等。</p>
                <p class="ptext">该子工程是整个基于爬虫做数据分析应用系统的基础。同时因为网站模板存在改版问题，模板管理同学需要能及时发现失效模板并进行修复。</p>
                <p class="ptext">对失效模板的精确展示并提供方便的修改入口，能极大的提升模板管理的成本。模板失效需要配备报警机制，对模板失效时间要及时进行邮件等形式的报警。</p>
                <p class="ptext">本工程参考图如下：</p>
              </div>
              <div class="imgdiv" >
                <img src="../assets/图片2.png" class="img1">
                <p class="ptext">图2 采集配置</p>
              </div>
              <p class="ptext">2）分布式数据采集工程</p>
              <div style="width: 90%;margin: 10px auto">
                <p class="ptext">互斥获取种子：该模块从模板库读取种子信息，互斥特性则是为了实现分布式时的并行模式。在模板库中的数据量变的很大，则采集工程需要进行分布式部署，同时能够避免重复采集同一模板数据。</p>
                <p class="ptext">下载频道页：根据模板中频道url直接下载列表，同时根据xpath读取所有的新闻url，配置上其它必须信息，打包成一个下载元数据，放到缓存队列中。</p>
                <p class="ptext">排重：排重的目的就是为了避免对同一url文章的重复下载，浪费资源，更有可能触发该网站的禁止访问策略。该模块从下载任务队列中取出下载的元数据，在开始真正下载之前先进行排重处理。用作排斥的数据结构很多，比较流行的有Redis、SSDB等kv服务，在数据量不大并且可用的情况下，也可以采用传统数据库进行排重。</p>
                <p class="ptext">下载内容页：该模块负责使用jsoup的方式把url对应的页面现在下来。在碰到禁止访问的IP限制后，能够采用动态IP的方式解决访问频道的限制。一般情况下可以不采用动态IP的方式，因为对于同一个网站的采集频道同时会受到模板数据量、采集程序部署数量、采集种子延迟控制等几个因素印象，不会对网站造成较大的采集压力。</p>
                <p class="ptext">模板抽取：该模板是核心模板，是关系数据质量的关键环节。通过模板配置的xpath进行对应信息的抽取，比如标题、作者、发布时间、正文等。如果关键字段抽取失败则通过反馈模块更新模板库的状态字段，标志为：模板失效，模板管理人员可通过报警后web前端进行查看和修改。抽取成功的字段则写入到存储中。小文件存储类型可采用分布式文件系统有：glusterFS、fastDFS等，在数据生命周期不长的情况下，也可以采用传统DB作为存储服务。用传统DB作为采集结果数据存储的优点：利于管理、操作灵活，开发技术门槛低，并且具有很高的稳定性。</p>
              </div>
              <p class="ptext">3）建立索引</p>
              <div class="imgdiv" >
                <img src="../assets/图片3.png" class="img1">
                <p class="ptext">图3 建索引流程图</p>
              </div>
              <p class="ptext">主要分为两个模块，分别是爬虫数据建索引、搜索服务模块。搜索服务则ElasticSearch提供，服务端实现以下：</p>
              <div style="width: 90%;margin: 10px auto">
                <p class="ptext">（1）通过mysql将数据同步到搜索引擎中；</p>
                <p class="ptext">（2）接口提供用户对信息的全文检索功能；</p>
                <p class="ptext">（3）使用分布式架构，集群化管理，尽可能提升可用性和性能；</p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '4'">
              <div class="titletext">
                <p class="ptext">数据采集工程技术采用互联网爬虫的成熟设计，包括种子获取、频道抓取、详情页下载、抽取内容、结果写库等六个关键模块。采用Java多线程技术提升性能，采用JSoup提升程序的稳定性，采用Redis排重，提升对大数据的处理能力。采用Elasticsearch进行检索和索引。通过Spring cloud提供微服务接口。</p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '5'">
              <div class="titletext">
                <p class="ptext">大数据集群：3台</p>
                <p class="ptext">数据采集：2台</p>
                <p class="ptext">微服务： 3台</p>
                <p class="ptext">其中 大数据集群和微服务可共用服务器</p>
                <p class="ptext">合计：5台服务器   硬件要求：8核 32G内存 1T磁盘</p>
                <p class="ptext">实验室互动课堂，有操作电脑，网络连通</p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '6'">
              <div class="titletext">
                <p class="ptext">
                  海龟（turtle）是python提供给开发者的一个绘图的标准库，我们可以利用turtle绘制出各种各样有趣的图形也可以绘制出令人惊奇的图片。
                </p>
                <p class="ptext">
                  使用海龟作图，我们不仅能够只用几行代码就创建出令人印象深刻的视觉效果，而且还可以跟随海龟看看每行代码如何影响到它的移动。这能够帮助我们理解代码的逻辑。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片9.png" class="img">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  让我们使用海龟作图来编写第一个程序。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/0000.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  当这段代码运行时，我们会得到衣服漂亮整齐的图片。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片10.png" class="img1">-->
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '7'">
              <div class="titletext">
                <p class="ptext">让我们来逐行分析这个程序，仔细解读这个程序是怎么工作的。</p>
                <p class="ptext">第1行是注释。正如我们之前所讲过的那样，注释是以一个井号（#）开头，允许我们在井号候写入一些提示，给自己或者以后阅读该程序的其他人一些提示，计算机不会阅读或者编译井号后的内容。在这个例子中，我们将这个程序是做什么的做一个简单说的说明。</p>
                <p class="ptext">
                  第2行导入（import）了绘制海龟图形的功能，导入已经编写过的模块（也是由代码编写）或者称为库，这是编程工作非常有趣的事情之一。如果我们编写了一些有趣并有用的程序，也可以将其与其他人分享，同时也可以自己重用它。当我们输入import turtle，就表示我们的程序能够使用那些python程序员所编写的代码。图上中的小黑色箭头就表示海龟，它在屏幕上移动的时候会使用海龟绘图。
                </p>
                <p class="ptext">
                  第3行t = turtle.Pen( )，它是让计算机知道我们将使用字母t表示海龟的画笔。这样的编码使得我们只需要录入t.forward( )，而不是turtle.Pen( ).forward( )，就可以让海龟在屏幕上用海龟画笔进行画图。字母t是告诉海龟怎么做的一种快捷方式。
                </p>
                <p class="ptext">
                  第4行最为复杂。我们创建了一个循环（loop）精确的说是for循环，它重复一组指令很多次。这个循环设置了一个范围（range），从0~99的100个数字（计算机总是从0开始计数，而不是像我们通常那样从1开始）。在该循环中，字母x遍历了0~99中的每一个数字。因此x从0开始，然后变为1，然后在变为2，依次知道99，一共执行了100次。其中x叫做变量（小读者可能会把x当做未知数，就像当他们求解x + 4 = 6中未知数x一样。年龄大一点的读者可能会通过代数课或者其他的数学课程认识x，早期的程序员正是从代数和数学中借用了变量的概念）变量在程序执行过程中存储了一个可以修改（变化）的值。我们在编程过程，每一个程序都会用到变量。
                </p>
                <p class="ptext">
                  第5行第6行代码，这两行代码缩进了，或者说，在左边留出了空格。这意味着他们在for循环结构当中（in the loop）并且是和第4行代码是一起的，每次x从0~99的范围中获取一个新的数字的时候，这些代码都会执行一次，直到达到100次时，跳出循环。
                </p>
                <p class="ptext">
                  第5行，命令t.forward( x )（forward是turtle库中画笔的一个属性，其表示向当前画笔方向移动x像素长度）是让海龟的画笔在屏幕上向前移动x个点，因为第一个数字是0，所以画笔根本不会移动。
                </p>
                <p class="ptext">
                  第6行，t.left( 90 )是让海龟向左转90°，或者说转四分之一个圈。
                </p>
                <p class="ptext">
                  下面我们来深刻介绍一下for循环。由于for循环，程序持续运行并且回到循环的开始位置。计算机加1后将x移动到范围中的下一个值，以为1依然位于从0~99的范围中，所以循环继续。现在x是1，因此画笔向前移动1个点，然后，画笔向左移动90°，因为代码是t.left( 90 )，这样一次for循环执行完毕，没有超出范围，回到for循环起始位置，执行下一次循环，依次类推，当x到达99是，for循环的最后一次迭代（执行），画笔围绕着正方形螺旋线的外围化了一条长长的线条，for循环结束，正方形螺旋图形就画出来了。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片11.png" class="img1">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  下面我们随着x从0增加到12，将循环的每一步可视化得表示出来。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/123.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  for循环0到4：绘制了前4条线（在x=5停止，0画笔不移动）
                </p>
                <p class="ptext">
                  for循环5到8：绘制了另外四条线；正方形开始出现（x=9）
                </p>
                <p class="ptext">
                  for循环8到12：正方形螺旋线变为12条（3个正方形，x=13）计算机屏幕上的点或像素可能太小了，以至于我们无法很好地看到它们。但是随着x变得越来越大，t.forward( x )画的线条会越来越长。最后我们有了一个炫目的正方形螺旋的图形。
                </p>
                <p class="ptext">
                  在这个案例中，我们之所以得到一个螺旋线，是因为每次转弯的时候，画笔都会走的更远一点。绘制的第一条线条只是1步长（x=1的时候），然后是2（循环的下一次的迭代），然后是3，以此类推，直到100，这个时候，线条的长度为99步长（像素）。再一次强调一下，屏幕上的像素可能太小了，以至于我们无法很容易地看到单个的点，但是一定要知道它们是存在的，而且我们会看到随着程序运行会包含更多的像素，线条会变得越来越长。
                </p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '8'">
              <div class="titletext">
                <p class="ptext">现在我们来看一下当我们改变了上面程序中的某一个数值时，海龟绘制的图形会发生怎样的变化？学习编程相关的新知识的一种方法是，当我们改变其中某一部分的时候，看看发生了什么。我们在编程过程中不会总是发到一个理想的结果，但是当某些地方出错的时候，我们能学到很多东西，并且对学到的知识会有更深一步的理解。</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/145.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">我们提到了向左转90°会画出一个完美的正方形。如果每次向左转的度数比90°多一点的话，会出现什么样图形呢？让我们先来运行一下代码，看看会发生什么。</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片12.png" class="img1">-->
                <p class="ptext">图 2 方形螺旋2</p>
              </div>
              <div class="titletext">
                <p class="ptext">正如运行结果作展示的，由于t.left( 91)，每次向左转91°，这样就会让海龟画出来的图形比正方形略微向外抛出一点点。随着for循环的每次执行，每次旋转都会偏离一点，心得图形越来越不像一个正方形。实际上创建了一个开始向左旋转的，漂亮的螺旋形，就是一直往上攀爬的楼梯一样。</p>
                <p class="ptext">
                  如果你还不知道度是如何工作的，现在先不要担心，只要尝试修改数字，看看发生了什么就会理解了。我们先修改range后面的括号中的值，让海龟画笔绘制的线条数达到200或者400，或者50。再尝试将最后最后一行的角度修改为92°、56°、121°等。修改完然后运行它，看看做完修改后会如何影响到海龟画笔的绘制。年龄大一点的读者了解一些几个知识，可能会根据不同角度的变化看到一些熟悉的形状，甚至能够在程序运行之前提前预测不同角度所产生的图形。较小的读者可能只能感受修改后带来的变化，等他们某一天上了几何课之后，可以在回头来看看这个联系，便会恍然大悟。
                </p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '9'">
              <div class="titletext">
                <p class="ptext">
                  说到几何，海龟作图可以绘制很多有趣的形状，而不只是直线。现在我们先来更多地了解一下python turtle库。turtle库中画笔有好多属性，不光只有画直线的，还有可以画圆的比如t.circle( )（让程序在当前位置画一个半径为x的圆）就可以画圆，当然还有其他属性这里就不一一列举了。
                </p>
                <p class="ptext">
                  如果我们想画一个更为复杂一点的图形，例如圆螺旋，那应该怎样去画呢？好在，画一个固定大小（或半径）的圆的命令，和画一条直线的命令都比较简单。我们只要将t.forward( x )修改为t.circle( x )就可以了。具体代码如下：
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/1453.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  让我们来思考一下，这个绘制和正方形螺旋有一个相同点：它也有4组圆形的螺旋线，就像正方形的螺旋线有四个边一样。这是因为我们使用的了t.left( 90 )命令，每次都向左旋转都超过90°一点点。如果我们学过几何就知道，围绕一个点旋转一圈是360°，就像正方形有4个90°的角（4×90 = 360）。海龟通过每次围绕图形旋转比90°多一点点，从而画出圆螺旋的图形。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片13.png" class="img">-->
                <p class="ptext">
                  图3 圆形螺旋
                </p>
              </div>
              <div class="titletext">
                <p class="ptext">
                  我们将会看到的一点不同是，圆形螺旋要比正方形螺旋要大一些，实际上，大约是前者两倍那么大。这是因为t.circle( x )中使用x作为圆的半径，而这是从圆心到边缘的距离，大概是圆的宽度的一半。
                </p>
                <p class="ptext">
                  半径为x意味着，圆的直径，也就是说总的宽度是x的两倍。换句话说t.circle( x )绘制的圆，当x等于1的时候，总宽度为2个像素；当x为2的时候总宽度为4个像素；按照这种推算方式，直到x等于99的时候，其宽度为198个像素。这是正方形最大时候的两倍，因此，圆螺旋看上去是正方形螺旋的两倍大小，当然，也会加倍的酷哦！像是一个旋转的大风车。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片14.png" class="img">-->
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '10'">
              <div class="titletext">
                <p class="ptext">这些螺旋图的形状不错，但是，颜色太单调了，如果能够让螺旋线变成彩色是不是会更加酷炫呢？让我回归到正方形螺旋图形上来，怎样给它加上颜色呢？我们只要在原来的代码中再加上一行代码，运用turtle库中另外一个属性，t.pencolor(“ color ”)运用这个属性可以改变画笔的颜色，把color改成red那么画笔所花的线就会变成红色，同样的也可以改成blue、green等都是可以的。代码如下：</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/156.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">运行改程序会出现正方形螺旋的蓝色版本，如下图</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片15.png" class="img">-->
                <p class="ptext">图 4 蓝色方形螺旋</p>
              </div>
              <div class="titletext">
                <p class="ptext">我们可以尝试用其他颜色来画这个图，同学们可以自己尝试。Turtle库中有上百种不同的颜色，大家可以自己课下研究一下。</p>
                <p class="ptext">让整个螺旋图形呈现一种不同的颜色是一种很好地探索。但是想要让每一遍都显示一种不同的颜色，我们应该怎么办呢？这需要对程序进行更多的修改。</p>
                <p class="ptext">如果要完成上面的问题，我们需要先来考虑一下算法（algorithm）。算法简单来说就是一系列的步骤，它能够将单色的螺旋线变为4色的螺旋线。其实，大部分的步骤还是跟上面是相同的，但是，我们还需要增加一些步骤，做相应的调整：</p>
                <p class="ptext">
                  ①导入turtle模块（库）并设置一个海归；
                </p>
                <p class="ptext">②设置计算机要是用的4种颜色；</p>
                <p class="ptext">③设置一个for循环，画螺旋线种100条线段；</p>
                <p class="ptext">④为正方形螺旋线的每一边选取一种不同的颜色；</p>
                <p class="ptext">⑤向前移动海龟，绘制每一条边；</p>
                <p class="ptext">⑥将海龟向左转91°，准备画下一条边。</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片16.png" class="img">-->
              </div>
              <div class="titletext">
                <p class="ptext">根据第二个步骤，我们怎样设置四种颜色呢？我们需要建立一个列表（在后面的课程中，我们会详细介绍）。我们要创建一个名为colors的列表变量并且设置4种颜色，如下所示：</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/3455.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  这个四种颜色的列表，将会在后面被使用为正方形的每一条边给出一种颜色。注意我们是将颜色的列表放在了方括号“[”与“]”之间。这里我们要确保引号中的每一种颜色名正确，并且用 ” ” 双引号括起来，因为这些颜色名都是字符串（string）或文本值，它是我们稍后要传递给pencolor函数的值。正如前面所说的那样，我们使用一个名为colors的变量来存储4种颜色的列表。因此，在任何情况下，当想要从列表中获取颜色的时候，我们都要使用colors变量来表示画笔的颜色。记住，变量存储的值是变化的，这就像其名称一样，变量嘛。
                </p>
                <p class="ptext">
                  根据算法步骤，我们接下来需要考虑的事情是，在每次遍历绘制循环的时候都要修改画笔的颜色。为了做到这一点，我们只要将t.pencolor( )函数移动到for循环下面成为循环的一部分就可以了，当然还要告诉pencolor函数，要使用列表中的哪一种颜色。代码如下：
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/78976.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">运行上面的程序，我们就会看到我们设置的四种颜色起作用了，从结果来看，效果不错，如下图所示：</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片17.png" class="img">-->
                <p class="ptext">图 5 四色方形螺旋</p>
              </div>
              <div class="titletext">
                <p class="ptext">pencolor函数中唯一的新增部分是（colors[x%4]）。这条语句中的x和我们在程序中其他地方所使用的x是同一个变量，因此，x将持续从0～99增加，就像我们前面所见到的那样。圆括号中的colors变量名告诉Python，从我们在程序前面所添加的、名为colors的颜色名称列表中选取一种颜色。[x%4]告诉Python我们将使用colors列表中的前4种颜色，即编号从0～3的颜色并且每当x变化的时候就遍历它们。在这个例子中，我们的颜色列表只有4种颜色，因此，我们需要一次又一次地遍历这4种颜色。</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/6744.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  [x%4]中的“%”叫作模除操作符（modulo operator），表示一次除法运算中的余数（remainder）（5÷4商1余1，因此，5可以包含4一次并且还剩下1；6÷4余2，以此类推）。当我们想要遍历列表中一定数目的项时，例如我们对4种颜色列表所做的操作，模除操作符很有用。
                </p>
                <p class="ptext">
                  在100步中，colors[x%4]将遍历4种颜色（0、1、2和3，分别表示红色、黄色、蓝色和绿色）整整25次。如果我们有时间（并且有一个放大镜），可以数一数图2-5中有25条红色的、25条黄色的、25条蓝色的和25条绿色的线段。第1次遍历绘制循环的时候，Python使用列表中的第一种颜色，红色；第2次遍历的时候，它使用黄色，以此类推。第15次遍历循环的时候，Python又回过头来使用红色，然后是黄色，等等；每通过循环4次之后，总是又回过头来使用红色。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片18.png" class="img">-->
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '11'">
              <div class="titletext">
                <p class="ptext">
                  让我们再次加入一点内容，创造更漂亮一些的内容。正如我们所看到的的那样，黄色部分太难以识别出来了。这就像是在白色的绘画纸上使用黄色的蜡笔一样，屏幕上的黄色像素无法在白色背景上明显地显示出来。让我们把背景颜色修改为黑色，来改正这个问题。我们在程序中的import行之后的任何位置，输入如下的代码行。
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/4532.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">
                  添加这一行之后，图片更加漂亮，所有的颜色现在都处在一个黑色的背景之上。注意，海龟钢笔（在程序中由变量t表示）没有任何变化。相反，我们修改了海龟屏幕的一些内容，也就是背景颜色。turtle.bgcolor( )命令允许我们将整个绘制屏幕修改为Python中指定的任何颜色。在turtle.bgcolor(“black”)这一行中，我们选择了黑色作为屏幕颜色，因此，红色、黄色、蓝色和绿色都显示得很好。此外，我们可以将循环中的range()修改为200甚至更大，以使得螺旋线中的正方形更大。在黑色背景上显示200个线段的新版本的图片，如图下图所示：
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片19.png" class="img">-->
                <p class="ptext">图 6 添加背景颜色</p>
              </div>
              <div class="titletext">
                <p class="ptext">
                  如何让我的程序变得更为惊人呢？我们可以再做一项修改：如果现在把线段替换为圆，那会怎么样呢？那会不会是最酷的图片呢？好吧，我必须承认，这甚至会更酷！完整的代码如下所示：
                </p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/67895.png" class="img2">-->
              </div>
              <p class="ptext">
                我们可以看到如下结果
              </p>
              <div class="imgdiv">
                <!--<img src="../assets/图片20.png" class="img">-->
                <p class="ptext">图 7 四色圆螺旋</p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '12'">
              <div class="titletext">
                <p class="ptext">到目前为止，我们已经使用变量来修改颜色、大小以及螺旋线形状的旋转角度。让我们再添加一个sides变量，来表示形状的边数。这个新的变量如何改变我们的螺旋线呢？如果要搞清楚这一点，我们尝试这个新的程序：</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/567323.png" class="img2">-->
              </div>
              <div class="titletext">
                <p class="ptext">我们可以将sides的值从6改为2 ( 1个边并不是很有趣，也不能使用太大的数字，除非我们在程序的第6行中的列表中，添加更多的颜色），然后保存该程序并且可以运行任意多次。图2-8展示了用sides=6、sides=5, 一直到sides=2所创建的图像，其中sides=2的图像很奇怪，这就是图所显示的扁平的螺旋线我们可以改变列表中的颜色的顺序，也可以在绘制循环之中的任意函数中，使用较大一些或较小一点的数字。如果把程序给搞乱了， 我们只需要返回到最初的程序重新来玩就好了。</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片21.png" class="img">-->
                <p class="ptext">图 2.8 六边六色螺旋</p>
              </div>
              <div class="titletext">
                <p class="ptext">该程序使用了一条新的命令t.width( )，它修改了海龟画笔的宽度。在我们的程序中，随着钢笔绘制的形状越来越大，钢笔变得越来越宽 (其线条变得更粗)。在后续的章节之中，我们学习创建程序所需的其他技能的时候，还会再次遇到这个程序以及其他类似的程序。</p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '13'">
              <div class="titletext">
                <p class="ptext">在本章中，我们使用Turtle库的工具绘制了令人印象深刻的彩色形状:我们使用import命令把这个库导人到自己的程序中，同时了解到，以这种方式来重用代码是编程的最强大的功能之一。一旦编写了有用的内容，或者借川某些人慷慨分享的代码，我们不仅能够节省时间，而且能够使用这些导人的代码做全新的事情。</p>
                <p class="ptext">我们还介绍了程序中像x和sides这样的变量。这些变量存储或记住一个数字或值，以便我们能够在程序中多次使用它，甚至修改其值:在第3章中，我们将学习变量的作用以及Python如何能够帮助你完成数学作业 现在，我们应该能够做如下这些事情：</p>
                <p class="ptext">•用Turtle库绘制简单的图形；</p>
                <p class="ptext">•使用变量来存储简单的数值和字符串；</p>
                <p class="ptext">•在编译器中运行、修改和保存程序。</p>
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="indexshow === '14'">
              <div class="titletext">
                <p class="ptext">开发大型项目时，做好规划后再动手编写项目很重要。规划可确保你不偏离轨道，从而提高项目成功的可能性。 </p>
                <p class="ptext">下面来编写有关游戏《太空陨石入侵》的描述，其中虽然没有涵盖这款游戏的所有细节，但能让你清楚地知道该如何动手开发它。 </p>
                <p class="ptext">在游戏《太空陨石入侵》中，玩家控制着一艘最初出现在屏幕底部中央的飞船。玩家可以使用箭头键左右移动飞船，还可使用空格键进行射击。游戏开始时，陨石出现在天空中，他们在屏幕中向下移动。玩家的任务是击碎这些陨石。玩家将所有陨石都消灭干净后，将出现一群新的陨石，他们移动的速度更快。只要有陨石撞到了玩家的飞船，玩家就损失一艘飞船。玩家损失三艘飞船后，游戏结束。</p>
                <p class="ptext">在第一个开发阶段，我们将创建一艘可左右移动的飞船，这艘飞船在用户按空格键时能够开火。设置好这种行为后，我们就能够将注意力转向陨石上去，并提高这款游戏的可玩性。</p>
              </div>
              <div class="imgdiv">
                <!--<img src="../assets/图片22.png" class="img">-->
              </div>
              <div class="buttonpos">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="prepage">上一页</el-button>
                  <el-button type="primary" @click="nextpage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
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
    /*text-align: center;*/
  }
  .icontext {
    font-size: 18px;margin-left: 5px;margin-right: 5px
  }
  .titletext {
    font-size: 18px;
    /*font-weight: bold;*/
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
    text-align: center;
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
  .img2 {
    border-radius: 40px;
    width:900px;
    box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.5);
  }
  .el-menu-vertical-demo {

  }
  .ptext {
    text-indent: 2em;
  }
  .buttonpos {
    margin-top: 100px;text-align: center;
  }
</style>
