<template>
  <div>
    <v-header></v-header>
    <v-search></v-search>
  </div>
</template>

<script>
  import header from '../components/header.vue'
  import search from '../components/search.vue'

  export default {
    data () {
      return {}
    },
    computed: {},
    mounted () {},
    methods: {},
    components: {
      'v-header': header,
      'v-search': search
    }
  }
</script>

<style lang="css">
</style>
