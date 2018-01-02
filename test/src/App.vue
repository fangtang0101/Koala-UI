<template>
  <div id="app">
    <z-header
      :noLeft="true"
      background="red"
      title="首页" />
    <z-content>
      <z-list :items="[1,2,3,4]" />
    </z-content>
  </div>
</template>

<script>
import zHeader from './components/header.vue'
import zContent from './components/content.vue'
import zList from './components/list.vue'

export default {
  data() {
    return (
      {

      }
    )
  },
  components: {
    zHeader,
    zContent,
    zList
  }
}
</script>


<style lang='less'>
#app {
  height: 100%;
  font-size: 14px;

  button, input {
    border: 0;
    outline: none;
  }
}
</style>
