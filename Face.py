import urllib.request
import urllib.error
import time
import requests
import time
import cv2
import json

http_url = 'https://api-cn.faceplusplus.com/facepp/v3/detect'
key = "31p3ooxDXcsg1trVaykFPeHla8fC8jio"
secret = "nYm6-mBnXJY4XmdX0sqvrpzhFzh5-s9Q"
filepath1=r"F:\\测试图片\\taitou.jpg"
eye_status="eyestatus"
gender="gender"
emotion="emotion"
eyegaze="eyegaze"
headpose="headpose"
#获取单个属性
def get_face_info(filepath,info):
    http_url = "https://api-cn.faceplusplus.com/facepp/v3/detect"
    file = open(filepath, "rb")
    files = {"image_file": file}
    info_list=[]
    info_list.append(info)
    data={
        "api_key":key,
        "api_secret":secret,
        "return_attributes":info_list
    }
    emotion_response = requests.post(http_url, data=data, files=files)  # 获取情绪属性
    emotion_dict = emotion_response.json()
    #print(emotion_dict)
    return emotion_dict

#获取所有属性,并以列表的形式打印信息
emotion_list=[]
eyestatus_list=[]
eyeopen=[]
headpose_list=[]
eyegaze_list=[]
faces_token=[]
def get_all_info(filepath):
    global emotion_list
    global eyestatus_list
    global eyeopen
    global headpose_list
    global eyegaze_list
    global faces_token
    emotion_dict=get_face_info(filepath, 'emotion')
    eyestatus_dict=get_face_info(filepath, 'eyestatus')
    headpose_dict=get_face_info(filepath, 'headpose')
    eyegaze_dict=get_face_info(filepath, 'eyegaze')

    #眼睛被遮挡的置信度
    occlusion=50
    #眼睛睁开的置信度
    eye_open=50
    #获取面部表情
    for i in emotion_dict.get('faces'):
        emotion_1=i.get('attributes').get('emotion')
        emotion_list.append(max(emotion_1,key=emotion_1.get))        #打印返回信息     人脸情绪

    #获取眼睛的睁闭情况
    for i in eyestatus_dict.get('faces'):
        eyestatus_1=i.get('attributes').get('eyestatus')
        eyestatus_list.append(eyestatus_1)
        left_normal_glass_eye_open = eyestatus_1['left_eye_status']['normal_glass_eye_open']
        right_normal_glass_eye_open=eyestatus_1['right_eye_status']['normal_glass_eye_open']
        left_no_class_eye_open=eyestatus_1['left_eye_status']['no_glass_eye_open']
        right_no_glass_eye_open=eyestatus_1['right_eye_status']['no_glass_eye_open']
        left_occlusion=eyestatus_1['left_eye_status']['occlusion']
        right_occlusion=eyestatus_1['right_eye_status']['occlusion']
        if left_occlusion>occlusion and right_occlusion>occlusion:
            eyeopen.append("眼部被遮挡")
        else:
            if left_no_class_eye_open>eye_open or left_normal_glass_eye_open >eye_open or right_no_glass_eye_open>eye_open or right_normal_glass_eye_open>eye_open:
                eyeopen.append('睁眼')
            else:
                eyeopen.append('闭眼')

#获取头部姿势
    for i in headpose_dict.get('faces'):
        headpose_1=i.get('attributes').get('headpose')
        headpose_list.append(headpose_1)

#获取眼睛视线
    for i in eyegaze_dict.get('faces'):
        eyegaze_1=i.get('attributes').get('eyegaze')
        eyegaze_list.append(eyegaze_1)

#获取face_tokens集 利用emotion_dict
    for i in emotion_dict.get('faces'):
        faces_token_1=i.get('face_token')
        faces_token.append(faces_token_1)
    if emotion_dict==[] or headpose_list==[] or eyegaze_list==[]:
        print("未检测到人脸")
        return
    #print(faces_token)
    #print(emotion_list)
    #print(eyestatus_list)
    #print(eyeopen)
    #print(headpose_list)
    #print(eyegaze_list)

"""
   说明:此函数用来比对搜索到的人脸，判断其是否已经存在于face_set集合
   参数:face_token
            ：识别到的人脸的face_token;
"""

def searchFace(face_token,outer_id):
    http_url = "https://api-cn.faceplusplus.com/facepp/v3/search"
    #files={"image_file":open(filepath,"rb")}
    emotion_data = {"api_key": key,
                    "api_secret": secret,
                    "outer_id":outer_id,
                    "face_token":face_token
                    }
    compInfo = requests.post(http_url, data=emotion_data)  # 获取情绪属性
    req_dict=compInfo.json()
    #print(req_dict)
    if req_dict["results"][0]["confidence"]>50:
        name_id=req_dict["results"][0]["user_id"]
        #返回搜索到的对应学生的ID，未搜索到则返回[]
    return name_id

#学生列表
info={"info":[]}
stu_list={"从网络数据库获取的信息"}
if __name__ == "__main__":
    #创建face_set
    #判断是否检测到人脸
    get=[]
    t1=time.time()#初始时间
    start=time.time()
    cap=cv2.VideoCapture(0)#打开摄像头
    while(1):
        ret,frame=cap.read()#提取关键帧
        cv2.imshow("GetImage",frame)#实时展示
        t2=time.time()#与初始时间比较获取时间间隔
        end=time.time()
        if t2-t1>=5:#每隔5秒提取一次
            imageFilePath="F:\\PythonOpenCVImageText\\"+str(int(t1))+".jpg"#图片保存路径
            cv2.imwrite(imageFilePath,frame)#保存关键帧
            #print(imageFilePath)
            get_all_info(imageFilePath)#图片上传并获取信息
            #人脸比对
            for i in faces_token:
                name=searchFace(i,"student")
                #如果比对不成功或没有比对到人脸
                if len(name)>8 or name=="":
                    continue
                #学生统计数加1
                stu_list[name] = stu_list[name]+1
                get.append(name)
            faces_token=[]
            t1=time.time()#重置初试时间
            #print(get)
            print(stu_list)
            #保存一分钟统计信息
            if end-start>=60:
                with open(r"F:test.json","w") as f:
                    info["info"]=stu_list
                    json.dump(info["info"],f)
                    f.close()
                start=end;
            stre={}
            #载入一分钟统计信息
            try:
                with open(r"F:test.json","r") as F:
                    stre=json.load(F)
                    F.close()
            except:
                print("error")
            get=[]
            print(stre)
        if cv2.waitKey(100) & 0xff == ord('q'): # 按q退出
            break