import { Categorias } from "../../types/enums/Categorias";
import { BotaoCategoria, Container, ImagemCategoria } from "./styles";

import entrada from "../../assets/entrada.png";
import massa from "../../assets/massa.png";
import carne from "../../assets/carne.png";
import bebida from "../../assets/bebidas.png";
import salada from "../../assets/salada.png";
import sobremesa from "../../assets/sobremesa.png";

const BotoesCategorias = ({handleFiltro, botaoClicado}: {handleFiltro: (categoria: Categorias) => void, botaoClicado: Categorias}) => {
    return (
        <Container>
            <BotaoCategoria 
            onClick={() => handleFiltro(Categorias.ENTRADAS)} 
            className={botaoClicado === Categorias.ENTRADAS? "ativo" : ""}>
                <ImagemCategoria src={entrada} alt={Categorias.ENTRADAS} />{Categorias.ENTRADAS}
            </BotaoCategoria>

            <BotaoCategoria 
            onClick={() => handleFiltro(Categorias.MASSAS)} 
            className={botaoClicado === Categorias.MASSAS? "ativo" : ""}>
                <ImagemCategoria src={massa} alt={Categorias.MASSAS} />{Categorias.MASSAS}
            </BotaoCategoria>

            <BotaoCategoria 
            onClick={() => handleFiltro(Categorias.CARNES)} 
            className={botaoClicado === Categorias.CARNES? "ativo" : ""}>
                <ImagemCategoria src={carne} alt={Categorias.CARNES} />{Categorias.CARNES}
            </BotaoCategoria>

            <BotaoCategoria 
            onClick={() => handleFiltro(Categorias.BEBIDAS)} 
            className={botaoClicado === Categorias.BEBIDAS? "ativo" : ""}>
                <ImagemCategoria src={bebida} alt={Categorias.BEBIDAS} />{Categorias.BEBIDAS}
            </BotaoCategoria>

            <BotaoCategoria 
            onClick={() => handleFiltro(Categorias.SALADAS)} 
            className={botaoClicado === Categorias.SALADAS? "ativo" : ""}>
                <ImagemCategoria src={salada} alt={Categorias.SALADAS} />{Categorias.SALADAS}
            </BotaoCategoria>

            <BotaoCategoria 
            onClick={() => handleFiltro(Categorias.SOBREMESAS)} 
            className={botaoClicado === Categorias.SOBREMESAS? "ativo" : ""}>
                <ImagemCategoria src={sobremesa} alt={Categorias.SOBREMESAS} />{Categorias.SOBREMESAS}
            </BotaoCategoria>
        </Container>
    );
}

export default BotoesCategorias;