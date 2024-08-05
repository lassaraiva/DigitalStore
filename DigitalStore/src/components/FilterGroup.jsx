import { FilterGroupContainer, FilterTitle, FilterDivider, FilterOptions, FilterOption, FilterInput,
CustomCheckbox, FilterLabel } from "../assets/styles/FilterGroupStyles";

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <FilterGroupContainer>
      <FilterTitle>{title}</FilterTitle>
      <FilterDivider />
      <FilterOptions>
        {options.map((option, index) => (
          <FilterOption key={index}>
            {option.isTitle ? (
              <strong style={{ fontSize: '14px', color: 'var(--dark-gray-2)', letterSpacing: 'var(--letter-spacing-1)', lineHeight:'40px', fontFamily: 'var(--font-family)' }}>{option.text}</strong>
            ) : (
              <>
                <FilterInput
                  type={inputType}
                  id={`option${index}`}
                  value={option.value || option.text}
                />
                <CustomCheckbox />
                <FilterLabel htmlFor={`option${index}`}>
                  {option.text}
                </FilterLabel>
              </>
            )}
          </FilterOption>
        ))}
      </FilterOptions>
    </FilterGroupContainer>
  );
};

export default FilterGroup;