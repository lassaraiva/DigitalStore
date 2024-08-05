import { useState, useEffect } from 'react';
import { GalleryContainer, GallerySlides, Slide, GalleryThumbs, Thumb, GalleryThumbs2, Thumb2, Text, 
TextP, TextTitle, TextSubtitle, TextBtn, ArrowRight, ArrowLeft } from '../assets/styles/CarouselStyles';

const Gallery = ({ className, width, height, showThumbs, images, page }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId = null;
    if (page === 1) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [images.length, page]);

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const translateX = `-${currentIndex * 100}%`;

  return (
    <GalleryContainer className={className} width={width} height={height}>
      <GallerySlides style={{ transform: `translateX(${translateX})` }}>
        {images.map((image, index) => (
          <Slide key={index} src={image.src} alt={`Image ${index}`} />
        ))}
      </GallerySlides>
      {showThumbs && page === 1 && (
        <GalleryThumbs>
          {images.map((image, index) => (
            <Thumb
              key={index}
              src={image.src}
              alt={`Thumbnail ${index}`}
              selected={index === currentIndex}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </GalleryThumbs>
      )}
      {showThumbs && page === 2 && (
        <GalleryThumbs2>
          {images.map((image, index) => (
            <Thumb2
              key={index}
              src={image.src}
              alt={`Thumbnail ${index}`}
              selected={index === currentIndex}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </GalleryThumbs2>
      )}
      {page === 2 && (
        <>
          <ArrowRight onClick={handlePrevClick}> &#8249; </ArrowRight>
          <ArrowLeft onClick={handleNextClick}> &#8250; </ArrowLeft>
        </>
      )}
      {page === 1 && (
          <Text>
            <TextP>Melhores ofertas personalizadas</TextP>
            <TextTitle>Queima de estoque Nike 🔥</TextTitle>
            <TextSubtitle>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</TextSubtitle>
            <TextBtn>Ver Ofertas</TextBtn>
          </Text>
      )}
    </GalleryContainer>
  );
};

export default Gallery;