/* react/static-property-placement: 0, react/default-props-match-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Router from 'next/router';
import { Home  } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

import theme from '../theme';

const StyledLayout = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    footer {
        margin-top: auto;
    }
    .nav {
        height: 50px;
        flex: 0 0 auto;
        background: ${theme.blueLowlight};
    }
`;

// transform translate3d(0,0,0) is required to activate chrome
// hardware aceleration or else it would cause a lag
// when scrolling through the table
const Container = styled.div`
    display: flex;
    width: 100%;
    .application {
        flex: 1 1 auto;
        overflow: scroll;
        transform: translate3d(0, 0, 0);
    }
    @media only screen and (max-width: ${theme.tabletSize}) {
        .nav {
            position: absolute;
            overflow-y: hidden;
        }
        .application {
            margin: 0 0 0 80px;
        }
    }
`;

// customization of NextJS application's layout

const Layout = (props) => {
    return (
        <StyledLayout>
            <div className="nav">
                <IconButton onClick={() => Router.push(`/`)}><Home style={{color: theme.whiteDark, fontSize: 30 }} /></IconButton>
            </div>
            <Container>
                <div className="application">{props.children}</div>
            </Container>
        </StyledLayout>
    );
};

Layout.propTypes = {
    currentApp: PropTypes.string,
    children: PropTypes.node,
};

export default Layout;
