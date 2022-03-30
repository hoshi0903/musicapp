<template>
  <div class="playController">
    <div class="left" @click="show=!show">
      <img :src="playList[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">{{ playList[playCurrentIndex].name }}</div>
        <div class="tips">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <!-- @click="play" 点击按钮 触发play方法 控制音乐的播放和暂停 -->
      <!-- 使用 v-if v-else 控制播放按钮的图标切换 -->
      <!-- paused true 播放按钮出现 -->
      <span
        v-if="paused"
        class="iconfont bofang icon-bofang"
        @click="play"
      ></span>
      <span v-else class="iconfont bofang icon-zanting" @click="play"></span>
      <span class="iconfont icon-24gf-playlistMusic2"></span>
    </div>
    <!-- 使用 playMusic 子组件 -->
    <!-- 把父组件的数据传递给子组件的props，使用playDetail接收 -->
    <!--  @back="show=!show" @back是子组件传递的自定义事件 -->
    <play-music @back="show=!show" v-show="show" :playDetail="playList[playCurrentIndex]"></play-music>
    <!-- 音乐播放器 -->
    <!-- 是tracks.id   不是tracks.al.id -->
    <!-- ref="audio" js相当于获取元素 document.queryselector()方法 -->
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
// 引入 playMusic 子组件 歌曲播放详情
import playMusic from "@/components/playMusic.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "playController",
  components: {
    playMusic,
  },
  data() {
    return {
      paused: true, // 为了控制v-if 播放按钮切换
      show: false, // 控制 play-music 子组件的显示隐藏
    };
  },
  computed: {
    // 使用 vuex 的 mapState 函数，把state的方法映射到组件的computed中，就可以当计算属性使用了
    ...mapState(["playList", "playCurrentIndex"]),
  },
  methods: {
    // 控制播放器
    play() {
      // this.$refs.audio 打印到控制台会显示一个对象，内部有很多属性和方法
      if (this.$refs.audio.paused) {
        // paused 属性为true时，代表暂停状态
        this.$refs.audio.play(); // 则播放
        this.paused = false; // v-if 暂停按钮显示
      } else {
        // false 代表播放状态
        this.$refs.audio.pause(); //则暂停 注意：pause paused 不一样
        this.paused = true; // v-if true 播放按钮显示
      }
    },
  },
};
</script>

<style lang="less" scoped>
.playController {
  width: 7.5rem;
  height: 1.2rem;
  background: #fff;
  box-sizing: border-box;
  position: fixed; // 固定定位
  padding: 0.2rem 0.4rem;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px #eee solid;
  .left {
    display: flex;
    align-items: center; // 内部盒子侧轴居中
    img {
      width: 0.8rem;
      height: 0.8rem;
      background: #eee;
      border-radius: 0.5rem;
      margin-right: 0.2rem;
    }
    .content {
      .tips {
        color: #898989;
        font-size: 0.1rem;
      }
    }
  }
  .right {
    .iconfont {
      color: #555;
      font-size: 0.5rem;
    }
    .bofang {
      margin-right: 0.4rem;
    }
  }
}
</style>