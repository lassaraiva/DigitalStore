import { Section, IconsTitle, IconsContainer, IconContainer, IconCircle, Icon, IconText } from '../assets/styles/CollectionsIconStyles';
import iconTshirt from '../assets/img/iconTshirt.svg'; 
import iconPants from "../assets/img/iconPants.svg";
import iconHeadphones from '../assets/img/iconHeadphones.svg';
import iconSneakers from '../assets/img/iconSneakers.svg';

const CollectionsIcon = () => {
    const Icons = [
        { icon: iconTshirt, name: "Camisetas", link: "" },
        { icon: iconPants, name: "Calças", link: "" },
        { icon: iconPants, name: "Bonés", link: "" },
        { icon: iconHeadphones, name: "Headphones", link: "" },
        { icon: iconSneakers, name: "Tênis", link: "" }
    ];

    return (
        <Section>
            <IconsTitle>Coleções em destaque</IconsTitle>
            <IconsContainer>
                {Icons.map((item, index) => (
                    <IconContainer key={index}>
                        <IconCircle>
                            <Icon src={item.icon} alt={`Ícone ${index}`} />
                        </IconCircle>
                        <IconText>{item.name}</IconText>
                    </IconContainer>
                ))}
            </IconsContainer>
        </Section>
    );
}

export default CollectionsIcon;