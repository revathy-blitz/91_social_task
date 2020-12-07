import * as spacex from './spacex';

// this is NextJS's new feature that automically handles api for the application
// https://nextjs.org/docs/api-routes/introduction for more information

// Returns the actual APIs
export default function () {
    return {
        spacex,
    };
}
