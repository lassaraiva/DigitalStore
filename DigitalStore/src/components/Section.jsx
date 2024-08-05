import { SectionWrapper, HeaderContainer, Title, Link, ProductGrid } from "../assets/styles/SectionStyles";
const Section = ({ title, link, children }) => {
    return (
        <SectionWrapper>
            <HeaderContainer>
                <Title>{title}</Title>
                {link && (
                    <Link href={link.href}>
                        {link.text}
                    </Link>
                )}
            </HeaderContainer>
            <ProductGrid>
                {children}
            </ProductGrid>
        </SectionWrapper>
    );
};

export default Section;