<template>
  <button class="back" @click="$emit('click')">
    <slot name="left"><canvas ref="backCanvas" :width="backCanvasSize.width" :height="backCanvasSize.height" /></slot>
    <span class="l-text" :style="{color: color}"><slot></slot></span>
    <slot name="right"></slot>
  </button>
</template>

<script>
export default {
  props: ["text", "color"],
  data() {
    return {
      backCanvasSize: {
        width: 10,
        height: 40
      }
    };
  },
  mounted() {
    if(this.$refs.backCanvas) this.buildBackCanvas();
  },
  methods: {
    buildBackCanvas() {
      let ctx = this.$refs.backCanvas.getContext("2d");
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;

      let top = 12;
      let left = 10;
      let width = this.backCanvasSize.width;
      let height = this.backCanvasSize.height;
      ctx.beginPath();
      ctx.moveTo(width, top);
      ctx.lineTo(0, height / 2);
      ctx.lineTo(width, height - top);
      ctx.stroke();
    }
  }
};
</script>

<style scoped lang="less">
.back {
  display: flex;
  align-items: center;
  border: 0;
  outline: none;

  .l-text {
    color: white;
    margin-left: 4px;
  }
}
</style>
