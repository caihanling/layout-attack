/**
 * Created by chl on 16-5-25.
 */


//测试数据，用来测试布局,pid为0表示为父区域,finishRect用于画子区域时进行遍历
//原始数据
/*var data = [
    {"id":"1" ,"pid":"0" , "img":"1.png" , "rectName":"业务区A"},
    {"id":"2" ,"pid":"0" , "img":"2.png" , "rectName":"业务区B"},
    {"id":"3" ,"pid":"0" , "img":"3.png" , "rectName":"业务区C"},
    {"id":"4" ,"pid":"0" , "img":"1.png" , "rectName":"业务区D"},
    {"id":"5" ,"pid":"0" , "img":"2.png" , "rectName":"业务区E"},
    {"id":"10" , "pid":"1" ,"rectName":"业务区A-1"},
    {"id":"36" , "pid":"1" ,"rectName":"业务区A-2"},{"id":"37" , "pid":"1" ,"rectName":"业务区A-3"},
    {"id":"38" , "pid":"1" ,"rectName":"业务区A-4"},{"id":"39" , "pid":"1" ,"rectName":"业务区A-5"},{"id":"40" , "pid":"1" ,"rectName":"业务区A-6"},
    {"id":"43" , "pid":"1" ,"rectName":"业务区A-7"},
    {"id":"14" , "pid":"2" ,"rectName":"业务区B-1"}, {"id":"15" , "pid":"2" ,"rectName":"业务区B-2"}, {"id":"16" , "pid":"2" ,"rectName":"业务区B-3"},
    {"id":"17" , "pid":"3" ,"rectName":"业务区C-1"},
    {"id":"20" , "pid":"4" ,"rectName":"业务区D-1"},{"id":"30" , "pid":"4" ,"rectName":"业务区D-2"},
    {"id":"45" , "pid":"5" ,"rectName":"业务区E-1"},
    {"id":"22" , "pid":"45" ,"rectName":"业务区E-1-A"}, {"id":"23" , "pid":"45" ,"rectName":"业务区E-1-B"}, {"id":"31" , "pid":"45" ,"rectName":"业务区E-1-C"}
    ,{"id":"34" , "pid":"5" ,"rectName":"业务区E-4"}, {"id":"35" , "pid":"5" ,"rectName":"业务区E-5"}
];

//父区域数据


//模拟电脑数据
//type:0(为被攻击的电脑)，1:(被攻击的电脑) ， 2:(防火墙) ， 3:(服务器)
//根据数据库字段type=PC,表示电脑
var computerData = [
    {"id":"100" , "areacode":"10" , "ip":"192.168.3.100" , "type":"PC"} , {"id":"101" , "areacode":"10" , "ip":"192.168.3.101", "type":"PC"},
    {"id":"103" , "areacode":"14" , "ip":"192.168.3.103" , "type":"0"} , {"id":"104" , "areacode":"14" , "ip":"192.168.3.104", "type":"0"},
    {"id":"105" , "areacode":"15" , "ip":"192.168.3.105" , "type":"3"} , {"id":"106" , "areacode":"15" , "ip":"192.168.3.106", "type":"3"},{"id":"107" , "areacode":"15" , "ip":"192.168.3.107", "type":"3"},
    {"id":"108" , "areacode":"16" , "ip":"192.168.3.108" , "type":"2"} , {"id":"109" , "areacode":"16attackObj1.x = attackObj1.x + 10;" , "ip":"192.168.3.109", "type":"2"},{"id":"141" , "areacode":"16" , "ip":"192.168.3.141", "type":"2"},
    {"id":"142" , "areacode":"16" , "ip":"192.168.3.142" , "type":"2"} , {"id":"143" , "areacode":"16" , "ip":"192.168.3.143", "type":"2"},{"id":"144" , "areacode":"16" , "ip":"192.168.3.144", "type":"2"},
    {"id":"145" , "areacode":"16" , "ip":"192.168.3.145" , "type":"2"} , {"id":"146" , "areacode":"16" , "ip":"192.168.3.146", "type":"2"},{"id":"147" , "areacode":"16" , "ip":"192.168.3.147", "type":"2"},
    {"id":"148" , "areacode":"16" , "ip":"192.168.3.148" , "type":"2"} , {"id":"149" , "areacode":"16" , "ip":"192.168.3.149", "type":"2"},{"id":"150" , "areacode":"16" , "ip":"192.168.3.150", "type":"2"},
    {"id":"151" , "areacode":"16" , "ip":"192.168.3.151" , "type":"2"} , {"id":"152" , "areacode":"16" , "ip":"192.168.3.152", "type":"2"},{"id":"153" , "areacode":"16" , "ip":"192.168.3.153", "type":"2"},
    {"id":"154" , "areacode":"16" , "ip":"192.168.3.154" , "type":"2"} , {"id":"155" , "areacode":"16" , "ip":"192.168.3.155", "type":"2"},{"id":"156" , "areacode":"16" , "ip":"192.168.3.156", "type":"2"},
    {"id":"110" , "areacode":"17" , "ip":"192.168.3.110" , "type":"0"} , {"id":"111" , "areacode":"17" , "ip":"192.168.3.111", "type":"0"},{"id":"112" , "areacode":"17" , "ip":"192.168.3.112", "type":"0"},
    {"id":"157" , "areacode":"17" , "ip":"192.168.3.157" , "type":"0"} , {"id":"158" , "areacode":"17" , "ip":"192.168.3.158", "type":"0"},{"id":"159" , "areacode":"17" , "ip":"192.168.3.159", "type":"0"},
    {"id":"160" , "areacode":"17" , "ip":"192.168.3.160" , "type":"0"} , {"id":"161" , "areacode":"17" , "ip":"192.168.3.161", "type":"0"},{"id":"162" , "areacode":"17" , "ip":"192.168.3.162", "type":"0"},
    {"id":"163" , "areacode":"17" , "ip":"192.168.3.163" , "type":"0"} , {"id":"164" , "areacode":"17" , "ip":"192.168.3.164", "type":"0"},{"id":"165" , "areacode":"17" , "ip":"192.168.3.165", "type":"0"},
    {"id":"166" , "areacode":"17" , "ip":"192.168.3.166" , "type":"0"} , {"id":"167" , "areacode":"17" , "ip":"192.168.3.167", "type":"0"},{"id":"168" , "areacode":"17" , "ip":"192.168.3.168", "type":"0"},
    {"id":"169" , "areacode":"17" , "ip":"192.168.3.169" , "type":"0"} , {"id":"170" , "areacode":"17" , "ip":"192.168.3.170", "type":"0"},{"id":"171" , "areacode":"17" , "ip":"192.168.3.171", "type":"0"},
    {"id":"113" , "areacode":"20" , "ip":"192.168.3.113" , "type":"0"} , {"id":"114" , "areacode":"20" , "ip":"192.168.3.114", "type":"0"},{"id":"115" , "areacode":"20" , "ip":"192.168.3.115", "type":"0"},
    {"id":"116" , "areacode":"20" , "ip":"192.168.3.116" , "type":"0"} , {"id":"117" , "areacode":"20" , "ip":"192.168.3.117", "type":"0"},{"id":"118" , "areacode":"20" , "ip":"192.168.3.118", "type":"0"},
    {"id":"126" , "areacode":"20" , "ip":"192.168.3.126" , "type":"0"} , {"id":"127" , "areacode":"20" , "ip":"192.168.3.127", "type":"0"},{"id":"128" , "areacode":"20" , "ip":"192.168.3.128", "type":"0"},
    {"id":"129" , "areacode":"20" , "ip":"192.168.3.129" , "type":"0"} , {"id":"130" , "areacode":"20" , "ip":"192.168.3.130", "type":"0"},{"id":"131" , "areacode":"20" , "ip":"192.168.3.131", "type":"0"},
    {"id":"132" , "areacode":"20" , "ip":"192.168.3.132" , "type":"0"} , {"id":"133" , "areacode":"20" , "ip":"192.168.3.133", "type":"0"},{"id":"134" , "areacode":"20" , "ip":"192.168.3.134", "type":"0"},
    {"id":"135" , "areacode":"20" , "ip":"192.168.3.135" , "type":"0"} , {"id":"136" , "areacode":"20" , "ip":"192.168.3.136", "type":"0"},{"id":"137" , "areacode":"20" , "ip":"192.168.3.137", "type":"0"},
    {"id":"138" , "areacode":"20" , "ip":"192.168.3.138" , "type":"0"} , {"id":"139" , "areacode":"20" , "ip":"192.168.3.139", "type":"0"},{"id":"140" , "areacode":"20" , "ip":"192.168.3.140", "type":"0"},
    {"id":"119" , "areacode":"30" , "ip":"192.168.3.119" , "type":"3"} , {"id":"120" , "areacode":"30" , "ip":"192.168.3.120", "type":"3"},
    {"id":"121" , "areacode":"22" , "ip":"192.168.3.121" , "type":"0"} , {"id":"122" , "areacode":"22" , "ip":"192.168.3.122", "type":"0"},
    {"id":"123" , "areacode":"23" , "ip":"192.168.3.123" , "type":"0"} , {"id":"124" , "areacode":"23" , "ip":"192.168.3.124", "type":"0"},
    {"id":"125" , "areacode":"31" , "ip":"192.168.3.125" , "type":"0"} , {"id":"126" , "areacode":"31" , "ip":"192.168.3.126", "type":"0"},
    {"id":"172" , "areacode":"34" , "ip":"192.168.3.172" , "type":"3"} , {"id":"173" , "areacode":"34" , "ip":"192.168.3.173", "type":"3"}, {"id":"174" , "areacode":"34" , "ip":"192.168.3.174", "type":"3"},
    {"id":"175" , "areacode":"34" , "ip":"192.168.3.175" , "type":"3"} , {"id":"176" , "areacode":"34" , "ip":"192.168.3.176", "type":"3"}, {"id":"177" , "areacode":"34" , "ip":"192.168.3.177", "type":"3"},
    {"id":"178" , "areacode":"34" , "ip":"192.168.3.178" , "type":"3"} , {"id":"179" , "areacode":"34" , "ip":"192.168.3.179", "type":"3"}, {"id":"180" , "areacode":"34" , "ip":"192.168.3.180", "type":"3"},
    {"id":"181" , "areacode":"34" , "ip":"192.168.3.181" , "type":"3"} , {"id":"182" , "areacode":"34" , "ip":"192.168.3.182", "type":"3"}, {"id":"183" , "areacode":"34" , "ip":"192.168.3.183", "type":"3"},
    {"id":"184" , "areacode":"34" , "ip":"192.168.3.184" , "type":"3"} , {"id":"185" , "areacode":"34" , "ip":"192.168.3.185", "type":"3"}, {"id":"186" , "areacode":"34" , "ip":"192.168.3.186", "type":"3"},
    {"id":"187" , "areacode":"34" , "ip":"192.168.3.187" , "type":"3"} , {"id":"188" , "areacode":"34" , "ip":"192.168.3.188", "type":"3"}, {"id":"189" , "areacode":"34" , "ip":"192.168.3.189", "type":"3"}


];

//攻击详情路径
var attackComputer = [
    {"fromip":"192.168.3.101" , "toip":"192.168.3.114"} , {"fromip":"192.168.3.114" , "toip":"192.168.3.104"}, {"fromip":"192.168.3.104" , "toip":"192.168.3.111"},
    {"fromip":"192.168.3.111" , "toip":"192.168.3.124"} , {"fromip":"192.168.3.130" , "toip":"192.168.3.122"}
]
*/
/*TODO：1.修改攻击线路的锯齿效果
 *      2.修改tooltip，定宽，坐对齐，字体调小
 *      3.图标改为原始大小*/
        

//获取所有数据
var getData1 =  $.ajax({
        type : 'get',
        url : "http://192.168.3.55:8999/data-trans/area",
       // contentType: "application/json; charset=utf-8",
        dataType : 'json',
        success : function(data){
           console.log("success");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        },
        //支持同步
        async :false,  
    });
   
   var getTransData = JSON.parse(getData1.responseText);
  
  var data = JSON.parse(getTransData.area);
  var computerData = JSON.parse(getTransData.assets);
  var attackComputer = JSON.parse(getTransData.attack).trackers;
  
/*  attackComputer = [
                    {"fromip":"192.168.6.55" , "toip":"192.168.6.200" , "parentclassifyid":"0"} ,{"fromip":"192.168.6.120" , "toip":"192.168.3.54" , "parentclassifyid":"1"} ,
                    {"fromip":"192.168.6.120" , "toip":"192.168.0.1" , "parentclassifyid":"2"} ,{"fromip":"192.168.2.120" , "toip":"192.168.3.54" , "parentclassifyid":"3"} ,
                    {"fromip":"192.168.2.120" , "toip":"192.168.3.55" , "parentclassifyid":"4"} ,{"fromip":"192.168.6.120" , "toip":"192.168.0.12" , "parentclassifyid":"5"} ,
                    {"fromip":"192.168.4.120" , "toip":"192.168.0.22" , "parentclassifyid":"6"} , {"fromip":"192.168.6.55" , "toip":"192.168.3.55" , "parentclassifyid":"7"} ,
                    
                    {"fromip":"192.168.6.151" , "toip":"192.168.6.67" , "parentclassifyid":"8"} ,{"fromip":"192.168.6.153" , "toip":"192.168.3.54" , "parentclassifyid":"9"} ,
                    {"fromip":"192.168.6.119" , "toip":"192.168.0.13" , "parentclassifyid":"10"} ,{"fromip":"192.168.6.250" , "toip":"192.168.6.133" , "parentclassifyid":"11"} ,
                    {"fromip":"192.168.6.189" , "toip":"192.168.3.13" , "parentclassifyid":"12"} ,{"fromip":"192.168.6.120" , "toip":"192.168.6.1" , "parentclassifyid":"13"} ,
                    {"fromip":"192.168.6.163" , "toip":"192.168.3.59" , "parentclassifyid":"14"} , {"fromip":"198.162.4.123" , "toip":"192.168.3.55" , "parentclassifyid":"15"} ,
                    
                    {"fromip":"192.168.6.25" , "toip":"192.168.3.60" , "parentclassifyid":"16"} ,{"fromip":"192.168.31.145" , "toip":"192.168.6.19" , "parentclassifyid":"17"} ,
                    {"fromip":"192.168.4.162" , "toip":"192.168.3.10" , "parentclassifyid":"18"} ,{"fromip":"192.168.6.190" , "toip":"192.168.6.189" , "parentclassifyid":"19"} 
                ];*/
  
  //attackComputer =  {"error":"1"};
  
 
  
  if (attackComputer.error == "1"){
	  attackComputer = [];
	  setTimeout("delay()" , 5500);
  }



//取屏幕宽高,svg不占满屏幕
 var width = window.innerWidth * 0.7 ;
/*var width = 800 ;*/
var height = window.innerHeight * 0.9 ;


//初始化对象以及高度，留出一定空白
var obj = new Object();
obj.col1 = 60;
obj.col2 = 60;
obj.col3 = 60;
var col;

var attackColor = ["#ffa12d" , "#ff4b3f" , "#ff631a" , "#ff485e" , "#ff58b0" , "#e74dff" , "#8f2fff" , "#735cff" , "#4883ff" , "#15adff" ,
                   "#5ac3ff" , "#11e2e2" , "#41c2af" , "#23e7a7" , "#a3d56e" , "#31f16a" , "#29ad10" , "#e2b533" , "#f4d354" , "ffe812"];

//每一列的宽度
var colWidth = 360;
//子区域宽度 200*0.9
var childColWidth = 320;
var childColHeight = 42;


//转化父区域后的数据
var transData = [];
var transChildData = [];
var transLogo = [];
var transGrandChild = [];
var transLogoArea = [];

//用于接收接口数据
var rectData = [];
var childRectData = [];
var grandChildData = [];


separate(data , grandChildData);
transOriData(grandChildData , computerData , childRectData , rectData);



//得到相关布局数据

var rect = new Object();
function getRectLayout(){


    //对每个rect计算x，y并更新obj的列高
    for (var i=0; i<transData.length ; i++) {

        //计算父区域布局
        calculate(obj,transData[i] , childRectData , grandChildData);

    }
    
   
    //将父区域数据，子区域数据，区域logo数据返回回去
    rect.father = transData;
    rect.child = transChildData;
    
    rect.grandChild = transGrandChild;

    rect.computer = getComputer(rect.child , grandChildData , computerData );
    rect.logo = transLogo;
    rect.logoArea = transLogoArea;
    rect.attack = getAttack(rect.computer , attackComputer);
    rect.rectAttack = getRectAttack(rect.father ,data);
    
    //屏幕适高
    var winHeight = Math.max(obj.col1 , obj.col2 , obj.col3);

    rect.winHeight = winHeight + 60;
    return rect;
}






//把所有的区块拆分成父区域和子区域
function separate(data , grandChildData){
    var isGrandChild = false;

    for(var i=0; i<data.length ; i++) {
        if (data[i].pid == "0") {
            rectData.push(data[i]);
        }else {

            //查询data[i]的子区域 , grandChildData
            for (var j=0 ; j<data.length ; j++) {
                if (data[i].id == data[j].pid){
                    grandChildData.push(data[j]);
                    data[j].isGrandChild = true;
                    //表明改区域下有曾子区域
                    data[i].hasGrandChild = true;
                }
            }
            //childData
            if (!data[i].isGrandChild){
                childRectData.push(data[i]);
            }



        }
    }

}






//转化相关布局数据
function transOriData(grandChildData , computerData , childRectData , rectData){

    //计算曾子区域电脑数
    for (var k=0 ; k<grandChildData.length ; k++) {
        //电脑数
        var ChildComnum = 0;
        //计算子区域电脑数
        for (var j=0 ; j<computerData.length ; j++) {

            //修改区域图标
           /* if (computerData[j].type == "PC"){
                computerData[j].type = "0";
            }else if (computerData[j].type == "SERVER"){
                computerData[j].type = "2";
            }
*/


            if (grandChildData[k].id == computerData[j].areacode){
                ChildComnum ++;
                grandChildData[k].comNum = ChildComnum;
            }


        }

        //单个子区域的height=120;如果区域内没有点脑，则不显示
        if (ChildComnum > 0){
            grandChildData[k].height = (Math.ceil(ChildComnum/6)-1) *childColHeight + 90;
        }else{
            grandChildData[k].height = 0;

        }
    }





    //遍历电脑数据，来确定区域高度
    for (var i=0; i<childRectData.length ; i++) {

        //初始化变量
        childRectData[i].height = 0;
        //电脑数
        var Comnum = 0;
        //计算子区域电脑数
        for (var j=0 ; j<computerData.length ; j++) {

            //修改区域图标
            //TODO:增加多种图标样式
         /*   if (computerData[j].type == "PC"){
                computerData[j].type = "0";
            }else if (computerData[j].type == "SERVER"){
                computerData[j].type = "2";
            }*/


            if (childRectData[i].id == computerData[j].areacode){
                Comnum ++;
                childRectData[i].comNum = Comnum;
            }


        }

        //一行容纳6台电脑，超出一行的向下取整，暂无下线

        //单个子区域的height=120;如果区域内没有点脑，则不显示
        if (Comnum > 0){
            childRectData[i].height = (Math.ceil(Comnum/6)-1) *childColHeight + 80;
        }else{
            childRectData[i].height = 0;

        }

        //计算含有曾子区域的rect高度
        if (childRectData[i].hasGrandChild){
            for (var h=0 ; h<grandChildData.length ; h++){
                childRectData[i].height += grandChildData[h].height + 30;
            }
        }

    }



    //转化父区域原始数据
    for (var j=0; j<rectData.length ; j++){


        //匹配图片
        if ((rectData[j].imgnormal == "1.png") || (rectData[j].imgnormal == "2.png") || (rectData[j].imgnormal == "3.png")){
            rectData[j].img = "img/oa.png";
            rectData[j].backgroundColor = "#F2FAEA";
            rectData[j].titleColor = "#527706";
            rectData[j].strokeColor = "#527706";
            rectData[j].childBorderColor = "#A1D186";
            rectData[j].childFontColor = "#527706";
        }else if(rectData[j].imgnormal == "4.png"){
            rectData[j].img = "img/test.png";
            rectData[j].backgroundColor = "#EAF5FA";
            rectData[j].titleColor = "#148EE2";
            rectData[j].strokeColor = "#148EE2";
            rectData[j].childBorderColor = "#A1D5F8";
            rectData[j].childFontColor = "#148EE2";
        }else if(rectData[j].imgnormal == "5.png") {
            rectData[j].img = "img/sale.png";
            rectData[j].backgroundColor = "#F9E5DA";
            rectData[j].titleColor = "#E45416";
            rectData[j].strokeColor = "#E45416";
            rectData[j].childBorderColor = "#D8AD90";
            rectData[j].childFontColor = "#E45416";
        }


        //取子区域的个数

        var rectObj = new Object();
        rectObj.height = 0;
        rectObj.width = colWidth ;


        var childNum = 0;
        var computerNum = 0;
        //计算父区域的高度
        for(var i=0; i<childRectData.length ; i++) {

            if (rectData[j].id == childRectData[i].pid) {
                rectObj.height += childRectData[i].height;
                childNum ++;
                //TODO：可以添加区域间的电脑
            }
        }
       //如果没有子区域
        if (childNum == 0){
        	for (var k=0 ; k<computerData.length ; k++){
        		//但是父区域内有电脑
        		if (rectData[j].id == computerData[k].areacode){
        			computerNum ++;
        		}
        	}
        }
        
        rectObj.height += Math.ceil(computerNum/6)*childColHeight*0.9;

        //加上头坐标的高度
        rectObj.height += 80;



        //其余变量赋值
        rectObj.id = rectData[j].id;
        rectObj.pid = rectData[j].pid;
        rectObj.img = rectData[j].img;
        //接口为name，画图为rectName
        rectObj.rectName = rectData[j].name;
        //区域配色传值
        rectObj.backgroundColor = rectData[j].backgroundColor;
        rectObj.titleColor = rectData[j].titleColor;
        rectObj.strokeColor = rectData[j].strokeColor;
        rectObj.childBorderColor = rectData[j].childBorderColor;
        rectObj.childFontColor = rectData[j].childFontColor;

        //转化后的副区域数据
        transData[j] = rectObj;




    }


}









function getComputer(transChildData , grand , computerData) {



	//子区域电脑排版
    for (var j=0; j<transChildData.length; j++){
        //起始为0,一行四个，间距20
        var colnNum = 0;
        var rowNum = 0;
        var step;
        for(var i=0; i<computerData.length; i++){

            //计算computer的下，x，y坐标
            if(transChildData[j].id == computerData[i].areacode){
                step = colnNum % 6 * 40 + 15;
                computerData[i].x = transChildData[j].x + step;
                computerData[i].y = transChildData[j].y + rowNum*30 + 40;

                colnNum++;
                if(colnNum%6 == 0){
                    rowNum++;
                }


            }


            //根据数字对应图片类型
            switch (computerData[i].type){
                case "PC":
                    computerData[i].img = "img/computer1.png";
                    break;
                case "1":
                    computerData[i].img = "img/computer2.png";
                    break;
                case "SERVER":
                    computerData[i].img = "img/server.png";
                    break;
                case "3":
                    computerData[i].img = "img/firewall.png";
                    break;
            }

        }
    }
    
    //父区域电脑布局
    for (var k=0; k<transData.length; k++){
        //起始为0,一行四个，间距20
        var colnNum = 0;
        var rowNum = 0;
        var step;
        for(var i=0; i<computerData.length; i++){

            //计算computer的下，x，y坐标
            if(transData[k].id == computerData[i].areacode){
                step = colnNum % 6 * 40 + 25;
                computerData[i].x = transData[k].x + step;
                computerData[i].y = transData[k].y + rowNum*33 + 60;

                colnNum++;
                if(colnNum%6 == 0){
                    rowNum++;
                }


            }


            //根据数字对应图片类型
            switch (computerData[i].type){
                case "PC":
                    computerData[i].img = "img/computer1.png";
                    break;
                case "1":
                    computerData[i].img = "img/computer2.png";
                    break;
                case "SERVER":
                    computerData[i].img = "img/server.png";
                    break;
                case "3":
                    computerData[i].img = "img/firewall.png";
                    break;
            }

        }
    }



    //曾子区域电脑布局
    for (var h=0; h<grand.length; h++){
        //起始为0,一行四个，间距20
        var colnNum1 = 0;
        var rowNum1 = 0;
        var step1;
        for(var i=0; i<computerData.length; i++){

            //计算computer的下，x，y坐标
            if(grand[h].id == computerData[i].areacode){
                step1 = colnNum1 % 6 * 40 + 15;
                computerData[i].x = grand[h].x + step1;
                computerData[i].y = grand[h].y + rowNum1*30 + 43;

                colnNum1++;
                if(colnNum1%6 == 0){
                    rowNum1++;
                }



            }


            //根据数字对应图片类型
            switch (computerData[i].type){
                case "PC":
                    computerData[i].img = "img/computer1.png";
                    break;
                case "1":
                    computerData[i].img = "img/computer2.png";
                    break;
                case "SERVER":
                    computerData[i].img = "img/server.png";
                    break;
                case "3":
                    computerData[i].img = "img/firewall.png";
                    break;
            }

        }
    }

    return computerData;



}







//计算父区域布局
function calculate(obj,rect ) {
    var array = [obj.col1 , obj.col2 , obj.col3 ];


    //最小列的序号
    var min = array.indexOf(Math.min.apply(Math, array));

    //列宽为1

    //整体右移
    rect.x = min*colWidth + width*0.18;
    rect.y = Math.min.apply(Math, array) ;

    //增加列高
    switch (min) {
        case 0:
            obj.col1 = obj.col1 + rect.height + 15;
            break;
        case 1:
            obj.col2 = obj.col2 + rect.height + 15;
            break;
        case 2:
            obj.col3 = obj.col3 + rect.height + 15;
            break;

    }




   

    //找到对应的子区域，计算子区域的布局数据
    //对子区域数据进行转化
    //子区域布局对象
    var childRect;
    var grandChildRect;
    //区域logo布局对象
    var logoRect;
    //logo外区域
    var logoAreaRect;

    var temp = 0;

    var lastHeight = 0;
    var lastChildHeigh = 0;


    for(var m=0; m<childRectData.length ; m++){
        var grandNum = 0;

        if((rect.id == childRectData[m].pid) && (childRectData[m].height>0)) {



            childRect = new Object();
            childRect.x = rect.x + 20;
            childRect.y = (rect.y + 55) + lastHeight;
            childRect.width =  childColWidth;
            //height之前计算过

            childRect.id = childRectData[m].id;
            childRect.pid = rect.id;
            childRect.rectName = childRectData[m].name;
            childRect.height = childRectData[m].height ;
            childRect.borderColor = rect.childBorderColor;
            childRect.fontColor = rect.childFontColor;
            lastHeight +=childRect.height;
            transChildData.push(childRect);
            



            //对曾子区域计算布局
            if(childRectData[m].hasGrandChild){
                for (var j=0 ; j<grandChildData.length ; j++){
                    grandChildRect = new Object();
                    grandChildRect.x = childRect.x + 13;
                    grandChildRect.y = childRect.y + 37 + lastChildHeigh;
                    grandChildRect.width =  childColWidth * 0.9;
                    grandChildRect.height = grandChildData[j].height;
                    lastChildHeigh += grandChildRect.height;
                    grandChildRect.id = grandChildData[j].id;
                    grandChildRect.pid = rect.id;
                    grandChildRect.rectName = grandChildData[j].name;
                    grandNum ++;
                    transGrandChild.push(grandChildRect);
                }

            }


            temp++;


        }

    }
    
    logoRect = new Object();
    logoRect.x = rect.x + 130;
    logoRect.y = rect.y + 40;
    logoRect.img = rect.img;
    transLogo.push(logoRect);
    
    
    logoAreaRect =   new Object();
    logoAreaRect.x = rect.x + 20;
    logoAreaRect.y = rect.y ;
    logoAreaRect.width = 300;
    logoAreaRect.height = 150;
    logoAreaRect.backgroundColor = rect.backgroundColor;
    logoAreaRect.titleColor = rect.titleColor;
    logoAreaRect.strokeColor = rect.strokeColor;
    logoAreaRect.rectName = rect.rectName;
    transLogoArea.push(logoAreaRect);



}




//计算攻击详情路径
function getAttack(com , attackComputer){
	
	console.log("进入函数getAttack");
	
    var map = {};

    var attackObj1;
    var attackObj2;
    var attack;
    //存放攻击点和攻击线的数据
    var realAttackPoint = [];
    var realAttackLine = [];
    //
    var realWidth = window.innerWidth;
    for(var i=0; i<com.length; i++){
        map[com[i].ip] = com[i];
    }
    
    var marginleft = window.innerWidth * 0.05 + 100;
    
    var marginAttack = 5;
    
    //外界电脑的列高，并设定起始高度
    var outsideCol = 60;
    //外界电脑间隔
    var marginComputer = 40;
    //存放外界电脑
    var outsideCom = [];
    //记录外界电脑,用未攻击状态表示
    var outsideObj;
    //是否已经绘制电脑标记
    var comFlag = false;




    for(var j=0 ; j<attackComputer.length; j++){

    	//攻击点的对象
        attackObj1 = new Object();
        //攻击线的对象
        attackObj2 = new Object();


        //处理toip未录入的情况
    	 if (map[ attackComputer[j].toip ] == null){
    		 //判断该ip是否已经绘制
    		 for (var t=0 ; t<outsideCom.length ; t++){
    			 //该点已经绘制，则不再绘制
    			 if (attackComputer[j].toip == outsideCom[t].ip){
    				 attackObj1.x = marginleft;
    	    		 attackObj1.y = outsideCom[t].y;
    	    		 attackObj2.x2 = marginleft;
    	    	     attackObj2.y2 = outsideCom[t].y;
    	    	     comFlag = true;
    	    	     
    			 }
    		 }
    		 
    		 //未绘制该点
    		 if (!comFlag){
    			 outsideCol = outsideCol + marginComputer;
        		 attackObj1.x = marginleft;
        		 attackObj1.y = outsideCol;
        		 attackObj2.x2 = marginleft;
        	     attackObj2.y2 = outsideCol;
        	     //push到outsideCom集合中
        	     outsideObj = new Object();
        	     outsideObj.id = attackComputer[j].id;
        	     outsideObj.ip = attackComputer[j].toip;
        	     outsideObj.x = marginleft;
        	     outsideObj.y = outsideCol;
        	     outsideObj.img = "img/computer1.png";
        	     outsideCom.push(outsideObj);
    		 }
    		 //重置
    		 comFlag = false;
    		 
    	     
    	 }else{
    		//只取被攻击点的坐标
    	        attackObj1.x = map[ attackComputer[j].toip].x;
    	        attackObj1.y = map[ attackComputer[j].toip].y;
    	        
    	        attackObj2.x2 = map[ attackComputer[j].toip].x;
    	        attackObj2.y2 = map[ attackComputer[j].toip].y;
    	 }
    	 
    	
    	 
    	//处理fromip未录入的情况
    	 if (map[ attackComputer[j].fromip ] == null){
    		//判断该ip是否已经绘制
    		 for (var t=0 ; t<outsideCom.length ; t++){
    			 //该点已经绘制，则不再绘制
    			 if (attackComputer[j].fromip == outsideCom[t].ip){
    	    		 attackObj2.x1 = marginleft;
    	    	     attackObj2.y1 = outsideCom[t].y;
    	    	     comFlag = true;
    			 }
    		 }
    		//未绘制该点
    		 if (!comFlag){
     		    outsideCol = outsideCol + marginComputer;
     	        attackObj2.x1 = marginleft;
     	        attackObj2.y1 = outsideCol;
     	        
     	         outsideObj = new Object();
	      	     outsideObj.id = attackComputer[j].id;
	      	     outsideObj.ip = attackComputer[j].fromip;
	      	     outsideObj.x = marginleft;
	      	     outsideObj.y = outsideCol;
	      	     outsideObj.img = "img/computer1.png";
	      	     outsideCom.push(outsideObj);
    		 }
    		 //重置
    		 comFlag = false;
    		
    	        
    	 }else {
    		 //push攻击线的坐标
    	        attackObj2.x1 = map[ attackComputer[j].fromip].x;
    	        attackObj2.y1 = map[ attackComputer[j].fromip].y;
    	        
		}
    	 
    	 if (attackComputer[j].attacktitle == null){
    		 attackObj2.attackType = "未知类型";
    	 }else{
    		 attackObj2.attackType = attackComputer[j].attacktitle;
    	 }
    	 
    	 //其余变量赋值
    	 attackObj1.parentclassifyid = attackComputer[j].parentclassifyid;
    	 attackObj1.attackColor = attackColor[ attackComputer[j].parentclassifyid ];
    	 attackObj1.x = attackObj1.x + 10;
    	 attackObj1.y = attackObj1.y + 10;
    	 
    	 
    	 attackObj2.fromip = attackComputer[j].fromip;
    	 attackObj2.toip = attackComputer[j].toip;
    	 attackObj2.attacktime = attackComputer[j].attacktime;
    	 attackObj2.parentclassifyid = attackComputer[j].parentclassifyid;
    	 attackObj2.attackColor = attackColor[ attackComputer[j].parentclassifyid ];
    	 attackObj2.x1 = attackObj2.x1 + 10;
    	 attackObj2.y1 = attackObj2.y1 + 10;
    	 attackObj2.x2 = attackObj2.x2 + 10;
    	 attackObj2.y2 = attackObj2.y2 + 10;
    	
    	 //去除外界的被攻击电脑
    	 if ( map[attackComputer[j].toip] != null){
    		 
    		 var attImg = map[attackComputer[j].toip].type;
    		 //被攻击的图标类型
        	 if ("PC" == attImg){
        		 attackObj2.attImg = "img/computer2.png";
        	 }else if ("SERVER" == attImg){
        		 attackObj2.attImg = "img/server2.png";
        	 }
    	 }else{
    		 //外界区域统一为PC图标
    		 attackObj2.attImg = "img/computer2.png";
    	 }
    	 
    	
    	
     
        
        realAttackPoint.push(attackObj1);
        realAttackLine.push(attackObj2);
        
       
    }	


    attack = new Object();
    attack.realAttackPoint = realAttackPoint;
    attack.realAttackLine = realAttackLine;
    attack.outsideCom = outsideCom;

    return attack;

}

//计算区域攻击路径
function getRectAttack(rect , data){
	
	var map1 = {};
	var attack ; 
	for(var i=0; i<computerData.length; i++){
        map1[computerData[i].ip] = computerData[i];
    }
	var map2 = {};
	for (var i=0 ; i<data.length ; i++){
		map2[data[i].id] = data[i];
	}
	var map3 = {};
	for (var i=0 ; i<rect.length ; i++){
		map3[rect[i].id] = rect[i];
	}
	 var rectAttack ;
	 var rectAttackPoint = [];
	 var rectAttackLine = [];
	 
	 var marginleft = window.innerWidth * 0.05 + 100;
	 
	 
	
	for (var j=0 ; j<attackComputer.length ; j++){
		
		var attPoint = new Object();
		var attLine = new Object();
		
		
		//未录入的机器fromip
		if (map1[attackComputer[j].fromip] == null){
			attLine.x1 = marginleft;
	        attLine.y1 = 80;
		}
		//已录入的机器他toip
		else{
			//找到电脑对应的区域id
			//找到区域的父区域,这里只处理两层
			var fromid = (map1[attackComputer[j].fromip]).areacode;
			var fatherFromId = (map2[fromid]).pid;
			//在区域中直接有电脑的情况
			if (fatherFromId == 0){
				fatherFromId = fromid;
			}
			attLine.x1 = map3[fatherFromId].x + map3[fatherFromId].width/2;
		    attLine.y1 = map3[fatherFromId].y + 80;
		       
		}
		
		
		//未录入的机器
		if (map1[attackComputer[j].toip] == null){
			
			attPoint.x = marginleft;
			attPoint.y = 80;
			attLine.x2 = marginleft;
	        attLine.y2 = 80;
		}
		//已录入的机器他toip
		else{
			//找到电脑对应的区域id
			//找到区域的父区域,这里只处理两层
			var toid = (map1[attackComputer[j].toip]).areacode;
			var fatherToId = (map2[toid]).pid;
			//在区域中直接有电脑的情况
			if (fatherToId == 0){
				fatherToId = toid;
			}
			
			attPoint.x = map3[fatherToId].x + map3[fatherToId].width/2;
			attPoint.y = map3[fatherToId].y + 80;
			attLine.x2 = attPoint.x;
		    attLine.y2 = attPoint.y;
		}
		
		
		//区域攻击的point和line的color赋值
		attPoint.attackColor = attackColor[ attackComputer[j].parentclassifyid ];
		attLine.attackColor = attackColor[ attackComputer[j].parentclassifyid ];
	
		
		rectAttackPoint.push(attPoint);
        rectAttackLine.push(attLine);
	}
	
	rectAttack = new Object();
	rectAttack.rectAttackPoint = rectAttackPoint;
	rectAttack.rectAttackLine = rectAttackLine;
    
    return rectAttack;
}



function delay(){
    ymPrompt.alert({ message: "攻击读取数据有误", width: 250, height: 160, title:  "提示", titleBar: true, showShadow: true });
}




