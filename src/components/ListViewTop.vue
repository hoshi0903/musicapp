<template>
  <div class="listviewtop">
    <img :src="playlist.coverImgUrl" alt="" class="bg" />
    <!-- 头部nav start -->
    <div class="ListViewTopNav">
      <div class="back">
        <!-- @click=$router.go(-1) 点击时跳转到上一页 -->
        <span class="iconfont jiantou icon-zuojiantou" @click=$router.go(-1)></span>
        <span class="title">歌单</span>
      </div>
      <div class="right">
        <span class="iconfont search icon-sousuo"></span>
        <span class="iconfont icon-diandian"></span>
      </div>
    </div>
    <!-- 头部nav end -->
    <!-- 头部 content start -->
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" />
        <span>▷{{ changeValue(playlist.playCount) }}</span>
      </div>
      <div class="contentRight">
        <h3>{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" class="header" />
          <span>{{ playlist.creator.nickname }} ></span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
    </div>
    <!-- 头部 content end -->

    <!-- 4个icon图标 start-->
    <div class="iconList">
      <div class="iconItem">
        <span class="iconfont icon-duihuakuang-4"></span>
        <span class="icontitle">{{playlist.commentCount}}</span>
      </div>
      <div class="iconItem">
        <span class="iconfont icon-fenxiang"></span>
        <span class="icontitle">{{playlist.shareCount}}</span>
      </div>
            <div class="iconItem">
        <span class="iconfont icon-xiazai"></span>
        <span class="icontitle">下载</span>
      </div>
        <div class="iconItem">
        <span class="iconfont icon-xuanze-duoxuan-tianchong"></span>
        <span class="icontitle">多选</span>
      </div>
    </div>
    <!-- 4个icon图标 end -->
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "listviewtop",
  // 接收父组件传递过来的playlist数据
  props: ["playlist"],
  setup() {
    const methods = {
      changeValue(num) {
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
    };
    return {
      ...methods,
    };
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.listviewtop {
  // width: 7.5rem;
  padding: 0 0.3rem;
  height: 6rem;
  box-sizing: border-box; // 盒子不被边距撑开
  .bg {
    // 固定定位的盒子会浮动起来，不再占据以前的位置，其他元素自动跳上来
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto; // 以图片高度为准
    z-index: -1; // 最底层（避免遮挡其他内容）
    filter: blur(50px);
  }
}
.ListViewTopNav {
  display: flex; // 弹性布局 内部盒子在一行显示
  justify-content: space-between; // 内部盒子均匀分布
  align-items: center;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  color: #fff;
  .iconfont {
    font-size: 0.4rem;
  }
  .jiantou {
    font-size: 0.5rem;
  }
  .title {
    margin-left: 0.4rem;
    font-size: 0.32rem;
  }
  .search {
    margin-right: 0.4rem;
  }
}
.back,
.right {
  display: flex;
}
.content {
  padding: 0.4rem 0; // 上下内边距40px
  display: flex; // 弹性布局 内部盒子一行内展示
  justify-content: space-between; // 内部盒子平均分布
  .contentLeft {
    position: relative;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.1rem;
    }
    span {
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      font-size: 0.12rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .contentRight {
    width: 3.7rem;
    h3 {
      color: #fff;
    }
    .author {
      padding: 0.1rem 0 0.2rem 0;
      display: flex;
      align-items: center; // 内部盒子水平居中
      img.header {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.5rem;
      }
      span {
        color: rgba(255, 255, 255, 0.8);
        margin-left: 0.1rem;
      }
    }
    .description {
      font-size: 0.12rem;
      color: rgba(255, 255, 255, 0.7);
      overflow: hidden;
      text-overflow: ellipsis; // 当文本溢出隐藏时，用省略号代替
      display: -webkit-box;
      -webkit-line-clamp: 2; // 2行内显示
      -webkit-box-orient: vertical;
    }
  }
}
.iconList {
  display: flex; // 内部盒子一行内显示
  justify-content: space-between; // 内部盒子平均分布
  padding: 0 0.4rem; // 左右内边距
  box-sizing: border-box; // 盒子原尺寸不被边距破坏
  .iconItem {
    display: flex;
    flex-direction: column; // 内部盒子垂直排列
    align-items: center; // 内部盒子居中对齐
    .iconfont {
      font-size: 0.4rem;
      color: rgba(255, 255, 255, 0.8);
      padding: 0.05rem;
    }
    .icontitle {
      font-size: 0.1rem;
       color: rgba(255, 255, 255, 0.8);
       font-weight: 200;
    }
  }
}
</style>