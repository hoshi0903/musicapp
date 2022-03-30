<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <div class="swiper-container" id="musicSwiper">
        <!-- 去swiper官网找到一次显示多个slides(110) 这个模板 把源代码的 html拷贝进来-->
        <!-- https://www.swiper.com.cn/demo/110-slides-per-view.html -->
        <div class="swiper-wrapper">
          <!-- 使用 <router-link> 创建 a 标签来定义导航链接 -->
          <!-- <router-link>表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 $router.push() template渲染是 router-link会替换成一个a标签 点击就跳转到 /listview 的路由地址 -->
          <!-- 使用 query查询参数，把item.id传给路由 -->
          <router-link
            :to="{ path: '/listview', query: { id: item.id } }"
            class="swiper-slide"
            v-for="(item, index) in musicList"
            :key="index"
          >
            <!-- 使用v-bind 简写: 动态引入图片链接 -->
            <!-- 使用require()引入静态图片 -->
            <!-- <img :src="require('@/assets/musiclist-img/music1.jpg')"> -->
            <img :src="item.picUrl" />
            <div class="sliedName">
              {{ item.name }}
            </div>
            <div class="sliedCount">▷{{ changeName(item.playCount) }}</div>
          </router-link>
        </div>
        <div class="swiper-pagination"></div>
      </div>
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

// 引入获取数据的函数模块
import { getmusicList } from "@/api/index.js";

export default {
  name: "musicList",
  data() {
    return {
      musicList: [],
    };
  },
  // 获取歌单数据
  // mounted() 渲染tempalte模板
  // 在created使用axios被认为是初始化的数据
  // 在mounted使用axios被认为是修改更新后的数据（初始化数据被修改+需要重新渲染template 才会触发updated函数）
  // 使用async await 可以直接返回resolve的参数
  async mounted() {
    let res = await getmusicList();
    //  获取到真正的数据
    console.log(res.data.result);
    //  把数据存在data中
    this.musicList = res.data.result;
  },
  // data数据发生改变并且要重新在template渲染修改的data数据时才会触发updated()
  updated() {
    // 从 一次显示多个slides(110) 这个模板 获取script的代码
    // 在updated() template渲染 生命周期函数执行时，创建swiper的实例对象
    var swiper = new Swiper("#musicSwiper", {
      slidesPerView: 3.5, // 一次显示3长图
      spaceBetween: 10, // 间距 10px
    });
  },
  // methods()
  // 当  musicList.playCount 的值超过100000000 就用“亿”代替，超过100000就用万代替
  methods: {
    changeName(num) {
      let res = 0;
      if (num > 10000) {
        res = num / 10000;
        // toFixed() 把数字转换为字符串，结果的小数点后有指定位数的数字
        return res.toFixed(2) + "万";
      } else if (num > 100000000) {
        res = num / 100000000;
        return res.toFixed(2) + "亿";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0.2rem;
  box-sizing: border-box; // 盒子不会被padding破坏原有尺寸
  color: #444; // 盒子内部字体颜色
  .musicList-top {
    // 因为内部子盒子要一行内平均分布 所以父盒子使用弹性布局
    display: flex;
    justify-content: space-between;
    align-items: center; // 内部盒子水平居中
    height: 1rem;

    .title {
      font-size: 0.4rem;
      font-weight: 600;
    }
    .more {
      border: 1px solid #dcdcdc;
      padding: 0.12rem 0.15rem;
      border-radius: 0.3rem;
      font-size: 0.16rem;
      height: 0.2rem;
      line-height: 0.2rem;
    }
  }

  .mlist {
    text-decoration: none !important;
    .swiper-container {
      width: 100%;
      height: 3.2rem;
      a {
        color: #444;
        text-decoration: none !important;
        font-size: 10px;
      }
      .swiper-slide {
        width: 2rem;
        display: flex;
        flex-direction: column; // 内部盒子 垂直排列(只对弹性盒子有效)
        position: relative; // 父相子绝定位 为了给子元素 count 定位

        img {
          border-radius: 0.2rem;
          width: 100%; // 按照父盒子的宽度100%
          height: auto; // 按照图片原来的高度
        }
        .sliedName {
          height: 0.6rem;
          overflow: hidden;
          width: 100%;
          text-align: left;
          padding: 0.1rem;
        }
        .sliedCount {
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.2rem;
          color: #fff;
          background-color: rgba(255, 255, 255, 0.2);
          padding: 0 0.1rem;
          border-radius: 0.2rem;
          text-align: center;
        }
      }
    }
  }
}
</style>