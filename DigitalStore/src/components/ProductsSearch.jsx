import { useLocation } from 'react-router-dom';
import { TitleWrapper, ResultsCount, StyledLink } from '../assets/styles/ProductsSearchStyles';
import Section from './Section';
import ProductListing from './ProductListing';
import productImage from '../assets/img/product.png';

const ProductsSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q');

    const isSecondPage = true;

    const products = [
      {
          leftContentTitle: "50% OFF",
          name: "Tênis",
          description: "K-Swiss V8 - Masculino",
          image: productImage,
          priceDiscount: "$100",
          price: "$200",
      },
      {
          leftContentTitle: "50% OFF",
          name: "Tênis",
          description: "K-Swiss V8 - Masculino",
          image: productImage,
          price: "$200",
          priceDiscount: "$100",
      },
      {
          name: "Tênis",
          description: "K-Swiss V8 - Masculino",
          image: productImage,
          price: "$200",
          priceDiscount: "$100",
      },
      {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
      },
      {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
     },
     {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
      },
      {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
      },
      {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
      },
      {
        name: "Tênis",
        description: "K-Swiss V8 - Masculino",
        image: productImage,
        price: "$200",
        priceDiscount: "$100",
      },
    ];
  
    return (
        <div>
            {searchTerm ? (
                <Section
                    title={
                        <TitleWrapper>
                            <span>{`Resultados para "${searchTerm}" -`}</span>
                            <ResultsCount>389 produtos</ResultsCount>
                        </TitleWrapper>
                    }
                    titleAlign="left"
                >
                    <StyledLink to="/productview">
                        <ProductListing products={products} isSecondPage={isSecondPage} />
                    </StyledLink>
                </Section>
            ) : (
                <Section
                    title={
                        <TitleWrapper>
                            <span>Todos os produtos</span>
                        </TitleWrapper>
                    }
                    titleAlign="left"
                >
                    <StyledLink to="/productview">
                        <ProductListing products={products} isSecondPage={isSecondPage} />
                    </StyledLink>
                </Section>
            )}
        </div>
    );
};

export default ProductsSearch;