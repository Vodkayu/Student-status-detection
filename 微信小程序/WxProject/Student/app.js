//app.js

var ClassNumber = 17051423; //班级号
var ClassTotal = 5;  //班级人数
var ClassName = '高等数学'; //当前课程
var Percent = '91.8%'; //当前听课比例
var PercentArr = [95.1, 75.2, 89.5, 88, 75.1, 90.1];  //每分钟听课率数组
var TimeArr = [0, 1, 2, 3, 4, 5]; //分钟坐标横轴

var StuName = []; //学生列表学生
var StuID = [1111, 2222, 3333, 3333, 4444]; //学生id
var StuNow = ['专心', '不专心', '专心', '不专心', '不专心']; //学生状态
var StuValue = [80, 60, 50, 70, 10] //学生状态比例
var Ind = 0;//学生编号参数（学生列表传参用）
var IndClass = 0;

var ArrTest =
{
  classID: 17052314,
  stuARR: [
    {
      id: 10000,
      name: '小朱',
      arr: [
        { cla: '高等数学', rate: 80 },
        { cla: '线性代数', rate: 75 },
        { cla: '概率论', rate: 30 }
      ]
    },
    {
      id: 10001,
      name: '小马',
      arr: [
        { cla: 'C语言', rate: 58 },
        { cla: '工程经济学', rate: 95 },
        { cla: '离散数学', rate: 60 },
        { cla: '工程力学', rate: 20 }
      ]
    },
    {
      id: 10002,
      name: '小王',
      arr: [
        { cla: 'C++', rate: 100},
        { cla: '微观经济学', rate: 30 },
        { cla: '高等数学', rate: 60 },
        { cla: 'Java应用开发', rate: 10 }
      ]
    },
    {
      id: 10003,
      name: '小婧',
      arr: [
        { cla: '概率论', rate: 54 },
        { cla: '工程经济学', rate: 98 },
        { cla: '离散数学', rate: 60 },
        { cla: '太极拳', rate: 65 }
      ]
    },
    {
      id: 10004,
      name: '小鹏',
      arr: [
        { cla: 'C语言', rate: 30 },
        { cla: '线性代数', rate: 100 },
        { cla: '离散数学', rate: 50 },
        { cla: '工程力学', rate: 65 }
      ]
    },

  ]
};


App({
  
  globalData: {
    userInfo: null,
    test: '123',
    classNumber: ClassNumber,
    classTotal: ClassTotal,
    className: ClassName,
    percent: Percent,
    percentArr: PercentArr,
    timeArr: TimeArr,
    stuName: StuName,
    stuID: StuID,
    stuNow: StuNow,
    stuValue: StuValue,
    ind: Ind,
    arrTest: ArrTest,
    indClass: IndClass,
    inputName:null,
    inputID:null
  }
})