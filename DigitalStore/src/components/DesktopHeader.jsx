import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FullHeader, TopHeader, BottomHeader } from '../assets/styles/HeaderStyles';
import Logo from './Logo';
import cartIcon from '../assets/img/mini-cart.svg';
import searchIcon from '../assets/img/icon-busca.svg'

const DesktopHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
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

    return (
        <FullHeader>
            <header>
                <TopHeader>
                    <div>
                        <Logo className="logo" logoName="logoheader" />
                    </div> 
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <img src={searchIcon} className="search-icon" onClick={handleSearch} />
                    <a href="#">Cadastre-se</a>
                    <button>Entrar</button>
                    <img src={cartIcon} alt="Cart" className="cart-icon" />
                </TopHeader>
                <BottomHeader>
                <nav>
                        <ul>
                            <li><NavLink exact='true' to="/">Home</NavLink></li>          
                            <li><NavLink to="/productspage">Produtos</NavLink></li>
                            <li><NavLink to="">Categorias</NavLink></li>
                            <li><NavLink to="">Meus Pedidos</NavLink></li>
                        </ul>
                    </nav>
                </BottomHeader>
            </header>
        </FullHeader>
    );
}

export default DesktopHeader;