/*
eslint react/no-danger: 0,
*/
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    html, body { height: 100%; width: 100%;}
    body {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin: 0;
        background-color: white;
        color: #333;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        letter-spacing: .2pt;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
    }
    #__next {
        min-height: 100%;
        display: flex;
    }
`;

// this is where you would add in link or meta tag for your application
// this is also where  you would describe any server side styling or html for the application

export default class MyDocument extends Document {
    static getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {
            ...page,
            styleTags,
        };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    {this.props.styleTags}
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
                    />
                    <meta name="theme-color" content="#673ab7" />
                    <link rel="icon" href="/img/favicon.png" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,500,600,700" rel="stylesheet" />
                </Head>
                <body>
                    <GlobalStyle />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
