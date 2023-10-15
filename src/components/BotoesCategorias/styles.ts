import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: 1rem 0;

    @media only screen and (max-width: 460px) {
        padding: 20px;
    }
`

export const BotaoCategoria = styled.button`
    flex: 1 1 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background-color: #DAA520;
    }

    &.ativo {
        background-color: #DAA520;
    }
`

export const BotaoAtivo = styled

export const ImagemCategoria = styled.img`
    width: 1.5rem;
`