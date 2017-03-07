<template>
  <div>
    <div class="container-warp">
      <v-header></v-header>
      <div class="">
        <v-search></v-search>
        <v-banner></v-banner>
        <ul class="top_btn">
          <li>
            <router-link to="male">
              <img class="top_icon" src="../assets/male.png" alt="">
              <p class="top_desc">男生</p>
            </router-link>
          </li>
          <li>
            <router-link to="female">
              <img class="top_icon" src="../assets/female.png" alt="">
              <p class="top_desc">女生</p>
            </router-link>
          </li>
          <li>
            <router-link to="category">
              <img class="top_icon" src="../assets/category.png" alt="">
              <p class="top_desc">分类</p>
            </router-link>
          </li>
          <li>
            <router-link to="rank">
              <img class="top_icon" src="../assets/rank.png" alt="">
              <p class="top_desc">排行</p>
            </router-link>
          </li>
        </ul>
        <v-hot></v-hot>
        <v-recommend></v-recommend>
        <v-category></v-category>
        <v-free></v-free>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../components/header.vue'
  import search from '../components/search.vue'
  import banner from '../components/banner.vue'
  import recommend from '../components/recommend.vue'
  import hot from '../components/hot.vue'
  import category from '../components/category.vue'
  import free from '../components/free.vue'

  export default {
    data () {
      return {}
    },
    computed: {},
    mounted () {},
    methods: {},
    components: {
      'v-header': header,
      'v-search': search,
      'v-banner': banner,
      'v-recommend': recommend,
      'v-hot': hot,
      'v-category': category,
      'v-free': free
    }
  }
</script>

<style>
  .container-warp {
    height: 100%;
    position: relative;
  }
  .container-scroll {
    position: absolute;
    top: 45px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow-y: scroll;
  }
  .top_btn {
    margin: 14px 0 4px;
    display: -webkit-box;
    width: 100%;
  }
  .top_btn li {
    line-height: 2.4;
    font-size: 12px;
    text-align: center;
    -webkit-box-flex: 1;
  }
  .top_icon {
    display: block;
    margin: 0 auto;
    height: 22px;
    width: 22px;
  }
</style>
