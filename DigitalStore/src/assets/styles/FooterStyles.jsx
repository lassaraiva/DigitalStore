import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--dark-gray);
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--white);
  text-align: left;
  width: 100%;
  height: var(--footer-height);

  @media (max-width: 810px) {
    height: auto;
  }
`;

export const FooterColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterColumn = styled.div`
  flex: 1 1 200px;
  margin: 72px 10px;

  @media (max-width: 810px) { 
    flex: 1 1 auto;
    margin: 0.313rem 0.938rem;
  }
`;

export const ColumnHeader = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 65px;

  @media (max-width: 810px) { 
    margin-left: 0;
    padding-left: 5px;
  }
`;

export const ColumnList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 810px) {
    padding-left: 5px; 
  }
`;

export const ColumnListItem = styled.li`
  margin-bottom: 15px;
  margin-left: 65px;

  @media (max-width: 810px) { 
    margin-left: 0;
  }
`;

export const ColumnListLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: var(--primary);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const LoremText = styled.p`
  font-size: 1rem;
  line-height: 26px;
  width: 120%;
  
  @media (max-width: 810px) { 
    width: 100%;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
`;

export const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;

  &:hover {
        transform: scale(1.2);
    }
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid var(--white);
  width: 80%;
  margin: 1px auto;
`;

export const Copyright = styled.p`
  font-size: 0.813rem;
  text-align: center;
  color: var(--white);
`;