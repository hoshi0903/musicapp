<template>
  <div class="topNav">
    <div class="topLeft">
      <span class="iconfont icon-danlieliebiao"></span>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn active">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
};
</script>

<style lang="less" scoped>
.topNav {
  width: 7.5rem;
  height: 1rem;
  // 弹性布局
  display: flex;
  // 均匀排列每个div子元素
  justify-content: space-between;
  // 盒子内部div 居中
  align-items: center;
  text-align: center; // 盒子内文字居中
  box-sizing: border-box; //盒子不被边距撑开
  padding: 0 0.4rem; // 左右两边内边距 40px
  color: #444;

  .iconfont {
    font-size: 0.3rem;
  }

  .topCenter {
    width: 3.5rem;
    line-height: 1rem;
    display: flex;
    // 弹性盒子的内部div盒子平均分布
    justify-content: space-between;
    align-items: center;
    // 盒子内的文字居中对齐
    text-align: center;

    .active {
      font-weight: 600;
    }
  }
}
</style>