<template>
  <div class="list-view-container">
    <!-- listViewTop 子组件 头部信息 -->
    <!-- 把父组件的playlist数据使用v-bind传给子组件 -->
    <!-- playlis 是自定义的属性名 但是子组件要在props中用这个名字接收 -->
    <listViewTop :playlist="state.playlist"></listViewTop>

    <!-- ListViewPlayList 子组件 播放列表 -->
    <ListViewPlayList :playlist="state.playlist"></ListViewPlayList>
  </div>
</template>

<script>
// 引入 listViewTop 子组件
import listViewTop from "@/components/ListViewTop.vue";
// 引入 ListView-PlayList 子组件
import ListViewPlayList from "@/components/ListView-PlayList.vue";
// 引入 获取歌单的axios模块
import { getPlaylistDetail } from "@/api/index.js";
// vue3 语法 引入vue的onMounted生命周期函数，为了更新数据渲染模版；引入reactive函数，为了创建响应式对象类型数据
import { onMounted, reactive } from "vue";
// 引入router模块的useRoute()方法 获取路由参数
import { useRoute } from "vue-router";
import store from "@/store/index";

export default {
  name: "listView",
  // setup()是在Vue实例被创建前，所以没有this
  setup() {
    const route = useRoute();
    // 创建响应式对象类型数据list数组，playlist对象 为了存放axios获取的数据
    let state = reactive({
      playlist: {
        // 因为数据有个子对象creator，必须存储否则无法查找到
        creator: {},
        // 逻辑同上，这个是给playlist子组件用的子对象
        tracks: {},
      },
    });
    // 使用onMounted钩子函数获取数据，没有this，所以可以用箭头函数
    // 注意：2和3 的钩子函数写法不一样，没有了beforeCreate，created，换成了setup，其他还是一样的；
    // 如果2和3的的钩子函数都有混合使用，那先执行3的再到2的
    onMounted(async () => {
      // 获取到路由的查询参数 id 比如 /listview?id=6847070389
      let id = route.query.id;
      // 获取指定id的接口数据，并使用await让resolve返回的参数存入result变量中
      let result = await getPlaylistDetail(id);
      console.log(result.data.playlist);
      // 把获取的数据存到 state 对象的 list 数组里面
      state.playlist = result.data.playlist;

      // 把tate.playlist.tracks 这个数据 使用vuex 的方法传进去setPlayList
      store.commit("setPlayList", state.playlist.tracks);
    });
    // 一定要把setup定义的数据return出去，才会生效
    return {
      state,
    };
  },
  components: {
    listViewTop,
    ListViewPlayList,
  },
};
</script>

<style>
</style>