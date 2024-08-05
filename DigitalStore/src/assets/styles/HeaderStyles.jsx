import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//Desktop header
export const FullHeader = styled.section`
    background-color: var(--white);
    width: auto;
    height: var(--header-height);
`;

export const TopHeader = styled.section`
    margin-left: 114px;
    margin-right: 50px;
    width: 1200px;
    padding-top: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 10%;
   
    @media (min-width: 1400px) {
        margin-left: 17%;
        width: 1240px;
    }
    @media (min-width: 2000px) {
        margin-left: 25%; 
        width: 1240px;
    }
    @media (min-width: 3000px) {
        margin-left: 32%; 
        width: 1240px;
    }

    input {
        width: 559px;
        height: 60px;
        border-radius: 8px;
        border: none;
        background-color: var(--light-gray-3);
        color: var(--dark-gray-2);
        font-family: var(--font-family);
        font-size: 1rem;
        line-height: var(--letter-spacing-2);
        letter-spacing: var(--letter-spacing-1);
        padding: 0 20px;
        position: relative;
    }

    input:focus {
    outline: 2px solid var(--primary); 
    outline-offset: none; 
   }
    .search-icon {
        position: absolute;
        width: 24px;
        height: 24px;
        margin-left: 830px;
        color: var(--dark-gray-2);
        opacity: 60%;
        cursor: pointer;

        &:hover {
        transform: scale(1.2);
    }
    }

    a {
        color: var(--dark-gray-2);
        font-size: 1rem;
        letter-spacing: var(--letter-spacing-1);
        font-weight: 400;

        &:hover{
         color: var(--primary);
        }
    }

    button {
        width: 114px;
        height: 40px;
        background-color: var(--primary);
        color: var(--light-gray-3);
        border: none;
        font-size: 0.875rem;
        font-weight: 600;
        font-family: var(--font-family);
        letter-spacing: var(--letter-spacing-1);
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            background-color: var(--tertiary);
        }
    }

    .cart-icon {
        width: 24px;
        height: 24px;
        cursor: pointer;

        &:hover {
        transform: scale(1.2);
    }
    }
`;

export const BottomHeader = styled.section`
    margin-top: 40px;
    margin-left: 100px;
    
    @media (min-width: 1400px) {
        margin-left: 17%;
    }
    @media (min-width: 2000px) {
        margin-left: 25%; 
    }
    @media (min-width: 3000px) {
        margin-left: 32%; 
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    li {
        margin-right: 10px;
    }

    li a {
        text-decoration: none;
        padding: 10px;
        font-size: 1rem;
        line-height: var(--line-height-1);
        letter-spacing: var(--letter-spacing-1);
        color: var(--dark-gray-2);
    }

    li a:hover {
        border-bottom: 3px solid var(--primary);
        border-radius: 2px;
        font-weight: 700;
        color: var(--primary);
    }
`;

//Mobile Header
export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 147px;
    background-color: var(--white);
    position: relative;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    width: 100%; 
`;

export const TopRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px; 
`;

export const MenuIcon = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 50px;
`;

export const LogoAndCart = styled.div`
    display: flex;
    align-items: center;
    margin-right: 16px; 
`;

export const CartIcon = styled.img`
    cursor: pointer;
    margin-left: 50px;
`;

export const Input = styled.input`
    margin-top: auto; 
    border-radius: 4px;
    width: 315px;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 0 20px;
    background-color: var(--light-gray-3);
    color: var(--dark-gray-2);
    font-family: var(--font-family);
    font-size: 1rem;
    line-height: var(--letter-spacing-2);
    letter-spacing: var(--letter-spacing-1);
    &:focus {
    outline: 2px solid var(--primary); 
    outline-offset: none; 
   }
`;

export const SearchIcon = styled.img`
    cursor: pointer;
    margin-left: 320px;
    position: absolute;
    color: var(--dark-gray-2);
    opacity: 60%;
`;

export const SideMenu = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 702px;
    width: 308px;
    background-color: var(--white);
    box-shadow: 2px 0 5px rgba(189, 162, 162, 0.3);
    display: flex;
    flex-direction: column;
    padding: 16px;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    z-index: 16;
`;

export const CloseIcon = styled.div`
    cursor: pointer;
    font-size: 24px;
    color: var(--dark-gray-2);
    margin-bottom: 16px;
    align-self: flex-end;
`;

export const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const MenuItem = styled.li`
    margin-bottom: 16px;
`;

export const MenuLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1rem;
    color: var(--dark-gray-2);
    letter-spacing: var(--letter-spacing-1);
    &:hover {
        border-bottom: 3px solid var(--primary);
        border-radius: 2px;
        font-weight: 700;
        color: var(--primary);
    }
`;
export const H1 = styled.h1`
  font-size: 1rem;
  color: var(--dark-gray-2);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-1);
  margin-bottom: 10px;
`;
export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid var(--light-gray-2);
  width: 80%;
  margin: 2px auto;
`;
export const AuthActions = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    margin-bottom: 20px;
`;

export const SignupLink = styled.a`
    color: var(--dark-gray-2);
    font-size: 1rem;
    letter-spacing: var(--letter-spacing-1);
    font-weight: 400;

        &:hover{
         color: var(--primary);
        }
`;

export const LoginButton = styled.button`
    width: 248px;
    height: 40px;
    background-color: var(--primary);
    color: var(--light-gray-3);
    border: none;
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--font-family);
    letter-spacing: var(--letter-spacing-1);
    border-radius: 10px;
    cursor: pointer;

        &:hover{
            background-color: var(--tertiary);
        }
`;