import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, LogoContainer,TopRow, MenuIcon, LogoAndCart, CartIcon, Input, SearchIcon, SideMenu,
CloseIcon, MenuLink, MenuItem, MenuList, H1, Divider, AuthActions, SignupLink, LoginButton } from '../assets/styles/HeaderStyles';
import Logo from './Logo';
import cartIcon from '../assets/img/mini-cart.svg';
import searchIcon from '../assets/img/icon-busca.svg';


const MobileHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            navigate(`/productspage?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <HeaderWrapper>
                <LogoContainer>
                    <TopRow>
                        <MenuIcon onClick={toggleMenu}>
                            &#9776;
                        </MenuIcon>
                        <LogoAndCart>
                            <Logo logoName="logoheader"/>
                            <CartIcon src={cartIcon} alt="Cart" />
                        </LogoAndCart>
                    </TopRow>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            type="text"
                            placeholder="Pesquisar produto..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <SearchIcon src={searchIcon} onClick={handleSearch} alt="Search" />
                    </div>
                </LogoContainer>
            </HeaderWrapper>
            <SideMenu open={menuOpen}>
                <CloseIcon onClick={toggleMenu}>
                    &times;
                </CloseIcon>
                <MenuList>
                    <H1>Páginas</H1>
                    <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink to="/productspage">Produtos</MenuLink></MenuItem>
                    <MenuItem><MenuLink to="">Categorias</MenuLink></MenuItem>
                    <MenuItem><MenuLink to="">Meus Pedidos</MenuLink></MenuItem>
                </MenuList>
                <AuthActions>
                <Divider />
                    <LoginButton>Entrar</LoginButton>
                    <SignupLink href="#">Cadastre-se</SignupLink>
                </AuthActions>
            </SideMenu>
        </>
    );
};

export default MobileHeader;