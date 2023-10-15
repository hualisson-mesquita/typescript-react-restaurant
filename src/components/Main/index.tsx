import { useState } from "react";
import { Produto } from "../../types/interfaces/Produto";
import Card from "../Card";
import { Container, ContainerCards, Cardapio } from "./styles";
import { buscarPorCategoria, buscarPorTexto } from "../../controllers/ProdutoController";
import { Categorias } from "../../types/enums/Categorias";
import BotoesCategorias from "../BotoesCategorias";
import CampoPesquisa from "../CampoPesquisa";
import CardVazio from "../CardVazio";

const Main = () => {
    const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[] | undefined>(buscarPorCategoria(Categorias.ENTRADAS));
    const [botaoFiltroClicado, setBotaoFiltroClicado] = useState<Categorias>(Categorias.ENTRADAS);
    const [textoDigitado, setTextoDigitado] = useState<string>("");

    const handleCampoPesquisa = (textoDigitado: string): void => {
        setTextoDigitado(textoDigitado);
        setBotaoFiltroClicado(Categorias.NENHUMA);
        setProdutosFiltrados(buscarPorTexto(textoDigitado));
    }

    const handleFiltrarPorCategoria = (categoria: Categorias): void => {
        setBotaoFiltroClicado(categoria);
        setTextoDigitado("");
        setProdutosFiltrados(buscarPorCategoria(categoria));
    }

    return (
        <Container>
            <BotoesCategorias handleFiltro={handleFiltrarPorCategoria} botaoClicado={botaoFiltroClicado} />
            <CampoPesquisa textoDigitado={textoDigitado} handleCampoPesquisa={handleCampoPesquisa} />
            <Cardapio>Cardápio</Cardapio>
            <ContainerCards>
                {produtosFiltrados && produtosFiltrados.length > 0 ? produtosFiltrados.map(produto => (
                    <Card key={produto.id} produto={produto} />
                )) : <CardVazio />}
            </ContainerCards>
        </Container>
    );
}

export default Main;