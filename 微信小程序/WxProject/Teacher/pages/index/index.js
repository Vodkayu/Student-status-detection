const app = getApp();
import * as echarts from '../../ec-canvas/echarts';



function initChart1(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option1 = {
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],//目前取第一个颜色 淡蓝
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: app.globalData.timeArr,
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [
      {
        name: 'A',
        type: 'line',
        smooth: true,
        data: app.globalData.percentArr,
        // data:testper
      }]
  };
  

  // app.globalData.timeOut = setTimeout(function () { chart.setOption(option1); }, 5000)
  // app.globalData.timeOut = setTimeout(function () { chart.setOption(option2); }, 5000)

  chart.setOption(option1);
  return chart;
}

function initChart2(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);


  var option2 = {
    color: ["#67E0E3", "#67E0E3", "#9FE6B8"],//目前取第一个颜色 淡蓝
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: app.globalData.timeArr,
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [
      {
        name: 'A',
        type: 'line',
        smooth: true,
        data: app.globalData.percentArr,
        // data:testper
      }]
  };

  // app.globalData.timeOut = setTimeout(function () { chart.setOption(option1); }, 5000)
  // app.globalData.timeOut = setTimeout(function () { chart.setOption(option2); }, 5000)

  chart.setOption(option2);
  return chart;
}


Page({

  test:function(e){
    console.log('test')
    // app.globalData.percentArr = [5,6,7,8,9,10]
    // this.setData({
    //   ec: {
    //     onInit: initChart2
    //   }
    // })
    this.onReady(2)
  },
  
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,

    classNumber: app.globalData.classNumber,
    classTotal: app.globalData.classTotal,
    className: app.globalData.className,
    percent: app.globalData.percent,

    color: 'red',
    ec: {
      onInit: initChart1
      
    },

  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
  onLoad() {
    

    


    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  },
  onShareAppMessage: function (res) {
    return {
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  onReady(i) {
   
  
  }
});
