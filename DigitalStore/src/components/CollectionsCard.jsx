import { ProductGrid, IconContainer, IconCircle, IconImage, ContentContainer, LeftContent,
LeftContentTitle, LeftContentText, LeftContentButton } from '../assets/styles/CollectionsCardStyles'; 
import Section from './Section';
import collections1 from '../assets/img/Collection-1.png';
import collections2 from '../assets/img/Collection-2.png';
import collections3 from '../assets/img/Collection-3.png';

const CollectionsCard = () => {
  const Icons = [
    { icon: collections1, name: "30% OFF", description: "Novo drop Supreme", link: "" },
    { icon: collections2, name: "30% OFF", description: "Coleção Adidas", link: "" },
    { icon: collections3, name: "30% OFF", description: "Novo Beats Bass", link: "" },
  ];

  return (
    <Section title="Coleções em destaque" titleAlign="left">
      <ProductGrid>
        {Icons.map((item, index) => (
          <IconContainer key={index}>
            <IconCircle>
              <IconImage src={item.icon} alt={`Ícone ${index}`} />
              <ContentContainer>
                <LeftContent>
                  <LeftContentTitle>{item.name}</LeftContentTitle>
                  <LeftContentText>{item.description}</LeftContentText>
                  <LeftContentButton>Comprar</LeftContentButton>
                </LeftContent>
              </ContentContainer>
            </IconCircle>
          </IconContainer>
        ))}
      </ProductGrid>
    </Section>
  );
};

export default CollectionsCard;