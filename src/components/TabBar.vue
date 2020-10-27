<template>
  <div class="footer">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页" >
        <img :src="TabBar_img1" slot="icon">首页
      </mt-tab-item>
      <mt-tab-item id="路线">      // 属性to="/brand"可跳转到另一个页面
        <img :src="TabBar_img2" slot="icon">路线
      </mt-tab-item>
      <mt-tab-item id="景点" >
        <img :src="TabBar_img3" slot="icon">景点
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img :src="TabBar_img4" slot="icon">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    export default {
        name: "TabBar",
        data () {
          return {
            selected: "首页",
            TabBar_img1: "static/icon/home_selected.png",
            TabBar_img2: "static/icon/route.png",
            TabBar_img3: "static/icon/scenery.png",
            TabBar_img4: "static/icon/mine.png",
          }
        },
        computed: {
          otherSelect () {
            return this.$store.state.selectTab
          }
        },
        watch: {
          // 监听 是否从其他的页面跳转过来的数据
          "otherSelect" () {
            this.selected = this.otherSelect
          },
          // this.$.router.push({name: ''})
          // 固定的书写 ""双引号里面是要监听的数据 handler是处理数据改变的函数 deep是否深度监听
          "selected": {
            handler (val,oldval) { //多看文档 handler
              if (this.selected == "首页") {
                this.$router.push('/')
                this.TabBar_img1="static/icon/home_selected.png"
              } else {
                this.TabBar_img1="static/icon/home.png"
              }
              if (this.selected == "路线") {
                this.$router.push('/route')
                this.TabBar_img2="static/icon/route_selected.png"
              } else {
                this.TabBar_img2="static/icon/route.png"
              }
              if (this.selected == "景点") {
                this.$router.push('/scenery')
                this.TabBar_img3="static/icon/scenery_selected.png"
              } else {
                this.TabBar_img3="static/icon/scenery.png"
              }
              if (this.selected == "我的") {
                this.$router.push('/myself'),
                this.TabBar_img4="static/icon/mine_selected.png"
              } else {
                this.TabBar_img4="static/icon/mine.png"
              }
            }
            // deep:true//对象内部的属性监听，也叫深度监听
          }
        },
    }
</script>

<style scoped>

</style>
