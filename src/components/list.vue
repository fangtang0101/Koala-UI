<template>
  <div class="list">
    <slot>
      <z-item
        v-for="(item, index) in items" :key="index"
        :item="item"
        @click="itemClick">
      </z-item>
    </slot>
  </div>
</template>

<script>
import zItem from './item.vue'
export default {
  components: {
    zItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    itemClick(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped lang="less">
.list {
  
}
</style>
