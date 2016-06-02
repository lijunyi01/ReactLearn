import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';
export default React.createClass({
    mixins: PureRenderMixin,
    render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
});