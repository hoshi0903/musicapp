import { createStore } from 'vuex'
import mutations from './index'

export default createStore({
  namespaced: true,
  // 共享数据
  state: {
    // 初始化数据
    playList: [{
      name: "倔强",
      id: 386175,
      al: {
        id: 38259,
        name: "神的孩子都在跳舞",
        pic: 109951163188724800,
        picUrl: "http://p4.music.126.net/ovsWnGqQYBy0XC8WD1lULw==/109951163188724796.jpg",
        pic_str: "109951163188724796"
      }
    }],
    playCurrentIndex: 0,
  },
  getters: {
  },
  // 定义变更数据的方法
  mutations: {
    // 定义setPlayList方法 把传递进来的value实参赋值到state.playList
    setPlayList(state, value) {
      state.playList = value
    },
    // 更改 playCurrentIndex 的值，这个值代表歌曲的编号，等于切歌
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
    }
  },
  actions: {
  },
  modules: {
  }
})
