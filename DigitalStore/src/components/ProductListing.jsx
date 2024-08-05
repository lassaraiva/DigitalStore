import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductGrid = styled.div`
    &.grid-default {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        
        @media (max-width: 810px) {
        grid-template-columns: repeat(2, 1fr);
  }
    }

    &.grid-second-page {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @media (max-width: 810px) {
        grid-template-columns: repeat(2, 1fr);
  }
    }
`;

const ProductListing = ({ products, isSecondPage }) => {
    const gridClass = isSecondPage ? 'grid-second-page' : 'grid-default';

    return (
        <ProductGrid className={gridClass}>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                    description={product.description}
                    leftContentTitle={product.leftContentTitle}
                />
            ))}
        </ProductGrid>
    );
};

export default ProductListing;