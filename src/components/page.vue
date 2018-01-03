<template>
  <div class="page">
    <z-header
      :noLeft="mainPage"
      :background="background"
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
    background: {
      type: String,
      required: true,
      default: 'red'
    }
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
  background: white;
}
</style>
