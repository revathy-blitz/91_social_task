import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
    box-sizing: border-box;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 1440px 700px;

    @media only screen and (max-width: ${theme.tabletSize}) {
        min-width: 10px;
        background-size: 100%;
    }
    @media only screen and (max-width: ${theme.mobileSize}) {
        margin: 50px auto;
    }
}`;

export const HeroContainer = styled.div`
    display: inline-block;
    min-width: 768px;

    .infoContainer {
        margin-left: 94px;
        margin-top: 46px;
        &.payload {
            margin-top: 10px;
            margin-left: 20px;
        }
        .title {
            color: #2D6C97;
            font-family: "Titillium Web";
            font-size: 32px;
            letter-spacing: 0.2px;
            line-height: 37px
        }
        .subtitle {
            opacity: 0.9;
            color: #394C6C;
            font-family: Lato;
            font-size: 16px;
            line-height: 21px;
            padding-top: 8px;
            letter-spacing: .1px;
            margin-right: 35%
        }
    }

    @media only screen and (max-width: ${theme.tabletSize}){
        min-width: 10px;
        width: 100%;
        .infoContainer {
            margin: 27px 40px;
            text-align: center;
            .subtitle {
                margin: 0 50px;
            }
        }
    }
`;

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav-button {
        display: flex;
        align-items: center;
        font-size: 50px;
        color: #2D6C97;
        svg {
            color: #2D6C97;
            font-size: 100px;
        }
    }
`;

export const AppContainer = styled.div`
    min-width: 1172px;
    position: relative;
    top: 100px;
    left: 94px;
    display: flex;
    flex-flow: wrap;
    @media only screen and (max-width: ${theme.tabletSize}){
        min-width: 10px;
        flex-direction: column;
        left: 0;
        top: 0;
    }

    @media only screen and (max-width: ${theme.mobileSize}) {
        flex-direction: column;
        margin: 0 20px;
    }

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    height: 456px;
    width: 520px;
    font-family: "Titillium Web";
    border: 1px solid;
    border-radius: 4px;
    border-color: #F8F8F8;
    box-shadow: 0 2px 15px 0 rgba(0,0,0,0.13);
    margin: 40px;

    &:hover {
        transform: translate(0px, -10px) scale(1.03);
        transition-duration: .5s;
        cursor: pointer;
    }

    .title {
        font-size: 26px;
        line-height: 39px;
        color: #4A4A4A;
        text-align: center;
    }
    .image {
        display: inline-block;
        margin: 18px auto 0;
        > img {
            max-width: 300px;
        }
    }
    .content {
        padding-top: 3px;
        flex-grow: 3;
        color: #333333;
        font-family: Lato;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        margin: 0px 46px;
        height: 100px;
        overflow: scroll;
    }

    .detail {
        padding-left: 30px;
    }

    .links {
        a {
            color: #394C6C;
        }
        div {
            display: flex;
            flex-direction: column;
        }
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button {
            padding: 0px
        }
    }

    @media only screen and (max-width: ${theme.tabletSize}) {
        width: calc(100% - 100px);
        margin: 0 50px 43px;
        padding: 14px 0;
        height: auto;
        flex-direction: row;

        .infoBox {
            margin: 40px 10px;
            .content {
                margin: 20px 0 0 0;
            }
        }

        .image {
            
            margin: auto 30px;
            height: auto;
        }

        .title {
            line-height: 1;
        }

        &:nth-child(even) {
            flex-direction: row-reverse;
        }
    }

    @media only screen and (max-width: ${theme.mobileSize}) {
        width: 100%;
        margin: 0 0 25px 0;
        flex-direction: column;
        &:nth-child(even) {
            flex-direction: column;
        }
        .image {
            margin: 33px auto;
        }
        .infoBox {
            margin: 0 20px 33px;
            .content {
                margin: 0 10px;
            }
        }
    }
`;

export const TableContainer = styled.div`
    margin: 20px;
    width: 1100px;
    .MuiDataGrid-colCellTitleContainer {
        color: #394C6C;
        font-weight: bold;
        font-size: 16px;
    }
    .rendering-zone {
        .MuiDataGrid-cell {
            outline: none;
        }

    }
`;

export const FilterContainer = styled.div`
    margin: 20px;    
    display: flex;
    button {
        padding-bottom: 0px;
    }
`;
