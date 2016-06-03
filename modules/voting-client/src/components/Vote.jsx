import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';

//export default React.createClass({
//    mixins: PureRenderMixin,
//    getPair: function() {
//        return this.props.pair || [];
//    },
//    isDisabled: function() {
//        return !!this.props.hasVoted;
//    },
//    hasVotedFor: function(entry) {
//        return this.props.hasVoted === entry;
//    },
//    render() {
//        return <div className="voting">
//            {this.getPair().map(entry =>
//                    <button key={entry}
//                            disabled={this.isDisabled()}
//                            onClick={() => this.props.vote(entry)}>
//                        <h1>{entry}</h1>
//                        {this.hasVotedFor(entry) ?
//                            <div className="label">Voted</div> :
//                            null}
//                    </button>
//            )}
//        </div>;
//    }
//});

//ES6 class 写法，更接近java
export class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getPair() {
        return this.props.pair || [];
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }

    render() {
        return <div className="voting">
            {this.getPair().map(entry =>
                    <button key={entry}
                            disabled={this.isDisabled()}
                            onClick={() => this.props.vote(entry)}>
                        <h1>{entry}</h1>
                        {this.hasVotedFor(entry) ?
                            <div className="label">Voted</div> :
                            null}
                    </button>
            )}
        </div>;
    }
}

//export const Vote_Pure = Vote;
