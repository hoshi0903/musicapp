<template>
  <router-view />
  <!-- 使用子组件 playController -->
  <playController></playController>
</template>

<script>
// 引入播放器子组件 playController
import playController from "@/components/playController.vue";
export default {
  name: "App",
  // 注册子组件
  components: {
    playController,
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  // 元素的总高度和宽度包含内边距和边框(padding 与 border)
  box-sizing: border-box;
}
</style>