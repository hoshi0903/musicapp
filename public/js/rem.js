function remSize() {
  // 获取设备的宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  // 当设备大于等于750时 设置为750
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  // 当设备小于等于320时 设置为320
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  // 假设设计稿是750px时，1rem == 100px的设计稿宽度
  // 可以理解为：把屏幕分成了7.5份，3.75rem就是屏幕的一半
  // document.documentElement 指的是DOM元素
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
  // 文字为 0.3rem ，假设750px宽度，文字为 30px
  document.querySelector('body').style.fontSize = 0.26 + 'rem'
}

remSize()

// onresize 事件会在窗口或框架被调整大小时发生
window.onresize = function () {
  // 重新调用函数
  remSize()
}