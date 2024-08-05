import styled from 'styled-components';

export const ProductsPageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
`;

export const FilterSection = styled.div`
  width: 250px;
  height: 720px;
  margin-right: 20px;
  display: ${props => (props.$isVisible ? 'block' : 'none')};

  @media (min-width: 810px) {
    display: block;
    position: static;
    transform: none; 
    box-shadow: none;
  }

  @media (max-width: 810px) {
    position: fixed;
    top: 30px;
    left: 0; 
    width: 250px; 
    height: 100%; 
    background: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: ${props => (props.$isVisible ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease; 
    z-index: 14; 
    overflow-y: auto;
  }
`;

export const ProductsSection = styled.div`
  flex: 1;
  padding-top: 0.22%;
  padding-left: 13%;

  @media (max-width: 810px) {
    padding-left: 0; 
    margin-left: -60px;
  }
`;

export const SortingFilter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--dark-gray-2);
  border-radius: 4px;
  padding: 10px;
  width: 300px;
  height: 40px;
  margin-left: 62%;
  margin-top: 1.9%;
  
  @media (max-width: 810px) {
    width: 250px;
    margin-left: 22%;
  }
  @media (min-width: 1400px) {
    margin-left: 58%;
  }
  @media (min-width: 2000px) {
    margin-left: 55%; 
  }
`;

export const SortingLabel = styled.label`
  font-size: 1rem;
  font-family: var(--font-family);
  color: var(--dark-gray-2);
  letter-spacing: var(--letter-spacing-1);
  font-weight: 600;
  margin-right: 10px;

  @media (max-width: 810px) {
    font-size: 13px;
  }
`;

export const SortingSelect = styled.select`
  height: 40px;
  width: 60%;
  background-color: var(--back);
  letter-spacing: var(--letter-spacing-1);
  font-size: 1rem;
  font-family: var(--font-family);
  color: var(--dark-gray-2);
  border: none;
  cursor: pointer;

  @media (max-width: 810px) {
    font-size: 13px;
  }

  &:hover {
    color: var(--primary);
  }
`;

export const ToggleButton = styled.button`
  display: none; 
  background-color: var(--primary);
  color: var(--white);
  border: none;
  height: 60px;
  width: 60px;
  border-radius: 4px;
  margin-top: 2.3%; 
  cursor: pointer;
  z-index: 15;

  @media (max-width: 810px) {
    display: block;
  }
`;