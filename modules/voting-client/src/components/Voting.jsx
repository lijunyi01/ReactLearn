import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { render } from 'react-dom';
import { Winner } from './Winner';
import { Vote } from './Vote';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';


//const pair = ['Trainspotting', '28 Days Later'];
//export const Voting = React.createClass({
//    //申明组件参数是不可变参数，启动浅对比，提高组件渲染性能
//    mixins: [PureRenderMixin],
//
//    render() {
//        return <div>
//            {this.props.winner ?
//                //注意这里我们为胜利组件添加了ref，这是因为我们将在单元测试中利用它获取DOM节点
//                <Winner ref="winner" winner={this.props.winner} /> :
//                <Vote {...this.props} />}
//        </div>;
//    }
//});
//


//ES6 class 写法，更接近java
class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return <div>
            {this.props.winner ?
                //注意这里我们为胜利组件添加了ref，这是因为我们将在单元测试中利用它获取DOM节点
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />}
        </div>;
    }
}


//state: {
//    vote: {
//        pair: ['Sunshine', '28 Days Later', '功夫熊猫'],
//        tally: {'Sunshine': 2,'28 Days Later': 1,'功夫熊猫': 3}
//    },
//    winner: ''
//}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),    //两级取数据 vote->pair
        winner: state.get('winner'),        //一级取数据 winner
        hasVoted: state.get('hasVoted')
    };
}

//该函数的作用就是将Redux Store中的状态数据映射到props对象中。这个props对象将会用于连接到的组件中。
//connect函数返回的是一个Voting组件的连接版，我们称之为VotingContainer

//在我们的场景里，我们有一个需要vote回调函数props的Vote组件，我们同时拥有一个vote的action creator。它们的名字和函数签名完全一致（都接受一个用来表示
//选中项的参数）。现在我们只需要将action creators作为react-redux的connect函数的第二个参数，即可完成自动关联
//这么配置后，我们的Voting组件的vote参数属性将会与voteaciton creator关联起来。这样当点击某个投票按钮后，会导致触发VOTE动作
export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting);

//这个模块现在导出两个组件：一个纯Voting组件，一个连接后的VotingContainer版本。