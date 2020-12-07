import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    max-width: fit-content;
    display: inline-block;
    line-height: 40px;
    box-sizing: border-box;
    position: relative;
    font-weight: bold;
    color: white;
    cursor: pointer;
    font-size: 13px;
    height: 40px;
    background-color: rgb(60, 151, 211);
    outline: 0px;
    transition: all 0.2s ease 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(60, 151, 211);
    border-image: initial;
    border-radius: 4px;
    padding: 0px 30px;
    &:disabled {
        color: rgb(131, 131, 131);
        background-color: rgb(230, 230, 230);
        border-color: rgb(230, 230, 230);
        cursor: default;
    }
`;
