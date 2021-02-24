// pages/reg/reg.js
var app = getApp();
var flag = 0;
Page({

  data: {
    text: '登录',

  },
  input1: function (e) {
    app.globalData.inputName = e.detail.value;
  },
  input2: function (e) {
    app.globalData.inputID = e.detail.value;

  },
  click: function (e) {
    for (var i = 0; i < app.globalData.arrTest.stuARR.length; i++) {
      if (app.globalData.inputID == app.globalData.arrTest.stuARR[i].id)
      {
        app.globalData.ind = i;
        console.log('success')
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000 //持续的时间
        })
        flag = 1
        wx.navigateTo({
          url: '../detail/detail',
        })
      }
    }
    if(flag==0)
    {
      wx.showToast({
        title: '登录失败',
        icon: 'loading',
        duration: 1000 //持续的时间
      })
    }
    console.log(app.globalData.ind)
    console.log(app.globalData.inputName)
    console.log(app.globalData.inputID)
    
  },

  detail:function(e){
    if(flag==1){
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
    if(flag==0){
      wx.showToast({
        title: '请先登录',
        duration: 1000 //持续的时间
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})