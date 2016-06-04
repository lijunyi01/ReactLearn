/**
 * Created by ljy on 16/2/18.
 */
import { List, Map } from 'immutable';
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
    const currentPair = state.getIn(['vote', 'pair'], List());
    if (hasVoted && !currentPair.includes(hasVoted)) {
        return state.remove('hasVoted');
    } else {
        return state;
    }
}

export default function(state = Map(), action={}) {
    switch (action.type) {
        case 'SET_STATE':
            //return setState(state, action.state);
            return resetVote(setState(state, action.state));
        case 'VOTE':
            return vote1(state, action.entry);
    }
    return state;
}
