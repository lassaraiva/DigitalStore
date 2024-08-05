import Gallery from './Gallery';
import image1 from '../assets/img/sneaker.jpeg';
import image2 from '../assets/img/home-slide-8.jpeg';
import image3 from '../assets/img/home-slide-3.jpeg';
import image4 from '../assets/img/home-slide-2.jpeg';

const Carousel = () => {
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
  ];

  return (
    <div className="App">
      <Gallery
        className="custom-gallery"
        width="1440px"
        height="681px"
        showThumbs
        images={images}
        page={1}
      />
    </div>
  );
};

export default Carousel;