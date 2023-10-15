import { Container, ContainerIcones, Empresa, ImagemIcone } from "./styles";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
    return (
        <Container>
            <ContainerIcones>
                <ImagemIcone src={facebook} alt="Facebook" />
                <ImagemIcone src={instagram} alt="Instagram" />
                <ImagemIcone src={whatsapp} alt="Whatsapp"/>
            </ContainerIcones>
            <Empresa>
            &copy; Restaurant
            </Empresa>
        </Container>
    );
}

export default Footer;