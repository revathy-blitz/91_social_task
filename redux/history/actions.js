import * as t from './actionTypes';
import { spacexHistory } from '../../api/spacex';

// These action creator functions each returns an action which will get dispatched
// to its reducer

const getHistoryInitiated = () => ({
    type: t.GET_HISTORY_INITIATED,
});
export const getHistorySucceeded = (user) => ({
    type: t.GET_HISTORY_SUCCEEDED,
    payload: user,
});
const getHistoryFailed = (res) => ({
    type: t.GET_HISTORY_FAILED,
    payload: res,
});

// These functions are thunk action functions that's used to do
// async api calls to retrieve information and then execute
// a sequence of other actions to update redux state

export const getHistoryAction = () => async (dispatch) => {
    dispatch(getHistoryInitiated());

    const res = await spacexHistory();

    if (res.status === 200) {
        const { data } = res;
        dispatch(getHistorySucceeded(data));
        return data;
    }
    dispatch(getHistoryFailed(res));
    return null;
};
