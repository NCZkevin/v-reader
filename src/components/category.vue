<template>
  <div class="channel-h5">
    <div class="channel-h5_header">
      <p class="channel-h5_title" v-if="liTitle">
        {{liTitle}}最爱
      </p>
    </div>
    <div>
      <ul class="list-h5">
        <li v-for="item in list">
        	<router-link :to='"/detail/"+item.url'>
            <div class="book-h5">
              <div class="book-h5_cover">
                <img :src="item.cover" alt="item.title">
                <p class="book-h5_finish">完结</p>
              </div>
              <div class="book-h5_info">
                <p class="book-h5_title">{{item.title}}</p>
                <p class="book-h5_author">{{item.authors}}</p>
                <p class="book-h5_summary">{{item.summary}}</p>
                <div class="book-h5_wrap">
                  <div class="book-h5_tag" v-for="(tag,index) in item.tags" v-if="index < 3">
                    {{tag}}
                  </div>
                </div>
              </div>
            </div>
        	</router-link>
        </li>
      </ul>
    </div>
    <div class="channel-h5__footer_next">
      <a href="javascript:">换一换</a>
      <router-link to="male">{{liTitle}}频道</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['liTitle', 'list'],
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  @import '../common/styles/index.css';
  .channel-h5 {
    background: #fff;
    border-bottom: 10px solid #f5f5f5;
    position: relative;
  }
  .channel-h5_header {
    padding: 15px 13px 14px 13px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
  }
  .channel-h5_title {
    position: relative;
    font: bold 13px/13px a;
    color: rgba(0,0,0,0.9);
  }
  .channel-h5_title > i {
    position: absolute;
    margin: -1px 0 0 5px;
    padding: 3px 5px 0 5px;
    font: 9px/9px a;
    color: #fff;
    background-color: #53ac7d;
    border-radius: 1px;
  }
  .tab {
    position: absolute;
    right: 13px;
    top: 9px;
  }
  .tab a {
    position: relative;
    padding: 16px 7px;
    font: 12px/12px a;
    color: #999;
  }
  .tab a:after {
    content: '';
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 0;
    width: 1px;
    border-right: solid 1px #ccc;
  }
  .tab a:last-child {
    padding-right: 0px;
  }
  .tab a:last-child:after {
    display: none;
  }
  .tab_on {
    color: #528ae8 !important;
  }
  .list-h5 {
    padding: 0 13px;
  }
  .list-h5 li {
    padding: 17px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .list-h5 li:last-child{
    border: none;
  }
  .book-h5 {
    overflow: hidden;
  }
  .book-h5_cover {
    float: left;
    position: relative;
    width: 85px;
    height: 113px;
    background-color: #eeece9;
    border: 1px solid #f0f0f0;
    border-radius: 1px;
    overflow: hidden;
  }
  .book-h5 img {
    width: 100%;
    height: 100%;
    border-radius: 1px;
  }
  .book-h5_finish {
    position: absolute;
    bottom: 0px;
    width: 100%;
    color: #fff;
    padding: 25px 7px 6px;
    font: 10px/10px a;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.3));
  }
  .book-h5 .book-h5_info {
    margin-left: 100px;
    padding-top: 6px;
    background: #fff;
  }
  .book-h5_title {
    margin-bottom: 4px;
    font: 16px/17px a;
    color: rgba(0,0,0,0.9);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .book-h5_author {
      margin-top: 8px;
      font: 12px/12px a;
      color: rgba(0, 0, 0, 0.7);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .book-h5_summary {
      display: -webkit-box;
      margin: 8px 0 0;
      height: 2.8em;
      font: 12px/1.4em a;
      color: rgba(0, 0, 0, 0.6);
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  }

  .book-h5_latest {
      margin: 12px 200px 0 0;
      font: 12px/12px a;
      color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .book-h5_wrap {
      margin-top: 10px;
      padding-top: 3px;
      overflow: hidden;
  }
  .book-h5_tag {
      float: left;
      margin: -3px 7px 0 0;
      padding: 3px 6px 2px;
      max-width: 6em;
      font: 10px/11px a;
      color: #53ac7d;
      border-radius: 3px;
      border: 1px solid #53ac7d;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .book-h5_tag:last-child {
      margin-right: 0;
  }
  .book-h5_no-img_order {
      float: left;
      margin-top: 1px;
      font: 13px/13px a;
      color: rgba(237, 83, 15, 0.9);
  }
  .book-h5_no-img_info {
      margin-left: 27px;
  }
  .book-h5_no-img_title {
      position: relative;
      font: 15px/15px a;
      color: rgba(0, 0, 0, 0.9);
      background: #fff;
  }
</style>
