import { Container, Icone, Mensagem } from "./styles";

import prato from "../../assets/prato-vazio.svg";

const CardVazio = () => {
    return (
        <Container>
            <Icone src={prato} alt="Prato" />
            <Mensagem>Nenhum prato encontrado com este nome ou descrição.</Mensagem>
        </Container>
    );
}

export default CardVazio;