import { FooterContainer, FooterColumnsContainer, FooterColumn, ColumnHeader, ColumnList, ColumnListItem, ColumnListLink, 
LogoContainer, LoremText, SocialIconsContainer, SocialIcon, Divider, Copyright } from '../assets/styles/FooterStyles';
import Logo from './Logo';
import facebookIcon from '../assets/img/facebook.svg';
import xIcon from "../assets/img/icons8-twitterx.svg";
import instagramIcon from '../assets/img/instagram.svg';

const column1 = [
  { text: "Sobre Drip Store", link: "" },
  { text: "Segurança", link: "" },
  { text: "Wishlist", link: "" },
  { text: "Blog", link: "" },
  { text: "Trabalhe conosco", link: "" },
  { text: "Meus Pedidos", link: "" }
];

const column2 = [
  { text: "Camisetas", link: "" },
  { text: "Calças", link: "" },
  { text: "Bonés", link: "" },
  { text: "HeadPhones", link: "" },
  { text: "Tênis", link: "" }
];

const column3 = [
  { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161" },
  { text: "(85) 3051-3411" }
];

const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.";

const socialIcons = [
  { icon: facebookIcon, link: "" },
  { icon: instagramIcon, link: "" },
  { icon: xIcon, link: "" }
];

const Footer = () => (
  <FooterContainer>
    <FooterColumnsContainer className="footer-columns">
      <FooterColumn className="footer-column">
        <LogoContainer>
          <Logo logoName="logofooter" />
        </LogoContainer>
        <LoremText>{loremIpsumText}</LoremText>
        <SocialIconsContainer className="social-icons">
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              <SocialIcon src={icon.icon} alt="Social Icon" />
            </a>
          ))}
        </SocialIconsContainer>
      </FooterColumn>
      <FooterColumn className="footer-column" >
        <ColumnHeader>Informação</ColumnHeader>
        <ColumnList>
          {column1.map((item, index) => (
            <ColumnListItem key={index}>
              <ColumnListLink href={item.link}>{item.text}</ColumnListLink>
            </ColumnListItem>
          ))}
        </ColumnList>
      </FooterColumn>
      <FooterColumn className="footer-column">
        <ColumnHeader>Categorias</ColumnHeader>
        <ColumnList>
          {column2.map((item, index) => (
            <ColumnListItem key={index}>
              <ColumnListLink href={item.link}>{item.text}</ColumnListLink>
            </ColumnListItem>
          ))}
        </ColumnList>
      </FooterColumn>
      <FooterColumn className="footer-column">
        <ColumnHeader>Contato</ColumnHeader>
        <ColumnList>
          {column3.map((item, index) => (
            <ColumnListItem key={index}>{item.text}</ColumnListItem>
          ))}
        </ColumnList>
      </FooterColumn>
    </FooterColumnsContainer>
    <Divider />
    <Copyright>© 2024 Digital College</Copyright>
  </FooterContainer>
);

export default Footer;