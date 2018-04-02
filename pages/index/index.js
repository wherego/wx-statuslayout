//index.js
//获取应用实例
const app = getApp()
var statusLayout
Page({
  data: {
    datas: ['测试数据1', '测试数据2', '测试数据3', '测试数据4', '测试数据5'],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onReady: function(){
    statusLayout = this.selectComponent("#statusLayout")
  },
  onLoad: function () {
  },
  testStatusLayout: function(e) {
    statusLayout.setStatus("LOADING")
    setTimeout(function(){
      var num = Math.floor(Math.random() * 10 + 1); //1-10

      if (num <= 3) {
        statusLayout.setStatus("CONTENT")
      } else if (num <= 7) {
        statusLayout.setStatus("ERROR")
      } else {
        statusLayout.setStatus("EMPTY")
      }
    },1000)
  }
})
