<template>
  <div class="page">
    <z-header
      :noLeft="mainPage"
      :title="title"
      @backClick="backClick" />
    <z-content>
      <slot></slot>
    </z-content>
  </div>
</template>

<script>
import zHeader from './header.vue'
import zContent from './content.vue'

export default {
  components: {
    zHeader,
    zContent
  },
  props: {
    title: String,
    mainPage: Boolean,
  },
  data() {
    return {

    }
  },
  methods: {
    backClick() {
      if(this.$router) this.$router.go(-1)
      else alert('无路由操作')
    }
  }
}
</script>

<style scoped lang="less">
.page {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
}
</style>
