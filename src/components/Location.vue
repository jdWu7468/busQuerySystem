<template>
  <div>
    <head-top signin-up='home'>
      <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
    </head-top>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
          <h4 class="city_title">{{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  //import headTop from '../../components/header/head'
    export default {
        name: "Location",
      data(){
        return{
          guessCity: '',   //当前城市
          guessCityid: '', //当前城市id
          hotcity: [],     //热门城市列表
          groupcity: {},   //所有城市列表
        }
      },
      mounted(){
        // 获取当前城市
        cityGuess().then(res => {
          this.guessCity = res.name;
          this.guessCityid = res.id;
        })

        //获取热门城市
        hotcity().then(res => {
          this.hotcity = res;
        })

        //获取所有城市
        groupcity().then(res => {
          this.groupcity = res;
        })
      },
      components:{
        headTop
      },

      computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
          let sortobj = {};
          for (let i = 65; i <= 90; i++) {
            if (this.groupcity[String.fromCharCode(i)]) {
              sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
            }
          }
          return sortobj
        }
      },

      methods:{
        //点击图标刷新页面
        reload(){
          window.location.reload();
        }
      },
    }
</script>

<style scoped>

</style>
