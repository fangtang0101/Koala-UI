<template>
  <div class="header" :style="{ background: showBackground }">
    <back-button
      v-if="!noLeft"
      class="left-button"
      :color="defaultTextColor"
      @click="backClick">
      lText
    </back-button>
    <span :style="{color: defaultTextColor}"><slot></slot></span>
    <button class="right-button" :style="{color: defaultTextColor}" v-if="rText">{{rText}}</button>
  </div>
</template>

<script>
import BackButton from "./back-button.vue";

export default {
  components: {
    BackButton
  },
  props: ["tColor", "lText", "rText", "title", "noLeft", 'background'],
  data() {
    return {

    }
  },
  computed: {
    defaultTextColor() {
      return this.tColor || "white";
    },
    showBackground() {
      return this.background || this.$headerBackground || 'transparent'
    },
  },
  methods: {
    backClick() {
      this.$emit("backClick");
    }
  }
};
</script>

<style scoped lang="less">
.header {
  position: relative;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 100%;

  button {
    position: absolute;
    height: 40px;
    margin: 0;
    padding: 0 10px;
    background: transparent;
  }

  .left-button {
    left: 0;
  }

  .right-button {
    right: 0;
  }
}
</style>
