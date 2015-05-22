/**
 * Created by ljy on 15/5/21.
 */
//定义React组件
var EzLedComp = React.createClass({
    //在meta中，至少需要实现一个render()方法，而这个方法， 必须而且只能返回一个有效的React元素
    render : function(){
        var e = React.createElement(
            "div",
            {className : "ez-led"},
            "Hello, React!"
        );
        //render()方法应该返回一个React元素
        return e;
    }
});
//创建React元素,这个元素的类型是EzLedComp
//组件相当于类，元素相当于实例
var el = React.createElement(EzLedComp);

//渲染
//jsx写法中看起来可以直接将组件渲染到dom，其实预编译后自动创建了该组建的元素，然后把元素渲染到dom
React.render(el,document.querySelector("#content"));
