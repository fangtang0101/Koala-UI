<template>
  <div id="app">
    <z-page
      :mainPage="true"
      background="red"
      class="homepage"
      title="首页">
      <z-list
        :items="items"
        @itemClick="() => {}" />
    </z-page>
  </div>
</template>

<script>
import zList from './components/list.vue'
import zPage from './components/page.vue'

export default {
  data() {
    return (
      {
        items: [1, 2, 3]
      }
    )
  },
  components: {
    zList,
    zPage
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
