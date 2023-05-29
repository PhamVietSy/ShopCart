import { createGlobalStyle } from 'styled-components';

const GlobaStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif !important;
    }
    html{
            font-size:62.5%;
            height: 100%;
            max-width: 100vw;
            overflow-x: hidden;
            line-height:1.6rem;
            font-weight: 500;
        }
    body{
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
    }
`;
export default GlobaStyle;
