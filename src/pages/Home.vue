<template>
  <div class="login-container">
    <div class="login-wrap" v-show="showQuery">
      起始站：<el-input type="text" placeholder="请输入起始站" v-model="origin" class = "form-control" v-on:input ="clearArray"></el-input>
      终点站：<el-input type="text" placeholder="请输入终点站" v-model="terminus" class = "form-control"></el-input>
      <el-button v-on:click="query">直达查询</el-button>
      <p v-show="showTishi" style="color:#0096FF">{{tishi}}</p>
    </div>
        <mt-cell title="全线路（离线版）" to="../Map" is-link value="查看地图"></mt-cell>
        <mt-cell title="全线路（在线版）" to="../BaiduMap" is-link value="查看地图"></mt-cell>
        <!-- 手风琴效果，每次只能展开一个面板 -->
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="一号线 Line1" name="1">
            <div>1号线全长18.497千米，线路起于西朗站，途径天河区、越秀区和荔湾区，贯穿中山路，止于广州东站，大致呈西南-东北走向，标志色为黄色。</div>
            <el-steps :active="16" align-center>
              <el-step title="西朗"></el-step>
              <el-step title="坑口"></el-step>
              <el-step title="花地湾"></el-step>
              <el-step title="芳村"></el-step>
              <el-step title="黄沙"></el-step>
              <el-step title="长寿路"></el-step>
              <el-step title="陈家祠"></el-step>
              <el-step title="西门口"></el-step>
              <el-step title="公园前"></el-step>
              <el-step title="农讲所"></el-step>
              <el-step title="烈士陵园"></el-step>
              <el-step title="东山口"></el-step>
              <el-step title="杨箕"></el-step>
              <el-step title="体育西路"></el-step>
              <el-step title="体育中心"></el-step>
              <el-step title="广州东站"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="二号线 Line2" name="2">
            <div>2号线全长31.8千米，线路起于广州南站，途径番禺区、海珠区、越秀区和白云区，贯穿广州南站、广州站、白云新区，止于嘉禾望岗站，大致呈“S型”南北走向，标志色为蓝色。</div>
            <el-steps :active="24" align-center>
              <el-step title="广州南站"></el-step>
              <el-step title="石壁"></el-step>
              <el-step title="会江"></el-step>
              <el-step title="南浦"></el-step>
              <el-step title="洛溪"></el-step>
              <el-step title="南洲"></el-step>
              <el-step title="东晓南"></el-step>
              <el-step title="江泰路"></el-step>
              <el-step title="昌岗"></el-step>
              <el-step title="江南西"></el-step>
              <el-step title="市二宫"></el-step>
              <el-step title="海珠广场"></el-step>
              <el-step title="公园前"></el-step>
              <el-step title="纪念堂"></el-step>
              <el-step title="越秀公园"></el-step>
              <el-step title="广州火车站"></el-step>
              <el-step title="三元里"></el-step>
              <el-step title="飞翔公园"></el-step>
              <el-step title="白云公园"></el-step>
              <el-step title="白云文化广场"></el-step>
              <el-step title="萧岗"></el-step>
              <el-step title="江夏"></el-step>
              <el-step title="黄边"></el-step>
              <el-step title="嘉禾望岗"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="三号线 Line3" name="3">
            <div>3号线全长64.41千米，线路起于天河客运站，途径天河区、海珠区和番禺区，贯穿新中轴线区域、番禺区新城区等区域，止于番禺广场站，地铁大致呈南北“Y字形”走向，标志色为橙色。</div>
            <el-steps :active="16" align-center>
              <el-step title="番禺广场"></el-step>
              <el-step title="市桥"></el-step>
              <el-step title="汉溪长隆"></el-step>
              <el-step title="大石"></el-step>
              <el-step title="厦滘"></el-step>
              <el-step title="沥滘"></el-step>
              <el-step title="大塘"></el-step>
              <el-step title="客村"></el-step>
              <el-step title="广州塔"></el-step>
              <el-step title="珠江新城"></el-step>
              <el-step title="体育西路"></el-step>
              <el-step title="石牌桥"></el-step>
              <el-step title="岗顶"></el-step>
              <el-step title="华师"></el-step>
              <el-step title="五山"></el-step>
              <el-step title="天河客运站"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="三号线北延长段 Line3 Northward extension" name="4">
            <div>3号线全长64.41千米，线路起于天河客运站，途径天河区、海珠区和番禺区，贯穿新中轴线区域、番禺区新城区等区域，止于番禺广场站，地铁大致呈南北“Y字形”走向，标志色为橙色。</div>
            <el-steps :active="13" align-center>
              <el-step title="体育西路"></el-step>
              <el-step title="林和西"></el-step>
              <el-step title="广州东站"></el-step>
              <el-step title="燕塘"></el-step>
              <el-step title="梅花园"></el-step>
              <el-step title="京溪南方医院"></el-step>
              <el-step title="同和"></el-step>
              <el-step title="永泰"></el-step>
              <el-step title="白云大道北"></el-step>
              <el-step title="嘉禾望岗"></el-step>
              <el-step title="龙归"></el-step>
              <el-step title="人和"></el-step>
              <el-step title="机场南"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="四号线 Line4" name="5">
            <div>4号线全长60.03千米，起于黄村站，途径天河区、番禺区、海珠区、天河区，止于南沙客运港站，大致呈南北走向，标志色是绿色。</div>
            <el-steps :active="15" align-center>
              <el-step title="金洲"></el-step>
              <el-step title="蕉门"></el-step>
              <el-step title="黄阁"></el-step>
              <el-step title="黄阁汽车站"></el-step>
              <el-step title="东浦"></el-step>
              <el-step title="低涌"></el-step>
              <el-step title="石碁"></el-step>
              <el-step title="新造"></el-step>
              <el-step title="大学城南"></el-step>
              <el-step title="大学城北"></el-step>
              <el-step title="官洲"></el-step>
              <el-step title="万胜围"></el-step>
              <el-step title="车陂南"></el-step>
              <el-step title="车陂"></el-step>
              <el-step title="黄村"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="五号线 Line5" name="6">
            <div>5号线全长31.9千米，起于滘口站，途径荔湾区、越秀区、天河区和黄埔区，贯穿旧城中心区、广州市中心组团和珠江新城CBD，止于文冲站，大致呈东西走向，标志色为红色。</div>
            <el-steps :active="24" align-center>
              <el-step title="滘口"></el-step>
              <el-step title="坦尾"></el-step>
              <el-step title="中山八"></el-step>
              <el-step title="西场"></el-step>
              <el-step title="西村"></el-step>
              <el-step title="广州火车站"></el-step>
              <el-step title="小北"></el-step>
              <el-step title="淘金"></el-step>
              <el-step title="区庄"></el-step>
              <el-step title="动物园"></el-step>
              <el-step title="杨箕"></el-step>
              <el-step title="五羊邨"></el-step>
              <el-step title="珠江新城"></el-step>
              <el-step title="猎德"></el-step>
              <el-step title="潭村"></el-step>
              <el-step title="员村"></el-step>
              <el-step title="科韵路"></el-step>
              <el-step title="车陂南"></el-step>
              <el-step title="东圃"></el-step>
              <el-step title="三溪"></el-step>
              <el-step title="鱼珠"></el-step>
              <el-step title="大沙地"></el-step>
              <el-step title="大沙东"></el-step>
              <el-step title="文冲"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="六号线 Line6" name="7">
            <div>6号线全长41.94千米，起于浔峰岗站，途径荔湾区、越秀区、天河区、黄埔区，贯穿坦尾、珠江北岸，止于香雪站，大致呈东西“U型”走向，标志色为紫红色。</div>
            <el-steps :active="29" align-center>
              <el-step title="浔峰岗"></el-step>
              <el-step title="横沙"></el-step>
              <el-step title="沙贝"></el-step>
              <el-step title="河沙"></el-step>
              <el-step title="坦尾"></el-step>
              <el-step title="如意坊"></el-step>
              <el-step title="黄沙"></el-step>
              <el-step title="文化公园"></el-step>
              <el-step title="一德路"></el-step>
              <el-step title="海珠广场"></el-step>
              <el-step title="北京路"></el-step>
              <el-step title="团一大广场"></el-step>
              <el-step title="东湖"></el-step>
              <el-step title="东山口"></el-step>
              <el-step title="区庄"></el-step>
              <el-step title="黄花岗"></el-step>
              <el-step title="沙河顶"></el-step>
              <el-step title="天平架"></el-step>
              <el-step title="燕塘"></el-step>
              <el-step title="天河客运站"></el-step>
              <el-step title="长湴"></el-step>
              <el-step title="龙洞"></el-step>
              <el-step title="高塘石"></el-step>
              <el-step title="黄陂"></el-step>
              <el-step title="金峰"></el-step>
              <el-step title="暹岗"></el-step>
              <el-step title="苏元"></el-step>
              <el-step title="萝岗"></el-step>
              <el-step title="香雪"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="七号线 Line7" name="8">
            <div>7号线全长17.41千米，起于广州南站，途径广州市番禺区，连接广州南站、广州大学城，止于大学城南站，大致呈东西走向，标志色为嫩绿色。</div>
            <el-steps :active="9" align-center>
              <el-step title="广州南站"></el-step>
              <el-step title="石壁"></el-step>
              <el-step title="谢村"></el-step>
              <el-step title="钟村"></el-step>
              <el-step title="汉溪长隆"></el-step>
              <el-step title="南村万博"></el-step>
              <el-step title="员岗"></el-step>
              <el-step title="板桥"></el-step>
              <el-step title="大学城南"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="八号线 Line8" name="9">
            <div>8号线全长14.8千米，起于凤凰新村站，途径海珠区，贯穿广州国际会议展览中心、新港路沿线，止于万胜围站，大致呈“L字形”东西走向，标志色为蓝绿色。</div>
            <el-steps :active="13" align-center>
              <el-step title="凤凰新村"></el-step>
              <el-step title="沙园"></el-step>
              <el-step title="宝岗大道"></el-step>
              <el-step title="昌岗"></el-step>
              <el-step title="晓港"></el-step>
              <el-step title="中大"></el-step>
              <el-step title="鹭江"></el-step>
              <el-step title="客村"></el-step>
              <el-step title="赤岗"></el-step>
              <el-step title="磨碟沙"></el-step>
              <el-step title="新港东"></el-step>
              <el-step title="琶洲"></el-step>
              <el-step title="万胜围"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="APM 线 Automated People Mover System" name="10">
            <div>APM线全长3.94千米，起于广州塔站，途径天河区和海珠区，贯穿珠江新城核心区域，止于林和西站，大致呈南北走向，标志色为天蓝色。</div>
            <el-steps :active="9" align-center>
              <el-step title="广州塔"></el-step>
              <el-step title="海心沙"></el-step>
              <el-step title="大剧院"></el-step>
              <el-step title="花城大道"></el-step>
              <el-step title="妇儿中心"></el-step>
              <el-step title="黄埔大道"></el-step>
              <el-step title="天河南"></el-step>
              <el-step title="体育中心南"></el-step>
              <el-step title="林和西"></el-step>
            </el-steps>
          </el-collapse-item>
          <el-collapse-item title="广佛线 Guangfo Line" name="11">
            <div>广佛线全长37.96千米，起于沥滘站，途径广州市的海珠区、荔湾区和佛山市的禅城区、南海区、顺德区，贯穿广东金融高新技术服务区、广佛都市圈，止于新城东站，大致呈“厂字”走向，标志色为黄绿色。</div>
            <el-steps :active="22" align-center>
              <el-step title="燕岗"></el-step>
              <el-step title="沙园"></el-step>
              <el-step title="沙涌"></el-step>
              <el-step title="鹤洞"></el-step>
              <el-step title="西朗"></el-step>
              <el-step title="菊树"></el-step>
              <el-step title="龙溪"></el-step>
              <el-step title="金融高新区"></el-step>
              <el-step title="千灯湖"></el-step>
              <el-step title="礌岗"></el-step>
              <el-step title="南桂路"></el-step>
              <el-step title="桂城"></el-step>
              <el-step title="朝安"></el-step>
              <el-step title="普君北路"></el-step>
              <el-step title="祖庙"></el-step>
              <el-step title="同济路"></el-step>
              <el-step title="季华园"></el-step>
              <el-step title="魁奇路"></el-step>
              <el-step title="澜石"></el-step>
              <el-step title="世纪莲"></el-step>
              <el-step title="东平"></el-step>
              <el-step title="新城东"></el-step>
            </el-steps>
          </el-collapse-item>
        </el-collapse>

  </div>

</template>

<script>
    export default {
        name: "Home",
      data(){
        return {
          showQuery: true,
          showTishi: false,
          tishi: '',
          origin: '',
          terminus: '',
          activeName: '1',
        }
      },

      methods: {
        query(){
          if (this.origin == "" || this.terminus == "") {
            alert("请输入起始站或终点站")
          } else {
            let data = {'origin': this.origin, 'terminus': this.terminus}

            this.$http.post('/api/station/selectStation', data).then((res) => {
              console.log(res)
              /*接口的传值是(-1,该起始站不存在),(0,该终点站不存在)*/
              if (res.data == -1) {
                this.tishi = "该起始站不存在"
                this.showTishi = true
              } else if (res.data == 0) {
                this.tishi = "该终点站不存在"
                this.showTishi = true
              } else {
                var key='line_name';
                this.$http.post('/api/station/queryRoute', data).then((res) => {
                  console.log(res.data)
                  if(res.data==1){
                    console.log("长度为："+res.data.length)
                    this.tishi= "该起点站直达到达不了该终点站，请点击“路线”尝试一次换乘或二次换乘";
                  }else {
                    for (var i = 0; i < res.data.length; i++) {
                      this.tishi = "直达路线为：" + res.data[i][key];
                    }
                  }
                  this.showTishi = true
                })
              }
            })
          }
        },



      }
    }
</script>

<style scoped>
  .login-wrap{
    text-align: center;
    padding-left: 20px;
    height: 100px;
  }
  .form-control {
    width: 160px;
    margin-bottom: 20px;
    margin-right: 30px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
</style>
