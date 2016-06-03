import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';

//export default React.createClass({
//    mixins: PureRenderMixin,
//    render() {
//        return <div className="winner">
//            Winner is {this.props.winner}!
//        </div>;
//    }
//});

//ES6 class 写法
export class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
}