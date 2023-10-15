import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 250px;
    height: 300px;
    border-radius: 5px;
    border: 1px solid #DAA520;
`

export const Icone = styled.img`
    width: 10rem;

    @media only screen and (max-width: 480px) {
        width: 7rem;
    }
`

export const Mensagem = styled.p`
    text-align: center;
    font-size: 3rem;
    color: #DAA520;

    @media only screen and (max-width: 480px) {
        font-size: 1.8rem;
    }
`