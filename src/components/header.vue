<template>
  <div class="header" :style="{ background }">
    <icon-button
      v-if="!noLeft"
      class="left-button"
      :text="lText"
      :color="defaultTextColor"
      @click="backClick">
    </icon-button>
    <span :style="{color: defaultTextColor}">{{title}}</span>
    <button class="right-button" :style="{color: defaultTextColor}" v-if="rText">{{rText}}</button>
  </div>
</template>

<script>
import IconButton from "./icon-button.vue";

export default {
  components: {
    IconButton
  },
  props: ["tColor", "lText", "rText", "title", "noLeft"],
  data() {
    return {
      background: this.$headerBackground || 'red'
    }
  },
  computed: {
    defaultTextColor() {
      return this.tColor || "white";
    }
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
  background: transparent;

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
