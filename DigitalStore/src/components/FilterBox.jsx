import { useState } from 'react';
import { ProductsPageContainer, FilterSection, ProductsSection, SortingFilter, SortingLabel, SortingSelect, ToggleButton } from '../assets/styles/FilterBoxStyles';
import FilterGroup from './FilterGroup';
import ProductsSearch from './ProductsSearch';
import filterIcon from '../assets/img/filter.png';
import filterCloseIcon from '../assets/img/close.png';

const FilterBox = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filterOptions = [
    { text: 'Marca', isTitle: true },
    { text: 'Adiddas', value: 'opt1' },
    { text: 'Balenciaga', value: 'opt2' },
    { text: 'Nike', value: 'opt3' },
    { text: 'Puma', value: 'opt1' },

    { text: 'Categoria', isTitle: true },
    { text: 'Esporte e lazer', value: 'opt5' },
    { text: 'Casual', value: 'opt6' },
    { text: 'Utilitário', value: 'opt7' },
    { text: 'Corrida', value: 'opt8' },

    { text: 'Gênero', isTitle: true },
    { text: 'Masculino', value: 'opt9' },
    { text: 'Feminino', value: 'opt10' },

    { text: 'Estado', isTitle: true },
    { text: 'Novo', value: 'opt11' },
    { text: 'Usado', value: 'opt12' },
  ];

  const handleToggleClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <ProductsPageContainer>
        <ToggleButton onClick={handleToggleClick}>
        <img 
          src={isFilterVisible ? filterCloseIcon : filterIcon} 
          alt={isFilterVisible ? "Esconder Filtros" : "Mostrar Filtros"} 
        />
      </ToggleButton>
      <FilterSection $isVisible={isFilterVisible}>
        <FilterGroup
          title="Filtrar por"
          inputType="checkbox"
          options={filterOptions}
        />
      </FilterSection>
      <ProductsSection>
        <SortingFilter>
          <SortingLabel>Ordenar por:</SortingLabel>
          <SortingSelect>
            <option value="relevantes">mais relevantes</option>
            <option value="menor-preco">menor preço</option>
            <option value="maior-preco">maior preço</option>
          </SortingSelect>
        </SortingFilter>
        <ProductsSearch />
      </ProductsSection>
    </ProductsPageContainer>
  );
};

export default FilterBox;