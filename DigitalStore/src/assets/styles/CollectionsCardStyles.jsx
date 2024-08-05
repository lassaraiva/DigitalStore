import styled from 'styled-components';

export const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const IconContainer = styled.div`
  text-align: center;
  margin: 5px;
`;

export const IconCircle = styled.div`
  position: relative;
  width: 405px;
  height: 251px;
  background-color: var(--cardCollection);
  justify-content: flex-end;
  border-radius: 4%;
  display: flex;
  margin-bottom: 10px;
`;

export const IconImage = styled.img`
  width: 242px;
  height: 251px;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 53%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const LeftContent = styled.div`
  text-align: left;
  padding: 20px;
  width: 100%;
`;

export const LeftContentTitle = styled.h1`
  font-size: 0.875rem;
  color: var(--dark-gray-2);
  letter-spacing: var(--letter-spacing-1);
  font-weight: 600;
  background-color: var(--yellow);
  border-radius: 20px;
  width: 96px;
  height: 32px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContentText = styled.p`
  font-size: 2rem;
  color: var(--dark-gray);
  margin-bottom: 20px;
  font-weight: 700;
`;

export const LeftContentButton = styled.button`
  background-color: var(--white);
  color: var(--primary);
  width: 153px;
  height: 48px;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  letter-spacing: var(--letter-spacing-1);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
        background-color: var(--primary);
        color: var(--white);
    }
`;