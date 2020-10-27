<template>
  <div>
    <label>站点：<input v-model="keyword"></label>
    <baidu-map zoom="12.8" :scroll-wheel-zoom="true">
      <bm-view class="map"></bm-view>
      <bm-local-search :keyword="keyword" :autoViewport="true" :location="广州" zoom="12.8" style="display: none"  :selectFirstResult="true" :panel="false"></bm-local-search>
    </baidu-map>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        keyword: '广州火车站',
      }
    }
  }
</script>

<style scoped>
  .map {
    height: 600px;
    margin: auto;
  }
</style>
