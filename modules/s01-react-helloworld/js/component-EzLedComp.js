/**
 * Created by ljy on 15/5/21.
 */
//定义React组件，组件名头字母大写
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

