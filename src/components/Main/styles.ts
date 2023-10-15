import styled from "styled-components";

export const Container = styled.main`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const ContainerInput = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    border: 3px solid #DAA520;
    border-radius: 20px;
`

export const SearchImage = styled.img`
    width: 2rem;
    margin: 0 0.5rem;
`

export const InputSearch = styled.input`
    width: 100%;
    height: 1.5rem;
    border: none;
    outline: none;
`

export const Cardapio = styled.h3`
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    font-size: 2rem;
    font-family: "Dancing Script", cursive;
    color: #daa520;
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #F3F3F3;
    border-radius: 7px;
    max-width: 1024px;
    padding: 20px;
    gap: 40px;
`