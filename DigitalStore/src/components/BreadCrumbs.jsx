import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbsWrapper = styled.div`
    display: flex;
    position: absolute;
    align-items: left;
    margin-top: -2%;
    margin-left: -53%;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: var(--letter-spacing-1);  
    color: var(--dark-gray-2);

    @media (max-width: 810px) {
      margin-top: -135%;
      margin-left: -2%;
      font-size: 0.688rem;
  }
  @media (min-width: 1400px) {
        margin-left: -45%;
    }
    @media (min-width: 2000px) {
        margin-left: -28%; 
    }
`;

const BreadcrumbItem = styled.span`
  &:not(:last-child)::after {
    content: ' / ';
    color: var(--dark-gray-2);
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-gray-2);

  &:hover {
    font-weight: 700;
  }
`;

const Breadcrumbs = ({ path }) => {
  return (
    <BreadcrumbsWrapper>
      {path.map((segment, index) => (
        <React.Fragment key={index}>
          {index < path.length - 1 ? (
            <BreadcrumbLink to={segment.path}>{segment.label}</BreadcrumbLink>
          ) : (
            <BreadcrumbItem>{segment.label}</BreadcrumbItem>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;