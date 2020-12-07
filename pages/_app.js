// pages/_app.js
import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { ToastContainer } from 'react-toastify';
import makeStore from '../redux/store';
import '../components/ReactToastify.css';
// this is where NextJS initializes the application

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };
    }

    render() {

        // Setup axios defaults
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        const {
            Component, pageProps, store,
        } = this.props;
        // Pass specific props to the view depending on if it's a regular view or an auth view (login, register)
        return (<>
                    <Head><title>Template</title></Head>
                    <Provider store={store}>
                        <Component
                            {...pageProps}
                        />
                        <ToastContainer
                            position="top-center"
                            autoClose={3500}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnVisibilityChange
                            pauseOnHover
                        />
                    </Provider>
                </>);
    }
}

export default withRedux(makeStore)(MyApp);
