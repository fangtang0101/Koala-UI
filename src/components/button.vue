<template>
  <button class="button" @click="$emit('click')">
    <slot name="left"></slot>
    <span><slot></slot></span>
    <slot name="right"></slot>
  </button>
</template>

<script>
export default {
  props: ["text", "color"],
  data() {
    return {
      
    };
  },
  mounted() {

  },
  methods: {
    
  }
};
</script>

<style scoped lang="less">
.button {
  border: 0;
  outline: none;
  border-radius: 4px;

  .text {

  }
}
</style>
