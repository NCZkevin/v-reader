<template>
  <div>
    <div class="channel-group__header">
  		<h2 class="channel-group__title channel-group__title_left">限时免费</h2>
  	</div>
  	<ul class="book-table">
  		<li v-for="item in bookList">
			  <router-link :to='"/detail/"+item.url'>
  				<div class="u-book">
  					<div class="book-cover">
  						<img alt="item.title" :src="item.data.cover">
  						<div class="u-tagRT -freefiction"></div>
  					</div>
  					<div class="info">
  						<h3 class="title">{{item.data.title}}</h3>
  					</div>
  				</div>
	      </router-link>
  		</li>
  	</ul>
  	<a class="channel-group__footer">更多限免佳作&gt;&gt;</a>
  </div>
</template>

<script>
export default {
  props: ['bookList'],
  data () {
    return {}
  }
}
</script>

<style scoped>
@import '../common/styles/index.css';
</style>
