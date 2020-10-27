<template>
  <div>
    <mt-header fixed  title="线路地图" >
      <router-link to="../Home" slot="left" >
        <mt-button icon="back" v-on:click="reloadPage">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="selectbar">
      <!-- 地铁线路选择 -->
      <div><p>按线路查看地图：</p><select id="lineSelect" name="sel"></select></div>

      <!-- 搜索地铁名 -->
      <div class="searchbar">
        <p>按站点查看地图：</p><input type="text" placeholder="请输入站名" id="search">
        <input type="button" value="搜索" class="btn" disabled="disabled">
        <span id="place"></span>
      </div>
    </div>
    <div class="selectbar">
        <!-- 细节图 -->
        <canvas id="canvas" width="850px" height="880px">你的浏览器不支持canvas，请更换浏览器后再试。</canvas>
        <!-- 全览图 -->
        <canvas id="canvastwo" width="850px" height="880px">你的浏览器不支持canvas，请更换浏览器后再试。</canvas>
    </div>
    <div class="clear"></div>
    <remote-script src="./static/js/mess.js"></remote-script>
    <remote-script src="./static/js/canvas.js"></remote-script>
    <mt-cell title="觉得我画的太丑？想看高清？" to="https://map.baidu.com/?subwayShareId=guangzhou,257" is-link value="查看高清地图"></mt-cell>
  </div>
</template>


<script>
    export default {
        name: "Map",
        methods:{
          reloadPage(){
            location.reload();
          }
        }
    }
</script>

<style scoped>
  *{ margin: 0;padding: 0; }
  #canvas, #canvastwo{ border: 1px solid red;float:left; }
  .clear{ clear: both; }
  #lineSelect{ float: left; width: 100px; }
  .selectbar{ float: left; margin: auto;width: 2000px;}
  .searchbar{ float: left;margin-left: 40px;height: 30px;line-height: 30px; }
  .selectbar p{float: left}
  .searchbar p{ float: left }
  .searchbar #search{ height: 28px; width: 200px; float: left}
  .searchbar .btn{ width: 100px;height: 30px;margin-left: 5px; float: left}
</style>
