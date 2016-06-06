import React from 'react';
import { render } from 'react-dom';
//<Router history={hashHistory}> 兼容低版本浏览器，前端路由通过＃，例如：http://localhost:8080/#/winner
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
//import Voting from './components/Voting';
//与纯组件Voting不同，VotingContainer 封装了纯组件和一些逻辑用来与Redux Store协同工作，这些特性是react-redux提供的
import { VotingContainer } from './components/Voting';
import App from './components/App';
//import Results from './components/Results';
import { ResultsContainer } from './components/Results';
//import Winner from './components/Winner';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import io from 'socket.io-client';


const store = createStore(reducer);
//硬编码store.dispatch(action)
store.dispatch({
    type: 'SET_STATE',
    //state 就是个Map，即key-value对。“vote”是state中的一个key，其对应的value也是一个Map (是否也就是个json对象？)
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later', '功夫熊猫'],
            tally: {'Sunshine': 2,'28 Days Later': 1,'功夫熊猫': 3}
        },
        winner: ''
    }
});

//const socket = io('http://192.168.8.100:8090');
//侦听来自服务端的state事件
//socket.on('state', state =>
//        store.dispatch(setState(state))
//);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={VotingContainer}/>
                <Route path="results" component={ResultsContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);