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
//由硬编码改为接收服务端的action
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: {Sunshine: 2}
        },
        winner: 'Sunshine'
    }
});

//const socket = io('http://192.168.8.100:8090');
//侦听来自服务端的state事件
//socket.on('state', state =>
//        store.dispatch({type: 'SET_STATE', state})
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