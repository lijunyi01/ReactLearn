import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';
import Winner from './Winner';
import Vote from './Vote';
import { connect } from 'react-redux';

//const pair = ['Trainspotting', '28 Days Later'];
export const Voting = React.createClass({
    //申明组件参数是不可变参数，启动浅对比，提高组件渲染性能
    mixins: PureRenderMixin,

    render() {
        return <div>
            {this.props.winner ?
                //注意这里我们为胜利组件添加了ref，这是因为我们将在单元测试中利用它获取DOM节点
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner')
    };
}

//该函数的作用就是将Redux Store中的状态数据映射到props对象中。这个props对象将会用于连接到的组件中。
//connect函数返回的是一个Voting组件的连接版，我们称之为VotingContainer
export const VotingContainer = connect(mapStateToProps)(Voting);

//这个模块现在导出两个组件：一个纯Voting组件，一个连接后的VotingContainer版本。