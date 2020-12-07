// config file for NextJS. Please refer to NextJS's documentation for more information.

//This config is setup to handle CSS and images for nextJS to handle during serverside rendering

const nextBuildId = require('next-build-id');
const withImages = require('next-images');
const withCss = require('@zeit/next-css');

module.exports = withCss(withImages({
    publicRuntimeConfig: { // Will be available on both server and client
        API_BASE_URL: process.env.API_BASE_URL,
        API_AUTH_URL: process.env.API_AUTH_URL,
        API_DATA_URL: process.env.API_DATA_URL,
        SEARCH_APP_URL: process.env.SEARCH_APP_URL,
        IM_APP_URL: process.env.IM_APP_URL,
        NODE_ENV: process.env.NODE_ENV
    },
}));
