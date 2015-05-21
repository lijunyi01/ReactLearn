/**
 * Created by ljy on 15/5/21.
 */

//在虚拟DOM上创建react元素el3,el3元素类型为html中的<ul>
var el3 = React.createElement(
    "ul",
    null,
    React.createElement("li",null,"China3"),
    React.createElement("li",null,"Japan3"),
    React.createElement("li",null,"Korea3")
);

//将虚拟DOM上的el3元素渲染到真实DOM上的#content3容器
React.render(el3,document.querySelector("#content3"));