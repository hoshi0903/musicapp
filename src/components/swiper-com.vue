<template>
  <!-- 使用swiper -->
  <div id="swipercom">
      <div class="swiper-container" id="bannerSwiper">
        <div class="swiper-wrapper">
          <!-- 使用v-for 列表渲染出imgs -->
          <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
            <!-- 使用动态数据绑定v-bind添加图片路径 -->
            <img :src="item.pic" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
  </div>

</template>

<script>
// 引入swiper组件
import Swiper from "swiper";
// 引入swiper样式
// 不同版本 文件名路径都会不一样
// import style (<= Swiper 5.x)
import "swiper/dist/css/swiper.css";

// 引入获取轮播图api的函数模块
import { getBanner } from "@/api/index.js";

export default {
  name: "swiper-com",
  data() {
    return {
      // vue在数据data里面引入图片语法是require("")
      // 这里的图片是生命周期 执行created函数 创建的，等到mounted函数 渲染template时，会重新调用api的
      imgs: [
        { pic: require("@/assets/img/1.jpg") },
        { pic: require("@/assets/img/2.png") },
        { pic: require("@/assets/img/3.jpg") },
        { pic: require("@/assets/img/4.jpg") },
      ],
    };
  },
  // 注册swiper相关组件
  components: {
    Swiper,
  },
  // await 要搭配 async一起使用
  async mounted() {
    // 使用axios封装好的方法 获取banner api的数据
    // 异步操作 使用await 会变成同步操作，获取数据成功后，直接调用then，返回resolve中的参数
    let res = await getBanner(1);
    // 把banners里面的数据赋值给this.imgs
    this.imgs = res.data.banners;
  },
  updated(){
      var mySwiper = new Swiper("#bannerSwiper", {
      direction: "horizontal", // 横向左右切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};
</script>


<style lang="less" scoped>
// 父盒子的宽高 圆角 左外边距 设置
#swipercom {
  width: 7.5rem;
  .swiper-container {
  width: 7.1rem;
  height: 2.75rem;
  border-radius: 0.2rem;

  // 父盒子多宽 图片就多宽
  img {
    width: 100%;
  }
}
}


// 因为是修改组件的样式 所以要使用:deep() vue3用法
:deep(.swiper-pagination-bullet-active) {
  background: #ea4335;
}
</style>
