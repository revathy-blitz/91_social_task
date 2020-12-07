import axios from 'axios';
import Constants from '../../constants';

// API for any auth related services

export const spacexHistory = () => (
    axios.get(`${Constants.BASE_URL_API}/v3/history`, 
        Constants.NODE_ENV === 'development' ? Constants.LOCAL_CORS_HEADERS : '')
        .then(payload => payload)
        .catch(error => error.response)
);


export const spacexPayload = () => (
    axios.get(`${Constants.BASE_URL_API}/v3/payloads`, 
        Constants.NODE_ENV === 'development' ? Constants.LOCAL_CORS_HEADERS : '')
        .then(payload => payload)
        .catch(error => error.response)
);
