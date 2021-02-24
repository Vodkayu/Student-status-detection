
var app = getApp();
var flag = 1;
Page({

  /**
   * 页面的初始数据
   */
  test:function(e){
    console.log(1)
    this.setData({
      stuNow: app.globalData.stuNow[flag]
    })
    flag++
  },
  detail: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  data: {
    stuNow: app.globalData.stuNow[0],
    array:app.globalData.arrTest.stuARR,
    stuName:app.globalData.arrTest.stuARR,
    stuID: app.globalData.arrTest.stuARR.id,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.target.class)
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