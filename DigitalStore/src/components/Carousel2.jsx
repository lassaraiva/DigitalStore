import styled from 'styled-components';
import Gallery from './Gallery';
import image1 from '../assets/img/produc-image-1.jpeg';
import image2 from '../assets/img/produc-image-2.jpeg';
import image3 from '../assets/img/produc-image-3.jpeg';
import image4 from '../assets/img/produc-image-4.jpeg';
import image5 from '../assets/img/produc-image-5.jpeg';

const Container = styled.div`
  margin-left: 100px;
  margin-top: 60px;
  position: absolute;
  @media (min-width: 1400px) {
        margin-left: 12%;
    }
    @media (min-width: 2000px) {
        margin-left: 26%; 
        margin-top: 90px;
    }
`;

const Carousel2 = () => {
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 }
  ];

  return (
    <Container>
      <Gallery
        className="custom-gallery"
        width="700px"
        height="661px"
        showThumbs
        images={images}
        page={2}
      />
    </Container>
  );
};

export default Carousel2;