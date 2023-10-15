import { Produto } from "../../types/interfaces/Produto";
import { Categoria, Container, ContainerImagem, ContainerInfo, Descricao, ImagemCard, Nome, Preco } from "./styles";

const Card = ({produto}: {produto: Produto}) => {
    return (
        <Container>
            <ContainerImagem>
                <ImagemCard src={produto.imagem} alt={produto.nome} />
            </ContainerImagem>
            <ContainerInfo>
                <Nome>{produto.nome}</Nome>
                <Categoria>{produto.categoria}</Categoria>
                <Descricao>{produto.descricao}</Descricao>
                <Preco>{produto.preco.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</Preco>
            </ContainerInfo>
        </Container>
    );
}

export default Card;