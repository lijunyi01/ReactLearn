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
        entry
    };
}

export { setState , vote };

