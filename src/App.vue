<template>
  <div id="app">
    <div class="page-tabbar">
      <div class="page-wrap">
        <router-view></router-view>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
          <img slot="icon" src="./assets/logo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="路线">
          <img slot="icon" src="./assets/logo.png">
          路线
        </mt-tab-item>
        <mt-tab-item id="景点">
          <img slot="icon" src="./assets/logo.png">
          景点
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="./assets/logo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //页面刷新取数据
      selected: sessionStorage.getItem('selected')? JSON.parse(sessionStorage.getItem('selected')):'首页',
      Home: '首页',
      Route: '路线',
      Scenery:'景点',
      Mine: '我的',
    }
  },

  watch: {
    selected(val, oldVal) {
      //一旦标签栏变化，把selected的值存到sessionStorage，保存当前值
      sessionStorage.setItem('selected', JSON.stringify(val))
      if (val === this.Home) {
        //路由跳转到 首页
        this.$router.replace('/Home')
      } else if (val === this.Route) {
        //路由跳转到 路线
        this.$router.replace('/Route')
      } else if (val === this.Scenery) {
        //路由跳转到 景点
        this.$router.replace('/Scenery')
      } else if (val === this.Mine) {
        //路由跳转到 我的
        this.$router.replace('/Mine')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
