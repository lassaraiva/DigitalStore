import styled from 'styled-components';

export const FilterGroupContainer = styled.div`
  background-color: var(--white);
  width: var(--filter-width);
  height: var(--filter-height);
  padding: 20px;
  gap: 20px;
  margin-top: 120px;
  margin-left: 60px;

  @media (min-width: 1400px) {
        margin-left: 120%;
        margin-top: 54%;
    }
    @media (min-width: 2000px) {
        margin-left: 240%; 
        margin-top: 56%;
    }
    @media (min-width: 3000px) {
        margin-left: 360%; 
        margin-top: 60%;
    }
`;

export const FilterTitle = styled.div`
  font-size: 1.125rem;
  color: var(--dark-gray-2);
  margin-top: 20px;
  padding-left: 20px;
  font-weight: 600;
  letter-spacing: var(--letter-spacing-1);
`;

export const FilterDivider = styled.hr`
  border-top: 1px var(--light-gray-2);
  margin: 20px 20px;
  width: 85%;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const FilterOption = styled.label`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FilterInput = styled.input`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked + span::before {
    content: '\u2714'; 
    display: inline-block;
    font-size: 1.125rem;
    color: var(--white);
    background-color: var(--primary);
    width: 24px; 
    height: 24px; 
    text-align: center;
    line-height: 22px;
    border-radius: 4px;
  }
  &:checked + span {
    border-color: transparent;
  }
`;

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid var(--dark-gray-2);
  border-radius: 3px;
  margin-right: 5px;
  position: relative;
`;

export const FilterLabel = styled.span`
  font-size: 0.875rem;
  color: var(--dark-gray-2);
`;