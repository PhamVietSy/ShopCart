import styled from 'styled-components';

export const HeaderPage = styled.header`
    height: 60px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 19%) 0px 1px 1px;
    display: flex;
    justify-content: center;
`;
export const Inner = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ccc;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;
export const LogoHead = styled.div`
    display: flex;
    margin-left: 20px;
`;
export const UploadHead = styled.div`
    float: right;
    margin: 10px 20px;
`;
export const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-top: 2rem;
    font-weight: 400;
    outline: none;
    cursor: pointer;
    background: #8998b6dc;
`;
export const A = styled.a`
    color: white;
    font-size: 18px;
    padding: 5px;
    margin: 5px;
    &:hover,
    &:focus {
        color: palevioletred;
    }
    &:active {
        color: red;
    }
`;
export const AA = styled.a`
    font-size: 18px;
    padding-top: 12px;
    margin: 5px;
    &:hover,
    &:focus {
        color: palevioletred;
    }
    &:active {
        color: red;
    }
`;
