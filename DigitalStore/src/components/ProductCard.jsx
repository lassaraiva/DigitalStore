import { CardWrapper, CardImage, CardTitle, CardName, CardDescription, PriceContainer, PriceStyle, DiscountPriceStyle } from "../assets/styles/ProductCardStyles";

const ProductCard = ({ image, name, price, priceDiscount, description, leftContentTitle }) => {
    return (
        <CardWrapper>
            <CardImage src={image} alt={name} />
            {leftContentTitle && <CardTitle>{leftContentTitle}</CardTitle>}
            <CardName>{name}</CardName>
            <CardDescription>{description}</CardDescription>
            <PriceContainer>
                <PriceStyle>{price}</PriceStyle>
                {priceDiscount && <DiscountPriceStyle>{priceDiscount}</DiscountPriceStyle>}
            </PriceContainer>
        </CardWrapper>
    );
};

export default ProductCard;