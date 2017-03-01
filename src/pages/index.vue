<template>
  <div>
    <v-header></v-header>
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
  </div>
</template>

<script>
  import header from '../components/header.vue'
  import search from '../components/search.vue'
  import banner from '../components/banner.vue'

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
      'v-banner': banner
    }
  }
</script>

<style lang="css">
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
