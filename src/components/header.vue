<template>
    <div class="header-tab" id="app_header">
        <div class="Swipe-tab Swipe-tab_2 f-cb">
            <!-- <router-link :to='"/"'>书城</router-link>
            <router-link :to='"/"'>书架</router-link> -->
            <a href="javascript:" class="Swipe-tab__on"></a>
            <a href="javascript:"></a>
            <i ref="btborder" style="transition-duration:0s;transform:translate3d(0px,0px,0px)"></i>
        </div>
        <em class="header-user"></em>
        <em class="header-checkin"></em>
    </div>
</template>

<script>
  export default {
    mounted () {
      let w = document.getElementsByClassName('Swipe-tab__on').clientWidth
      this.$refs.btborder.style.width = w + 'px'
    }
  }
</script>

<style>
    .header-tab {
        padding: 0px 90px;
        text-align: center;
        line-height: 44px;
        background: #efeff0;
        border-bottom: 1px solid #ddd;
        position: relative;
    }
    .header-tab i {
      bottom: -1px;
    }
    .header-tab i:before {
      content: '';
      display: block;
      height: 2px;
      width: 34px;
      margin: 0 auto;
      background: #777;
    }
    .header-tab a:before {
        content: '\4e66\67b6';
        display: block;
        margin: 0 auto;
        width: 2em;
    }
    .header-tab a:first-child:before {
        content: '\4e66\57ce';
    }
    .header-user {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 44px;
      height: 44px;
      background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01j041d5DOT/boUg2EJlVetOMC.png) no-repeat center;
      background-size: 16px;
    }
    .header-checkin {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 44px;
      height: 44px;
      background: url(http://image.read.duokan.com/mfsv2/download/s010/p01O5K5DzsAZ/2ZODzjwkRQh7l3.png) no-repeat center;
      background-size: 22px;
    }
    .Swipe-tab {
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    .Swipe-tab i {
      position: absolute;
      left: 18%;
      -webkit-transition: -webkit-transform .3s ease-out;
    }
    .Swipe-tab a {
      float: left;
      text-align: center;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .Swipe-tab_2 a {
      width: 50%;
    }
    .f-cb:after{
        clear:both;
        content: '';
        display: block;
        height: 0;
        overflow:hidden;
        visibility: hidden;
    }
</style>
