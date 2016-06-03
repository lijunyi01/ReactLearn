import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';

//const pair = List.of('Trainspotting', '28 Days Later');
//export default React.createClass({
//    render() {
//        return (
//            <div>
//                {/*
//                 next we replace `<Child>` with `this.props.children`
//                 the router will figure out the children for us
//                 */}
//                {this.props.children}
//            </div>
//        )
//    }
//});


//ES6 class 写法
//export class App extends React.Component {  ; 直接在此export也可以，但在最后集中导出更清晰
class App extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        )
    }
}

export { App };
