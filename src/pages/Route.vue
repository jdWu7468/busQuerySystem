<template>
  <div class="login-container">
    <mt-swipe :auto="4000" style="height: 400px">
      <mt-swipe-item><img src="../../static/images/ShishiSacredHeartCathedral.jpg" class="img"/></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/WhampoaMilitaryAcademy.jpg" class="img"/></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/ChenClanAncestralHall.jpg" class="img"/></mt-swipe-item>
    </mt-swipe>
    <div class="login-wrap" v-show="showQuery">
      <p style="color:#0096FF;font-weight:bold;height: 40px;line-height: 40px; font-size:28px; ">查&nbsp;&nbsp;询</p>
      起始站：<el-input type="text" placeholder="请输入起始站" v-model="origin" class = "form-control" v-on:input ="clearArray"></el-input>
      终点站：<el-input type="text" placeholder="请输入终点站" v-model="terminus" class = "form-control"></el-input>
      <el-button v-on:click="transferQuery">一次换乘查询</el-button>
      <el-button v-on:click="moreTransfersQuery">二次换乘查询</el-button>
      <el-button v-on:click="DijkstraQuery">最短路径查询</el-button>
      <el-button v-on:click="BaiduMapQuery">按图查询</el-button>
      <p v-show="showTishi" style="color:#0096FF">{{tishi}}</p>
      <p v-show="showTishi" style="color:#0096FF">{{tishi2}}</p>
      <p v-show="showTishi" style="color:#0096FF">{{tishi3}}</p>
    </div>
    <baidu-map :scroll-wheel-zoom="true">
      <bm-view class="map" center="广州">
      </bm-view>
      <bm-transit :start="start" :end="end"  :autoviewport="true" location="广州" ></bm-transit>
    </baidu-map>
    <ul style="display: none">
      <li v-for="item in distance1" style="list-style: none">{{item.km}}</li>
      <li v-for="item in distance2" style="list-style: none">{{item.km}}</li>
      <li v-for="item in distance3" style="list-style: none">{{item.km}}</li>
      <li v-for="item in transferStation" style="list-style: none">{{item.stop_name}}</li>
      <li v-for="item in secondTransferStation" style="list-style: none">{{item.stop_name}}</li>
      <li v-for="item in line1" style="list-style: none">{{item.line_name}}</li>
      <li v-for="item in line2" style="list-style: none">{{item.line_name}}</li>
      <li v-for="item in line3" style="list-style: none">{{item.line_name}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Route",
    data(){
      return {
        showQuery: true,
        showTishi: false,
        start:'广州火车站',
        end:'区庄',
        tishi: '',
        tishi2: '',
        tishi3: '',
        origin: '',
        terminus: '',
        transferStation: [],
        secondTransferStation: [],
        line1:[],
        line2:[],
        line3:[],
        distance1:[],
        distance2:[],
        distance3:[]
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
                    this.tishi2= "该起点站直达到达不了该终点站，请点击“路线”尝试一次换乘或二次换乘";
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
        transferQuery(){
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
              }else{
                var key='stop_name';
                this.$http.post('/api/station/queryOneTransfer', data).then((res) => {
                  console.log(res.data)
                if(res.data==-1){
                  console.log("长度为："+res.data.length)
                  this.tishi2= "该起点站经过一次换乘到达不了该终点站，请尝试二次换乘";
                  }else {
                    this.tishi2 = "一次换乘的路线有：";
                    for (var i = 0; i < res.data.length; i++) {
                        this.tishi2 += this.origin + "->" + res.data[i][key] + "->" + this.terminus + "，\n";
                  }
                }
                  this.showTishi = true
                })
              }
            })
          }
        },

        moreTransfersQuery(){
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
                                } else{
                                  var key='stop_name';
                                  var vm = this;
                                  var a=0;
                                  var b=0;
                                  var c=0;
                                  var d=0;
                                  this.$http.post('/api/station/queryTwoTransfers', data).then((res) => {
                                    console.log(res.data)

                                    if (res.data == 0) {
                                      this.tishi3 = "该线路一次换乘即可到达，请尝试一次换乘查询";
                                    }else if (res.data == 1|| res.data == 2) {
                                      this.tishi3 = "该起点站经过二次换乘到达不了该终点站，建议您步行或者打的";
                                    }else {
                                      for (var i = 0; i < res.data.length; i++) {
                                        vm.$set(vm.transferStation, i, {stop_name: res.data[i][key]})//将后台返回的第一个换乘点数据的集合用页面的数组transferStation[]存起来，方便后面调用
                                      }


                                      for (var i = 0; i < vm.transferStation.length; i++) {
                                        let data2 = {'origin': this.origin, 'terminus': vm.transferStation[i].stop_name}
                                        this.$http.post('/api/station/queryRoute', data2).then((res) => {
                                          var key='line_name';
                                          if (vm.line1[b] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                            vm.$set(vm.line1, b, {line_name: res.data[0][key]})
                                            b++;
                                            console.log("b:" + b)
                                          }
                                        })
                                      }



                                      console.log("中转站点点数为:" + vm.transferStation.length)
                                      for (var i = 0; i < vm.transferStation.length; i++)//求第二个换乘点，按照第一个换乘点的顺序按序请求
                                      {
                                        console.log("数据为:" + vm.transferStation[i].stop_name)
                                        let data1 = {'origin': vm.transferStation[i].stop_name, 'terminus': this.terminus}
                                        this.$http.post('/api/station/queryOneTransfer', data1).then((res) => {
                                          console.log(res.data)
                                          console.log(res.data.length)
                                          //将后台返回的第二个换乘点（对应第一个换乘点的顺序）数据的集合用页面的数组secondTransferStation[]存起来，方便后面调用
                                          if (vm.secondTransferStation[a] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                            vm.$set(vm.secondTransferStation, a, {stop_name: res.data[0][key]})
                                            a++;
                                            console.log("a1:" + a)
                                            console.log("key:" + key)
                                          }



                                          let data3 = {'origin': vm.transferStation[0].stop_name, 'terminus': vm.secondTransferStation[0].stop_name}
                                          this.$http.post('/api/station/queryRoute', data3).then((res) => {
                                            var key='line_id';
                                            console.log("测试的结果:" + res.data[0][key])
                                          })









                                          if(a==vm.transferStation.length) {
                                            for (var i = 0; i < vm.transferStation.length; i++) {
                                              let data4 = {
                                                'origin': vm.secondTransferStation[i].stop_name,
                                                'terminus': this.terminus
                                              }
                                              this.$http.post('/api/station/queryRoute', data4).then((res) => {
                                                var key = 'line_name';
                                                if (vm.line3[d] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                                  vm.$set(vm.line3, d, {line_name: res.data[0][key]})
                                                  d++;
                                                  console.log("d1:" + d)
                                                }
                                              })
                                            }


                                            for (var i = 0; i < vm.transferStation.length; i++) {
                                              console.log("数据C的i：" + i)
                                              console.log("第一个换乘点：" + vm.transferStation[i].stop_name)
                                              console.log("第二个换乘点:" + vm.secondTransferStation[i].stop_name)
                                              let data5 = {
                                                'origin': vm.transferStation[i].stop_name,
                                                'terminus': vm.secondTransferStation[i].stop_name
                                              }
                                              this.$http.post('/api/station/queryRoute', data5).then((res) => {
                                                var key = 'line_name';
                                                if (vm.line2[c] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                                  console.log("数据C的结果:" + res.data[0][key])
                                                  vm.$set(vm.line2, c, {line_name: res.data[0][key]})
                                                  c++;
                                                  console.log("c1:" + c)
                                                }
                                                this.tishi3 = "二次换乘的路线有：";
                                                for (var i = 0; i < vm.transferStation.length; i++) {
                                                  this.tishi3 += this.origin + "->(" + vm.line1[i].line_name + ")->" + vm.transferStation[i].stop_name + "->(" + vm.line2[i].line_name + ")->" + vm.secondTransferStation[i].stop_name + "->(" + vm.line3[i].line_name + ")->" + this.terminus + "，\n";
                                                }
                                              })
                                            }

                                            this.tishi3 = "二次换乘的路线有：";
                                            for (var i = 0; i < vm.transferStation.length; i++) {
                                              this.tishi3 += this.origin + "->" + vm.line1[i].line_name + "->" + vm.transferStation[i].stop_name + "->" + vm.line2[i].line_name + "->" + vm.secondTransferStation[i].stop_name + "->" + vm.line3[i].line_name + "->" + this.terminus + "，\n";
                                            }
                                          }
                    })

                  }
                }
                  this.showTishi = true
                })
              }
            })
            console.log("1111中转站点点数为:"+vm.transferStation.length)
          }
        },

        DijkstraQuery(){
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
              } else{
                var key='stop_name';
                var vm = this;
                var a=0;
                var b=0;
                var c=0;
                var d=0;
                var e=0;
                var f=0;
                var g=0;
                var h=0;
                this.$http.post('/api/station/queryTwoTransfers', data).then((res) => {
                  console.log(res.data)

                  if (res.data == 0) {
                    var key='stop_name';
                    this.$http.post('/api/station/queryOneTransfer', data).then((res) => {
                      console.log(res.data)
                        this.tishi3= "最短的换乘路径为：";
                        for (var i = 0; i < res.data.length; i++) {
                          this.tishi3 += this.origin + "->" + res.data[i][key] + "->" + this.terminus + "，\n";
                        }
                      this.showTishi = true
                    })
                  }else if (res.data == 1|| res.data == 2) {
                    this.tishi3 = "该起点站经过二次换乘到达不了该终点站，建议您步行或者打的";
                  }else {
                    for (var i = 0; i < res.data.length; i++) {
                      var key='stop_name';
                      vm.$set(vm.transferStation, i, {stop_name: res.data[i][key]})//将后台返回的第一个换乘点数据的集合用页面的数组transferStation[]存起来，方便后面调用
                    }


                    for (var i = 0; i < vm.transferStation.length; i++) {
                      let data2 = {'origin': this.origin, 'terminus': vm.transferStation[i].stop_name}
                      this.$http.post('/api/station/queryRoute', data2).then((res) => {
                        var key='line_name';
                        if (vm.line1[b] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                          vm.$set(vm.line1, b, {line_name: res.data[0][key]})
                          b++;
                          console.log("b:" + b)
                        }
                        //求长度
                        if(b==vm.transferStation.length) {
                          for (var i = 0; i < vm.transferStation.length; i++) {
                            let data5 = {
                              'line_name': vm.line1[i].line_name,
                              'origin': this.origin,
                              'terminus': vm.transferStation[i].stop_name
                            }
                            this.$http.post('/api/station/totalDistance', data5).then((res) => {
                              var key = 'sum(km)';
                              console.log("data5返回的数据：" + res.data)
                              console.log("第一条线路长度为:" + res.data[0][key])
                              if (vm.distance1[e] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                vm.$set(vm.distance1, e, {km: res.data[0][key]})
                                e++;
                                console.log("e:" + e)
                              }
                            })
                          }
                        }
                      })
                    }





                    console.log("中转站点点数为:" + vm.transferStation.length)
                    for (var i = 0; i < vm.transferStation.length; i++)//求第二个换乘点，按照第一个换乘点的顺序按序请求
                    {
                      console.log("1111数据为:" + vm.transferStation[i].stop_name)
                      let data1 = {'origin': vm.transferStation[i].stop_name, 'terminus': this.terminus}
                      this.$http.post('/api/station/queryOneTransfer', data1).then((res) => {
                        console.log(res.data)
                        console.log(res.data.length)
                        //将后台返回的第二个换乘点（对应第一个换乘点的顺序）数据的集合用页面的数组secondTransferStation[]存起来，方便后面调用
                        if (vm.secondTransferStation[a] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                          vm.$set(vm.secondTransferStation, a, {stop_name: res.data[0][key]})
                          a++;
                          console.log("a1:" + a)
                          console.log("key:" + key)
                        }

                        if(a==vm.transferStation.length) {
                          //求第二个换乘站点到终点站的所在的线路
                          for (var i = 0; i < vm.transferStation.length; i++) {
                            let data4 = {'origin': vm.secondTransferStation[i].stop_name, 'terminus': this.terminus}
                            this.$http.post('/api/station/queryRoute', data4).then((res) => {
                              var key = 'line_name';
                              if (vm.line3[d] == undefined) {
                                vm.$set(vm.line3, d, {line_name: res.data[0][key]})
                                d++;
                                console.log("d1:" + d)
                              }
                              if(d==vm.transferStation.length) {
                                for (var i = 0; i < vm.transferStation.length; i++) {
                                  let data6 = {
                                    'line_name': vm.line3[i].line_name,
                                    'origin': vm.secondTransferStation[i].stop_name,
                                    'terminus':this.terminus
                                  }
                                  this.$http.post('/api/station/totalDistance', data6).then((res) => {
                                    var key = 'sum(km)';
                                    console.log("data5返回的数据：" + res.data)
                                    console.log("第一条线路长度为:" + res.data[0][key])
                                    if (vm.distance3[f] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                      vm.$set(vm.distance3, f, {km: res.data[0][key]})
                                      f++;
                                      console.log("f:" + f)
                                    }
                                  })
                                }
                              }
                            })
                          }


                          for (var i = 0; i < vm.transferStation.length; i++) {
                            console.log("数据C的i：" + i)
                            console.log("第一个换乘点：" + vm.transferStation[i].stop_name)
                            console.log("第二个换乘点:" + vm.secondTransferStation[i].stop_name)
                            let data5 = {
                              'origin': vm.transferStation[i].stop_name,
                              'terminus': vm.secondTransferStation[i].stop_name
                            }
                            this.$http.post('/api/station/queryRoute', data5).then((res) => {
                              var key = 'line_name';
                              if (vm.line2[c] == undefined) {
                                console.log("数据C的结果:" + res.data[0][key])
                                vm.$set(vm.line2, c, {line_name: res.data[0][key]})
                                c++;
                                console.log("c1:" + c)
                              }
                              if(c==vm.transferStation.length) {
                                for (var i = 0; i < vm.transferStation.length; i++) {
                                  let data7 = {
                                    'line_name': vm.line2[i].line_name,
                                    'origin': vm.transferStation[i].stop_name,
                                    'terminus':vm.secondTransferStation[i].stop_name
                                  }
                                  this.$http.post('/api/station/totalDistance', data7).then((res) => {
                                    var key = 'sum(km)';
                                    console.log("data5返回的数据：" + res.data)
                                    console.log("第一条线路长度为:" + res.data[0][key])
                                    if (vm.distance2[g] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                      vm.$set(vm.distance2, g, {km: res.data[0][key]})
                                      g++;
                                      console.log("g:" + g)
                                    }
                                    if(g==vm.transferStation.length) {
                                      var sum=[];
                                      for(var i=0;i<vm.transferStation.length;i++){
                                        sum[i]=Number(vm.distance1[i].km+vm.distance2[i].km+vm.distance3[i].km).toFixed(2);
                                        console.log(sum[i]);
                                      }
                                      var min=sum[0];
                                      console.log(min);
                                      for(var i=0;i<vm.transferStation.length;i++){
                                        if(Number(sum[i])<Number(min)){
                                          min=sum[i];
                                          console.log(min);
                                          h=i;
                                        }
                                      }
                                      console.log(h);
                                      this.tishi3 = "最短换乘的路线为："+this.origin + "->(" + vm.line1[h].line_name + ")->" + vm.transferStation[h].stop_name + "->(" + vm.line2[h].line_name + ")->" + vm.secondTransferStation[h].stop_name + "->(" + vm.line3[h].line_name + ")->" + this.terminus+", 路程为："+sum[h]+"千米";
                                    }
                                  })
                                }
                              }



                            })
                          }
                        }
                      })

                    }
                  }
                  this.showTishi = true
                })
              }
            })
            console.log("1111中转站点点数为:"+vm.transferStation.length)
          }
        },

        clearArray(){
          /*
          var vm = this;
          for (var i=0;i<vm.line1.length;i++){
            vm.$set(vm.line1, i, {})
          }
          for (var i=0;i<vm.line2.length;i++){
            vm.$set(vm.line2, i, {})
          }for (var i=0;i<vm.line3.length;i++){
            vm.$set(vm.line3, i, {})
          }

          //修改
                          for (var i = 0; i < vm.transferStation.length; i++) {
                            let data4 = {'origin': vm.secondTransferStation[i].stop_name, 'terminus': this.terminus}
                            this.$http.post('/api/station/queryRoute', data4).then((res) => {
                              var key = 'line_name';
                              if (vm.line3[d] == undefined) {//异步获取的数据，得先判断当前插入的数据是否有值，如果有，往下一位置插入值
                                vm.$set(vm.line3, d, {line_name: res.data[0][key]})
                                d++;
                                console.log("d1:" + d)
                              }
                            })
                          }

          */
          this.transferStation=[];
          this.secondTransferStation=[];
          this.line1=[];
          this.line2=[];
          this.line3=[];
          this.distance1=[];
          this.distance2=[];
          this.distance3=[];
          this.tishi3='';
        },

        BaiduMapQuery(){
          this.start=this.origin;
          this.end=this.terminus;
        }

      },

      watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        origin: function () {
          //location.reload();
        },
        terminus: function () {
          //location.reload();
        }
      }

    }
</script>

<style scoped>
  .login-wrap{
    text-align: center;
    padding-left: 20px;
    height: 300px;
  }
  .form-control {
    width: 160px;
    margin-bottom: 20px;
    margin-right: 30px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .map {
    height: 600px;
    margin: auto;
  }
</style>
