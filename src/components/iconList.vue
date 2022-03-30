<template>
  <div class="iconList">
    <div class="iconItem" v-for="(item, index) in iconList" :key="index">
      <div class="iconbg">
        <img :src="item.iconUrl" />
      </div>

      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
// 
<script>
// 引入获取轮播图api的函数模块
import { getIcon } from "@/api/index.js";

export default {
  name: "iconList",
  data() {
    return {
      iconList: [],
    };
  },
  // 在mounted生命周期函数 使用axios获取到icon等数据
  async mounted() {
    // axios请求回来的数据还包括其他信息，使用对象解构获取真正的数据data
    let { data } = await getIcon();
    // data对象里面的data数组才是我们需要的数据 data.data
    // conUrl:是icon ， name：是内容
    // 把conUrl存在data的icons中
    console.log(data.data);
    this.iconList = data.data;
  },
};
</script>

<style lang="less" scoped>
.iconList {
  width: 7.5rem;
  display: flex; // 盒子弹性布局
  justify-content: space-between; // 内部的子元素都平均分布在同一行上
  padding: 0.4rem;
  box-sizing:border-box; // 盒子不会被padding破坏原有尺寸
  color: #444;
  overflow: hidden;// 溢出隐藏
  .iconItem {
    display: flex;
    flex-direction: column; // 子元素垂直排列
    text-align: center;

    // 字体图标样式设置
    img {
      width: 100%;
    }
    // icon的背景设置
    .iconbg {
      width: 0.8rem;
      height: 0.8rem;
      background: #ea4335;
      margin: 0 0.3rem 0.1rem 0.3rem;
      border-radius: 24px;
    }
  }
}
</style>