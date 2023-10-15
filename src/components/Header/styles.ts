import styled from "styled-components";

export const Container = styled.header`
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagemFundo = styled.img`
    width: 100%;
    border-radius: 0 0 7px 7px;
`

export const ContainerInfo = styled.div`
    max-width: 50%;
    color: #fff;
    display: flex;
    text-align: center;
    flex-direction: column;
    position: absolute;
    bottom: 20%;

    @media only screen and (max-width: 480px) {
        bottom: 15%;
    }
`

export const NomeEmpresa = styled.h1`
    font-size: 3rem;
    letter-spacing: 0.3rem;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;

    @media only screen and (max-width: 480px) {
        font-size: 1rem;
    }
`

export const Informacoes = styled.p`
    font-family: "Dancing Script", cursive ;
    font-size: 1.9rem;
    color: #DAA520;

    @media only screen and (max-width: 480px) {
        font-size: 1rem;
    }
`