import { Container, ContainerCampoPesquisa, ImagemInputPesquisa, InputPesquisa } from "./styles";

import lupa from "../../assets/lupa.png";

const CampoPesquisa = ({textoDigitado, handleCampoPesquisa}: {textoDigitado: string, handleCampoPesquisa: (textoDigitado: string) => void}) => {
    return (
        <Container>
            <ContainerCampoPesquisa>
                <ImagemInputPesquisa src={lupa} alt="Lupa" />
                <InputPesquisa type="text" value={textoDigitado} onChange={event => handleCampoPesquisa(event.target.value)} placeholder="Pesquise aqui um dos pratos do nosso cardápio"></InputPesquisa>
            </ContainerCampoPesquisa>
        </Container>
    );
}

export default CampoPesquisa;