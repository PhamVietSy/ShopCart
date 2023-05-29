import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    margin-top: 20px;
    min-height: 400px;
`;
export const Container = styled.div`
    display: inline-block;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 10rem;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 1150px) {
        text-align: center;
    }
`;
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    @media (max-width: 1150px) {
        display: inline-block;
    }
`;
export const ProductH2 = styled.h2`
    width: 250px;
    font-size: 18px;
    font-weight: 500;
`;
export const A = styled.a`
    text-decoration: none;
    margin: 0 auto;
`;
export const ProductBody = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    height: 400px;
    text-align: center;
    align-items: center;
    @media (max-width: 1150px) {
        max-width: 100%;
        flex-wrap: wrap;    
        margin-top: 1rem;
        margin-bottom: 15rem;
    }
`;
export const Products = styled.div`
    margin: 5px 5px 20px 5px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;
export const ProductHead = styled.div`
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;
export const Img = styled.img`
    background-color: transparent;
    height: 264px;
    border-radius: 15px;
    margin: 1rem;
`;
export const Detail = styled.div``;
export const P = styled.p`
    font-size: 20px;
    margin-left: 1rem;
`;
export const Button = styled.button`
    color: white;
    margin-left: 1rem;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-weight: 400;
    outline: none;
    cursor: pointer;
    background: #1a5ef1dc;
    @media (max-width: 1150px) {
        max-width: 60%;
    }
`;
