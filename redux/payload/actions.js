import * as t from './actionTypes';
import { spacexPayload } from '../../api/spacex';

// These action creator functions each returns an action which will get dispatched
// to its reducer

// retrieves user object and user profile

const getPayloadInitiated = () => ({
    type: t.GET_PAYLOAD_INITIATED,
});
export const getPayloadSucceeded = (user) => ({
    type: t.GET_PAYLOAD_SUCCEEDED,
    payload: user,
});
const getPayloadFailed = (res) => ({
    type: t.GET_PAYLOAD_FAILED,
    payload: res,
});

// These functions are thunk action functions that's used to do
// async api calls to retrieve information and then execute
// a sequence of other actions to update redux state

export const getPayloadAction = () => async (dispatch) => {
    dispatch(getPayloadInitiated());

    const res = await spacexPayload();

    if (res.status === 200) {
        const { data } = res;
        dispatch(getPayloadSucceeded(data));
        return data;
    }
    dispatch(getPayloadFailed(res));
    return null;
};
