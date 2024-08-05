import { useLocation } from 'react-router-dom';
import { StyledLink } from '../assets/styles/ProductsSearchStyles';
import Section from './Section';
import ProductListing from './ProductListing';
import productImage from '../assets/img/product.png';

const Products = () => {
  const isSecondPage = false;
  
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

  ];

  const linkInfo = {
    text: 'Ver todos ->',
    href: ''
  };

  return (
    <Section title="Produtos em Alta" titleAlign="left" link={linkInfo}>
      <StyledLink to="/productview">
        <ProductListing products={products} isSecondPage={isSecondPage} />
        </StyledLink>
    </Section>
  );
};

export default Products;