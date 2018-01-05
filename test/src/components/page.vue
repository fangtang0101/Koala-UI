<template>
  <div class="page">
    <z-header
      :noLeft="mainPage"
      :background="background"
      @backClick="backClick">
      {{title}}
    </z-header>
    <z-content>
      <slot></slot>
    </z-content>
  </div>
</template>

<script>
import zHeader from './header.vue'
import zContent from './content.vue'
import zButton from './button.vue'

export default {
  components: {
    zHeader,
    zContent,
    zButton,
  },
  props: {
    title: String,
    mainPage: Boolean,
    background: String,
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
