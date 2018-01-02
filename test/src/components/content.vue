<template>
  <div class="content">
    <slot>ths for use this framework!!!</slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: e('calc(100% - 40px)');
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
