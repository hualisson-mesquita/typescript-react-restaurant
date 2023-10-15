import styled from "styled-components";

export const Container = styled.footer`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    height: 80px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px 7px 0 0;
    background-color: #DAA520;
`

export const ContainerIcones = styled.div`
    flex: 1 1 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagemIcone = styled.img`
    width: 2rem;
    margin: 0.3rem 0.5rem;
    transition: 0.3s ease-in-out;
    
    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }
`

export const Empresa = styled.p`
    flex: 1 1 150px;
    text-align: center;
`