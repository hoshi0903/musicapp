// 获取数据的组件

// 引入axios库
import axios from "axios";

// 把baseUrl存为变量
let baseUrl = 'http://localhost:3000'

// 向外导出一个获取轮播图的api的函数 
// 初始值是 0 资源类型，0代表pc ，1:安卓...
// type的值是可以变化的，所以使用形參
export function getBanner(type = 0) {
  // 使用反引号模板字符串``
  // ${type} = 调用函数时填写的实参
  return axios.get(`${baseUrl}/banner?type=${type}`);
}

// 向外导出一个 获取icon的api的函数
export function getIcon() {
  return axios.get(`${baseUrl}/homepage/dragon/ball`)
}

// 获取推荐歌单
// limit=10 默认获取10条数据 
export function getmusicList(limit = 10) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单详情
export function getPlaylistDetail(id) {
  return axios.get(`${baseUrl}/playlist/detail/?id=${id}`)
}