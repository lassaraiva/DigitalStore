import Section from './Section';
import ProductListing from './ProductListing';
import productImage from '../assets/img/product.png';

const SimilarProducts = () => {
  const isSecondPage = false;
  const columns = isSecondPage ? 3 : 4;
  
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
  ];

  const linkInfo = {
    text: 'Ver todos ->',
    href: ''
  };

  return (
    <Section title="Produtos Relacionados" titleAlign="left" link={linkInfo}>
      <ProductListing products={products} columns={columns} />
    </Section>
  );
};

export default SimilarProducts;