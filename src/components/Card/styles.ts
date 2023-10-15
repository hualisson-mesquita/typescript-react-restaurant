import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #DAA520;
`
export const ContainerImagem = styled.figure`
    height: 250px;
`

export const ImagemCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`

export const ContainerInfo = styled.div`
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.8rem;
`

export const Nome = styled.h2`

`

export const Categoria = styled.p`
    color: #DAA520;
    font-size: 0.9rem;
`

export const Descricao = styled.p`
    
`

export const Preco = styled.p`
    text-align: right;
    font-weight: 600;
`