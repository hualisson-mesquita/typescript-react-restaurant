import { Container, ContainerInfo, ImagemFundo, Informacoes, NomeEmpresa } from "./styles";
import banner from "../../assets/banner.png";

const Header = () => {
    return (
        <Container>
            <ImagemFundo src={banner} alt="Banner - Restaurant" />
            <ContainerInfo>
                <NomeEmpresa>RESTAURANT</NomeEmpresa>
                <Informacoes>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.</Informacoes>
            </ContainerInfo>
        </Container>
    );
}

export default Header;