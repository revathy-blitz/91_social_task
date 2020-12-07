// Constants for local environment. Pulls in env variables set up in your bash profile
// This variables won't populate if you haven't set up any local profiles in your machine

/* eslint-disable no-console */
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const isClient = typeof window !== 'undefined';

const BASE_URL_API = publicRuntimeConfig.API_BASE_URL;
if (isClient) {
    console.log(`BASE_URL_API is defined as ${BASE_URL_API} on the client-side`);
} else {
    console.log(`BASE_URL_API is defined as ${BASE_URL_API} on the server-side`);
}

// Enable CORS in for localhost only
const LOCAL_CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
};

const NODE_ENV = process.env.NODE_ENV || 'development';
export default {
    BASE_URL_API,
};
