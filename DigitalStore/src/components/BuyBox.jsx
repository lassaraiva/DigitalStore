import { useState } from 'react';
import BreadCrumbs from './BreadCrumbs';
import { BuyBoxWrapper, H1, H3, Paragraph, Paragraph2, SquareDivs, SquareList, Square, RoundDivs, 
RoundList, Round, BuyButton, RatingContainer, StarRatingBox, PriceContainer } from '../assets/styles/BuyBoxStyles';

const BuyBox = () => {
  const [selectedSize, setSelectedSize] = useState(null); 
  const [selectedColor, setSelectedColor] = useState(null); 

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color); 
  };

  const starsTotal = 5; 
  const starsFilled = 5; 
  const starsEmpty = starsTotal - starsFilled; 

  const breadcrumbPath = [
    { label: 'Home', path: '/' },
    { label: '/ Produtos', path: '/products' },
    { label: '/ Tênis Nike Revolution 6 Next Nature Masculino', path: '/products/nike-revolution' }
  ];

  return (
    <BuyBoxWrapper>
      <BreadCrumbs path={breadcrumbPath} />
      <H1>Tênis Nike Revolution 6 Next Nature Masculino</H1>
      <H3>Casual | Nike | REF: 38416711</H3>
      <RatingContainer>
        {[...Array(starsFilled)].map((_, index) => (
          <span key={index} role="img" aria-label="star-filled">⭐️</span>
        ))}
        {[...Array(starsEmpty)].map((_, index) => (
          <span key={index + starsFilled} role="img" aria-label="star-empty">✰</span>
        ))}
        <StarRatingBox>
          <div className="star-rating-box">
            {starsFilled}.{starsEmpty} ☆
          </div>
          </StarRatingBox>
          <div className="rating-count">
            (90 avaliações)
          </div>
      </RatingContainer>
      <PriceContainer>
        <div className="price-discount">
          R$ <span>219</span>,00
        </div>
        <div className='price-normal'>
          <span> 438,00</span>
        </div>
      </PriceContainer>
      <Paragraph>Descrição do produto</Paragraph>
      <Paragraph2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque perferendis assumenda, illo porro incidunt rem eum quis vitae dolore itaque, laboriosam voluptatibus.
      </Paragraph2>
      <SquareDivs>
        <Paragraph>Tamanho</Paragraph>
        <SquareList>
          {['39', '40', '41', '42', '43'].map(size => (
            <Square 
              key={size} 
              selected={selectedSize === size} 
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </Square>
          ))}
        </SquareList>
      </SquareDivs>
      <RoundDivs>
        <Paragraph>Cor</Paragraph>
        <RoundList>
          {[
            { color: '#6FEEFF', value: '#6FEEFF' },
            { color: '#FF6969', value: '#FF6969' },
            { color: '#5E5E5E', value: '#5E5E5E' },
            { color: '#6D70B7', value: '#6D70B7' }
          ].map(({ color, value }) => (
            <Round 
              key={color} 
              color={color} 
              selected={selectedColor === value} 
              onClick={() => handleColorClick(value)}
            />
          ))}
        </RoundList>
      </RoundDivs>
      <BuyButton>COMPRAR</BuyButton>
    </BuyBoxWrapper>
  );
}

export default BuyBox;