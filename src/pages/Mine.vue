<template>
  <div>
    <mt-cell  to="../LoginForm" is-link value="去登陆">
      <img  slot="icon" src="../../static/images/BaiyunMountain.jpg" width="28" height="28">
    </mt-cell>
    <mt-cell  to="../Map" is-link value="修改资料"></mt-cell>
    <mt-cell  to="../Map" is-link value="查看收藏"></mt-cell>
    <mt-cell  to="../Map" is-link value="问题反馈"></mt-cell>
    <mt-cell  to="../Map" is-link value="联系我们"></mt-cell>
  </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style scoped>

</style>
