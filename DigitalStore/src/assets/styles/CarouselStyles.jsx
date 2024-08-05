import styled from 'styled-components';

export const GalleryContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media (max-width: 810px) {
          width: auto;
          height: 810px;
          margin-left: -50%;
          position: static;
    }
  @media (min-width: 1400px) {
        margin-left: 12%;
    }
  @media (min-width: 2000px) {
        margin-left: 22%; 
    }
  @media (min-width: 3000px) {
        margin-left: 31%; 
    }
`;

export const GallerySlides = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  z-index: 1;
`;

export const Slide = styled.img`
  flex: 0 0 auto;
  min-width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 810px) {
    max-width: 60%;
    }
`;

export const GalleryThumbs = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 10;

  @media (max-width: 810px) {
     margin-top: 5%;
     margin-left: 30%;
     margin-bottom: 5%;
     position: relative;
  }
`;

export const Thumb = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  ${(props) => props.selected && `
    border: 3px solid var(--primary);
  `}
`;

export const GalleryThumbs2 = styled.div`
  position: absolute;
  background-color: var(--back);
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  z-index: 2;

  @media (max-width: 810px) {
         height: 40px;
         bottom: 360px;
         gap:5px;
         left:-100px;
    }
`;

export const Thumb2 = styled.img`
  width: 117px;
  height: 96px;
  cursor: pointer;
  opacity: ${(props) => (props.selected ? 1 : 0.8)};
  border: ${(props) => (props.selected ? '2px solid var(--primary)' : 'none')};
  margin: 10px 5px;
  border-radius: 4px;
  transition: opacity 0.3s, border 0.3s;
  
  &:hover {
    border: 2px solid var(--primary);
  }

  @media (max-width: 810px) {
         width: 60.17px;
         height: 57.51px;
    }
`;

export const Text = styled.div`
  max-width: 38%;
  margin-left: 68px;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(250, 246, 246, 0.856);
  text-align: left;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  box-sizing: border-box;
  z-index: 3;

  @media (max-width: 810px) {
    position: relative;
    margin-top: -43%;
    margin-left: 35%;
    text-align: center;
    max-width: 60%;
  }
  @media (min-width: 1400px) {
        margin-left: 5%; 
    }
  @media (min-width: 2000px) {
        margin-left: 5%; 
    }
  @media (min-width: 3000px) {
        margin-left: 5%; 
    }
`;

export const TextP = styled.p`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: var(--letter-spacing-1);
  color: #F6AA1C;
`;

export const TextTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: var( --line-height-3);
  color: var(--dark-gray);
  margin-bottom: 10px;
  margin-top: 10px;
  
  @media (max-width: 810px) {
    font-size: 2.5rem;
    line-height: var(--line-height-4);
  }
`;

export const TextSubtitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: var(--dark-gray-2);
  line-height: var(--line-height-2);
  letter-spacing: var(--letter-spacing-1);
  
  @media (max-width: 810px) {
    font-size: 0.875rem;
    line-height: var(--line-height);
  }
`;

export const TextBtn = styled.button`
  width: 220px;
  height: 48px;
  background-color: var(--primary);
  color: var(--light-gray-3);
  font-size: 1.063rem;
  font-family: var(--font-family);
  letter-spacing: var(--letter-spacing-1);
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  border: none;

  &:hover {
        background-color: var(--tertiary);
    }
    @media (max-width: 810px) {
      width: 335px;
      height: 48px;
      margin-left: 0;
  }
`;

export const ArrowRight = styled.div`
  position: absolute;
  font-size: 3.75rem;
  transform: translateY(-50%);
  color: var(--dark-gray-2);
  padding: 10px;
  top: 40%;
  left: 10px;
  cursor: pointer;
  z-index: 10;
  
  @media (max-width: 810px) {
    top: 23%;
    left: -30%;
}
`;

export const ArrowLeft = styled.div`
  position: absolute;
  font-size: 3.75rem;
  transform: translateY(-50%);
  color: var(--dark-gray-2);
  padding: 10px;
  top: 40%;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  
  @media (max-width: 810px) {
    top: 23%;
    right: 3%;
}
`;