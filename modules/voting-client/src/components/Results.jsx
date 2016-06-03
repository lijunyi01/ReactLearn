import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Winner } from './Winner';


//export const Results = React.createClass({
//    mixins: PureRenderMixin,
//    getPair: function() {
//        return this.props.pair || [];
//    },
//    getVotes: function(entry) {
//        if (this.props.tally && this.props.tally.has(entry)) {
//            return this.props.tally.get(entry);
//        }
//        return 0;
//    },
//    render() {
//        return this.props.winner ?
//            <Winner ref="winner" winner={this.props.winner} /> :
//            <div className="results">
//                <div className="tally">
//                    {this.getPair().map(entry =>
//                            <div key={entry} className="entry">
//                                <h1>{entry}</h1>
//                                <div className="voteCount">
//                                    {this.getVotes(entry)}
//                                </div>
//                            </div>
//                    )}
//                </div>
//                <div className="management">
//                    <button ref="next"
//                            className="next"
//                            onClick={this.props.next}>
//                        Next
//                    </button>
//                </div>
//            </div>;
//    }
//});


//ES6 class 写法
class Results extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getPair() {
        return this.props.pair || [];
    }

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    }

    render() {
        return this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <div className="results">
                <div className="tally">
                    {this.getPair().map(entry =>
                            <div key={entry} className="entry">
                                <h1>{entry}</h1>
                                <div className="voteCount">
                                    {this.getVotes(entry)}
                                </div>
                            </div>
                    )}
                </div>
                <div className="management">
                    <button ref="next"
                            className="next"
                            onClick={this.props.next}>
                        Next
                    </button>
                </div>
            </div>;
    }
}

//export const Results_Pure = Results;

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(mapStateToProps)(Results);
