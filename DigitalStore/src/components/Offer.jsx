import { Section, ImgBox, Img, OfferBox, OfferP, OfferTitle, OfferSubtitle, OfferButton } from '../assets/styles/OfferStyles';
import Laye from '../assets/img/Laye.svg';

const Offer = () => {
    return (
        <Section>
            <ImgBox>
                <Img src={Laye} alt="Minha Imagem" />
            </ImgBox>
            <OfferBox>
                <OfferP>Oferta especial</OfferP>
                <OfferTitle>Air Jordan edição de colecionador</OfferTitle>
                <OfferSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </OfferSubtitle>
                <OfferButton>Ver Oferta</OfferButton>
            </OfferBox>
        </Section>
    );
}

export default Offer;