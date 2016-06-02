import React from 'react';
import { render } from 'react-dom';

//const pair = List.of('Trainspotting', '28 Days Later');
export default React.createClass({
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
});
