<template>
  <div class="item" @click="$emit('click', item)">
    <slot>
      <span>{{item}}</span>
      <canvas ref="nextCanvas" :width="nextCanvasSize.width" :height="nextCanvasSize.height"
        v-if="!noArrow" />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    },
    noArrow: {}
  },
  data() {
    return {
      nextCanvasSize: {
        width: 8,
        height: 40
      }
    };
  },
  mounted() {
    if(this.$refs.nextCanvas) this.buildBackCanvas();
  },
  methods: {
    buildBackCanvas() {
      let ctx = this.$refs.nextCanvas.getContext("2d");
      ctx.strokeStyle = "#d8d8d8";
      ctx.lineWidth = 1;

      let top = 14;
      let left = 8;
      let width = this.nextCanvasSize.width;
      let height = this.nextCanvasSize.height;
      ctx.beginPath();
      ctx.moveTo(0, top);
      ctx.lineTo(width, height / 2);
      ctx.lineTo(0, height - top);
      ctx.stroke();
    }
  }
}
</script>

<style scoped lang="less">
.item {
  @d8: #d8d8d8;
  @d8line: 1px solid @d8;
  @normalColor: #333;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  border-bottom: @d8line;

  span {
    color: @normalColor;
  }
}
</style>
