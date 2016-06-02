import React from 'react';
import { render } from 'react-dom';
export default React.createClass({
    render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
});