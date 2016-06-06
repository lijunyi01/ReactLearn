/**
 * Created by ljy on 16/2/18.
 */

//Actions 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。用法是通过 store.dispatch() 把 action 传到 store

//Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。
//这是 reducer 要做的事情。Action 就像leader，告诉我们应该做哪些事，并且给我们提供‘资源（就是上面说的数据）’，真正干活的是苦逼的Reducer,Reducer就是个普通的回调函数
//当Reducer被Redux调用的时候,Redux会为Reducer传递两个参数State 和 Action
//真正开发项目的时候State会涉及很多功能，在一个Reducer处理所有逻辑会非常混乱，所以需要拆分成多个小Reducer，每个Reducer只处理它管理的那部分State数据。然后再由一个主rootReducers来专门管理这些小Reducer。Redux提供了一个方法 combineReducers 专门来管理这些小Reducer。
//Reducer有三点需要注意:
//- 不要修改 state。以下函数未真正修改原state,最多只是修改了形参并返回。最终由store真正修改state
//- 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
//- 如果没有旧的State，就返回一个initialState，这很重要！！！

//Store 就是把action和reducer联系到一起的对象。(store.dispatch(action)被调用时reducer的默认输出函数就会被调用，因为store创建时就注册了reducer -- const store = createStore(reducer))
// Store 有以下职责：
//- 维持应用的 state；
//- 提供 getState() 方法获取 state；
//- 提供 dispatch(action) 方法更新 state；
//- 通过 subscribe(listener) 注册监听器。

//import { List, Map } from 'immutable';
import { Map } from 'immutable';
function setState(state, newState) {
    return state.merge(newState);
}

function vote1(state, entry){
    const currentPair = state.getIn(['vote','pair']);
    if (currentPair && currentPair.includes(entry)) {
        return state.set('hasVoted', entry);
    }else{
        return state;
    }
}

function resetVote(state) {
    const hasVoted = state.get('hasVoted');
    const currentPair = state.getIn(['vote', 'pair']);
    if (hasVoted && !currentPair.includes(hasVoted)) {
        return state.remove('hasVoted');
    } else {
        return state;
    }
}

//由于 const store = createStore(reducer); 因此reducer 和store是绑定的，而以下函数是reducer.js的默认输出函数,因此函数的
//第一个参数state可以理解为是由框架（redux）自动从store里读取当前的state并传入该函数；第二个参数是reducer要处理的action
//框架决定了只要store.dispatch(action)被调用，以下reducer的默认输出函数就会被调用，且action被作为参数传递给以下函数

//action={} 表示action的初始值是个空的js对象，js对象即可以是key-value对的集合，也可以是函数体等
//state = Map() 表示state的初始值是个空的Map，map是key-value对的集合，是js对象的子集
export default function(state = Map(), action={}) {
    switch (action.type) {
        case 'SET_STATE':
            //return setState(state, action.statedata);
            return resetVote(setState(state, action.statedata));
        case 'VOTE':
            return vote1(state, action.voteresult);
    }
    return state;
}
