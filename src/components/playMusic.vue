<template>
  <div class="playMusic">
    <!-- 背景 -->
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"
    ></div>
    <!-- 头部 -->
    <div class="playTop">
      <!-- 鼠标点击后 使用$emit() 向外部触发一个自定义事件back 子->父传值this.$emit() --> 
      <!-- 鼠标点击后，父组件中把v-show的show取反，控制子组件开关 -->
      <div class="back" @click="$emit('back')">
        <span class="iconfont jiantou icon-zuojiantou"></span>
      </div>
 
      <!-- 中间部分 -->
      <div class="center">
        <div class="title">
          <span>{{playDetail.al.name}}</span>
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="share">
        <!-- 分享图标 -->
        <span class="iconfont icon-fenxiang"></span>
      </div>
    </div>

    <!-- 内容 -->
    <!-- 留声机画面 -->
    <div class="playContent">
      <!-- 留声机指针 -->
      <img class="needle active" src="@/assets/cover-needle-2.png">
      <!-- 留声机本体 -->
      <img class="disc" src="@/assets/cover-1.png">
      <!-- 专辑封面 -->
      <!-- 使用v-bind动态绑定图片链接 -->
      <img :src="playDetail.al.picUrl" class="playImg">
    </div>
    <div class="playLyric"></div>
    <div class="progress"></div>
    <div class="playFooter">
      <span class="iconfont icon-24gl-repeat2"></span>
      <span class="iconfont icon-bofang-shangyige"></span>
      <span class="iconfont icon-bofang"></span>
      <span class="iconfont icon-bofang-xiayige"></span>
      <span class="iconfont icon-24gl-repeat2"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "playMusic",
  // 使用props接收父组件传递的数据
  props: ["playDetail"],
};
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed; // 固定定位
  top: 0;
  left: 0;
  width: 100vw; // 占视口宽度100%
  height: 100vh; // 占视口高度100%
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 0.4rem;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw; // 占视口宽度100%
    height: 100vh; // 占视口高度100%
    background-size: auto 100%; // 占父盒子100%
    filter: blur(50px); // 模糊
    z-index: -1; // 最底层 不挡住其他元素
    background-color: #fff;
    background-position: center;
    box-sizing: border-box;
  }
  .playTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    width: 7.5rem;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    box-sizing: border-box;
    padding: 0 0.4rem;
      .iconfont {
      font-size: 0.5rem;
      margin-right: 0.1rem;
      color: rgba(255, 255, 255, 0.8);
    }
    .center {
        flex:1;
        width: 5rem;
      .title {
        span {
            font-size: 0.32rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 400;
        }
      }
    }
  }
  .playContent {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    left: 0;
    top: 1rem;
    .needle {
      width: 2.6rem;
      height: auto;
      position: absolute;
      left: 50%;
      margin-left:-0.7rem;
      top: 0;
      z-index: 9999;
      transform-origin: 0.3rem 0;
      transform: rotate(-20deg); // 旋转-20°
      transition: 1s all; // 动画效果在1秒钟执行完毕
    }
    // 播放状态下指针会移动30度
    .needle .active {
      transform-origin: 0.3rem 0;
       transform: rotate(0deg); // 从右往左顺时针旋转0°
       transition: 1s all; 
    } 
    .disc {
      width: 6rem;
      height: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left:-3rem;
      margin-top: -2.1rem;
      z-index: 2;
    }
    .playImg {
      width: 4rem;
      // height: 4rem;
      border-radius: 2rem;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left:-2rem;
      margin-top: -1.2rem;
      z-index: 1;
    }
  }
  .playFooter {
    width: 7.5rem;
    height: 1.5rem;
    // 绝对定位
    position: absolute;
    left: 0;
    bottom: 0;
    // 弹性布局 内部盒子一行显示
    display: flex;
    justify-content: space-between; //子盒子平均分布
    align-items: center; //子盒子侧轴居中
    padding: 0 0.4rem;//左右内边距40px
    .iconfont {
      font-size: 0.4rem;
      color:#fff;
    }
  }
}
</style>