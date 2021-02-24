import * as echarts from '../../ec-canvas/echarts';
const app = getApp();


Page({

  onLoad: function(options) {
    app.globalData.ind = options.ind;
    console.log(app.globalData.ind);
    console.log(app.globalData.stuName[app.globalData.ind]);

    this.setData({
      stuName: app.globalData.arrTest.stuARR[app.globalData.ind].name,
      stuID: app.globalData.arrTest.stuARR[app.globalData.ind].id,
      array: app.globalData.arrTest.stuARR[app.globalData.ind].arr,
      className: app.globalData.arrTest.stuARR[app.globalData.ind].arr[0].cla,
      wg: app.globalData.arrTest.stuARR[app.globalData.ind].arr[0].rate,
      wr: 100 - app.globalData.arrTest.stuARR[app.globalData.ind].arr[0].rate,
      per: 50

    })

  },
  data: {
    stuName: 'false',
    stuID: 'false',
    className: app.globalData.arrTest.stuARR[app.globalData.ind].arr[0].cla,
    array: app.globalData.arrTest.stuARR[app.globalData.ind].arr,
    ec: {},
    wg: app.globalData.arrTest.stuARR[app.globalData.ind].arr[0].rate,
    wr: 100 - app.globalData.arrTest.stuARR[app.globalData.ind].arr[0].rate,
    per:50
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    app.globalData.indClass = e.detail.value
    console.log(app.globalData.indClass)
    this.setData({
      className: app.globalData.arrTest.stuARR[app.globalData.ind].arr[e.detail.value].cla,
      wg: app.globalData.arrTest.stuARR[app.globalData.ind].arr[e.detail.value].rate,
      wr: 100 - app.globalData.arrTest.stuARR[app.globalData.ind].arr[e.detail.value].rate
    })

  },

  onReady() {},

});

