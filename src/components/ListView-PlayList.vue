<template>
  <div class="playlist">
    <!-- 头部 -->
    <div class="playlist-top">
      <div class="left">
        <span class="iconfont icon-bofang"></span>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="right-btn">+收藏({{ playlist.subscribedCount }})</div>
    </div>
    <!-- 播放列表 -->
    <!-- setPlayIndex(index) 点击后就把当前item的索引号传给vuex 就会获取这首歌的id到audio中播放 -->
    <div class="list">
      <div
        class="playItem"
        v-for="(item, index) in playlist.tracks"
        :key="index"
        @click="setPlayIndex(index)"
      >
        <div class="playItem-left">
          <!-- 编号 -->
          <div class="index">{{ index + 1 }}</div>
          <div class="content">
            <!-- 歌曲名字 -->
            <div class="title">{{ item.name }}</div>
            <!-- 歌曲作者 -->
            <div class="author">{{ item.ar[0].name }}-{{ item.al.name }}</div>
          </div>
        </div>
        <div class="playItem-right">
          <!-- 播放按钮 -->
          <span class="bofang iconfont icon-bofang2"></span>
          <!-- 列表 三个点 -->
          <span class="iconfont icon-diandian"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入vuex的函数
import { mapState, mapMutations } from "vuex";
export default {
  name: "ListView-PlayList",
  // 使用props 接收 父组件传递的 playlist 数据
  props: ["playlist"],
  methods: {
    // 使用 mapMutation 函数，把mutations的方法映射到组件的methods，就可以在组件中调用这些方法
    // ...  es6的扩展运算符
    ...mapMutations(["setPlayIndex"]),
  },
};
</script>

<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0 0.18rem; // 左右内边距40px
  box-sizing: border-box; // 盒子尺寸不被边距破坏
  background-color: #fff;
  border-top-left-radius: 0.5rem; // 左上角圆角
  border-top-right-radius: 0.5rem; // 右上角圆角
  .playlist-top {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-items: center; // 弹性布局内部盒子侧轴居中
    .left {
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 0.4rem;
        color: #444;
        margin-right: 0.15rem;
      }
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center; // 内部盒子侧轴居中
        .title {
          font-size: 0.3rem;
          font-weight: 600;
          color: #444;
        }
        .num {
          font-size: 0.26rem;
          color: #7d7d7d;
        }
      }
    }
    .right-btn {
      background-color: #e33b30;
      padding: 0.15rem 0.3rem;
      color: #fff;
      border-radius: 0.5rem;
      font-weight: 200;
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      .playItem-left {
        display: flex; // 弹性布局 子元素一行内显示
        justify-content: space-between; // 子元素平均分布
        align-items: center; // 子元素侧轴居中
        // 编号 id
        .index {
          padding: 0.3rem;
          color: #ccc;
        }
        .content {
          // 歌曲名字
          .title {
            font-size: 0.3rem;
            color: #444;
          }
          .author {
            color: #898989;
            font-size: 0.1rem;
          }
        }
      }
      .playItem-right {
        padding: 0.4rem;
        .iconfont {
          color: #898989;
        }
        .bofang {
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>