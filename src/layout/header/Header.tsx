import { useEffect, useState } from "react";

import AppContainer from "../../components/container/Container";

import logo from './pngegg.png';
import './header.scss';

const Header: React.FC = () => {

    const [userScrollPosition, setUserScrollPosition] = useState(0);
    const [includeHide, setIncludeHide] = useState(false);
    const defaultOffset = 100;

    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [userScrollPosition]);

    const handleScroll = () => {
        const scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition > userScrollPosition && !includeHide && scrollPosition > defaultOffset) {
            setIncludeHide(true);
        } else if (scrollPosition < userScrollPosition && includeHide) {
            setIncludeHide(false);
        }
        setUserScrollPosition(scrollPosition);
    }

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
        document.body.classList.toggle('lock');
    }

    const handleLinkClick = () => {
        setMenuActive(false);
        document.body.classList.remove('lock');
    }

    return (

        <header className={`header ${includeHide ? 'hide-header' : ''}`}>
            <AppContainer>
                <div className="header__content">
                    <div className="header__logo">
                        <a href="#">
                            <img src={logo} alt="Logo" className='header__logo-img' />
                        </a>
                    </div>
                    <div className={`header__navigation-menu ${menuActive ? 'active-menu' : ''}`}
                        onClick={handleMenuClick}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className={`header__navigation ${menuActive ? 'active-menu' : ''}`}>
                        <ul className="header__navigation-list">
                            <li className='header__navigation-list_item'>
                                <a href="#price"
                                    className='header__navigation-list_links'
                                    onClick={handleLinkClick}
                                >
                                    Цiна
                                </a>
                            </li>
                            <li className='header__navigation-list_item'>
                                <a href="#reviews"
                                    className='header__navigation-list_links'
                                    onClick={handleLinkClick}
                                >
                                    Вiдгуки
                                </a>
                            </li>
                            <li className='header__navigation-list_item'>
                                <a href="#technicalInfo"
                                    className='header__navigation-list_links'
                                    onClick={handleLinkClick}
                                >
                                    ХАРАКТЕРИСТИКИ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </AppContainer>
        </header>
    );
}

export default Header;