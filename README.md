# Student status detection
## 开发时间：2018.12-2019.4
### 项目概述：2018年服务外包竞赛项目，项目名称为智慧教室学生状态监测系统，利用的Face++平台的人脸识别api，自建了教师端和学生端的微信小程序，目前api接口与微信小程序的数据接口还有点问题。
@[TOC] 目录


#### 一、前言

　　智能化人脸识别技术随着科学技术的发展与进步在二十一世纪第二个十年已迈入了一个全新的领域。近年来，由于反恐和国家安全、社会安全的需要，人脸识别技术也越来越受到重视，而身份识别正是核心问题。在这种大背景下，具有非接触、非侵扰、友好、直观、快速、简便、可扩展性等优点的人脸识别技术在多种生物识别技术中脱颖而出。
  
　　如今，高校“替课”、“跷课”、“蹭课”现象已屡见不鲜。而央视《新闻直播间》近期报道中，“替课族”活跃在山西、内蒙古、黑龙江、吉林等多个省份的高校，已形成了完整产业链。对于教育工作者而言，无论是中小学，还是高等院校，教学老师和管理人员。及时地了解学生的学习状态，及时地从学生那里得到相应的反馈，无疑将会为自身的教学和管理提供更多的便利与帮助。　　

　　因此，本系统能够快速地对教室中的学生进行人脸识别，实时更新学生出勤状况。并且通过阶段性扫描，智能分析出学生的上课状态，与客户端实时连接，及时汇报数据结果。

#### 二、创意概述

　　我们的产品创意主要体现在以下几点：
 
 * 人脸识别签到，支持多人同时识别——教室可以通过微信端一键点名
 * 学生听课状态实时监测，能够准确识别其认真程度
 * 更加方便快捷，只需通过微信小程序就可以进行操作与管理
 * 更完善的学生听课数据分析处理，有助于教师的针对性教学　　

　　对于教育工作者而言，无论是中小学，还是高等院校，教学老师和管理人员。及时地了解学生的学习状态，及时地从学生那里得到相应的反馈，无疑将会为自身的教学和管理提供更多的便利与帮助。　　

　　本项目致力于打造出为了满足使用者的需求的智慧教室学生状态检测系统。同时为了提升基于人脸识别的学生状态检测系统的性能以及满足用户对其应用的简单化的操作使用，因此本项目的开发应是一个集微信小程序以及软硬件接口等集一体的于智慧教室学生状态检测系统。

#### 三、功能简介

　　本产品的核心功能是通过人脸识别技术实时监测学生的听课状态，利用数据挖掘和数据分析形成课堂听课状态变化图，并完成对每位学生的个性化智能分析。我们通过对用户一些基本信息和脸部数据的收集，利用FACE++平台，实时更新学生出勤状况。通过阶段性扫描，智能分析出学生的上课状态，与客户端实时连接，及时汇报数据结果。
　　
#### 四、开发工具与技术

　　本产品基于树莓派进行嵌入式开发，结合 Face++人脸分析平台，实现对于教室内的学生状态监测。整套识别系统使用 Python 开发，客户端使用微信小程序为承载平台，并且使用了 Echarts，ColorUI 和 WeUI 等前端库来优化项目。
　　
　　关于开发工具与技术的具体细节，我们将在产品详细报告中的技术章节进行更详细的描述。

#### 五、应用对象和应用环境

　　我们的产品目标用户是以中小学生和高校师生为主，也包括教育辅导机构等等。这一先决条件其实很大的影响了用户群体的特点，如学习速度快、易接受、易理解等。这就对我们的产品提出了一个基本的要求——如何让他们愿意相信我们的产品是有效果与参考价值的。答案是显而易见的，只有一个令人信服的分析结果和生动的数据呈现形式才能得到用户的认可与信赖。

　　与此同时，我们还需要一个保证数据分析精度与速度的服务器环境和易于用户传播的用户应用环境，我们的服务器环境符合赛题要求的服务器配置。在应用环境上，我们为用户打造了方便易用的微信小程序端作为客户端，使老师和同学都能够方便实时的查看到自己所需要的信息。

#### 六、结语

　　科技与技术的发展一定会推动教育加速进步，从互联网教育从互联网开始，教育就已经不断的进步，开始取消学习的边界，现在人工智能的兴起，使孩子的学习和学习效率得到大幅度的提升。比如说人脸识别技术。未来，互联网＋教育、AI＋教育甚至人脸识别＋教育一定会有更好的发展。
