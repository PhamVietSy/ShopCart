import styled from 'styled-components';

export const DivContrainer = styled.div`
    margin-top: 20px;
    min-height: 400px;
    text-align: center;
`;
export const ProductBox = styled.div`
    width: 70%;
    height: 80%;
    min-height: 400px;
    min-width: 1000px;
    display: inline-block;
    margin: 5px 5px 20px 5px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;
export const CardBody = styled.div`
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;
export const DivImage = styled.div`
    min-height: 50%;
    min-width: 60%;
    text-align: center !important;
`;
export const P = styled.p`
    font-size: 15px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
export const AddCart = styled.div`
    text-align: center;
`;
export const ButtonAdd = styled.button`
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
`;
