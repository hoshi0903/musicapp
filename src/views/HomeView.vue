<template>
  <div class="home">
    <!-- 使用子组件 -->
    <top-nav></top-nav>
    <!-- 使用swiper-com 子组件 -->
    <swiper-com></swiper-com>
    <!-- 使用 iconList 子组件 -->
    <icon-list></icon-list>
    <!-- 使用 musicList 子组件 -->
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
// 导入子组件
import topNav from "@/components/topNav.vue";
// 导入 swiper-com 子组件
import SwiperCom from "@/components/swiper-com.vue";
// 导入 图标 子组件
import iconList from "@/components/iconList.vue";
// 导入 发现好歌单 子组件
import MusicList from '../components/musicList.vue';

export default {
  name: "HomeView",
  data() {
    return {};
  },
  // 注册子组件
  // 注册swiper相关组件
  components: {
    topNav,
    SwiperCom,
    iconList,
    MusicList,
  },
};
</script>

<style lang="less" scoped>
.swiper {
  height: 750px;
  height: 4rem;
  background: #eee;
}
</style>