import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    display: flex;

    @media only screen and (max-width: 480px) {
        padding: 0 20px;
    }
`

export const ContainerCampoPesquisa = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    border: 3px solid #DAA520;
    border-radius: 20px;
`

export const ImagemInputPesquisa = styled.img`
    width: 2rem;
    margin: 0 0.5rem;
`

export const InputPesquisa = styled.input`
    width: 100%;
    height: 1.5rem;
    border: none;
    outline: none;
`