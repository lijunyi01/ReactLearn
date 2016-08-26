/**
 * Created by ljy on 16/2/18.
 */

function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

function vote(entry) {
    return {
        type: 'VOTE',
        //entry  可以取代下行，虽不是键值对，但也可以构成js对象；在reducer.js里可以通过 action.entry直接引用；但用下行更习惯
        entry
    };
}

export { setState , vote };

