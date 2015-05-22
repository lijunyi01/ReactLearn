/**
 * Created by ljy on 15/5/21.
 */
//获取初始时间
var t0 = new Date().getTime();

//setInterval 和 setTimeout 是浏览器可以识别的两个定时器，相当于系统函数

//setInterval 会以设定间隔不断循环执行回调函数（从被加载开始计时），直至销毁
//16ms定时器
var intervalvar = setInterval(function(){
    //获取当前时间，计算已运行时长
    var  t = new Date().getTime(),
        delta = t - t0;

    //在虚拟DOM上创建元素
    var el = React.createElement("p",null,delta);

    //渲染到真实DOM
    React.render(el,document.querySelector("#content"));

    //数值到20000时销毁定时器
    if(delta>20000){
       clearInterval(intervalvar);
    }
},16);


//setTimeout 会以设定间隔执行一次回调函数（从被加载开始计时）
var timeoutvar = setTimeout(function(){
    //获取当前时间，计算已运行时长
    var  t = new Date().getTime(),
        delta = t - t0;

    //在虚拟DOM上创建元素
    var el = React.createElement("p",null,delta);

    //渲染到真实DOM
    React.render(el,document.querySelector("#content2"));

    //销毁定时器
    clearTimeout(timeoutvar);
},10000);
