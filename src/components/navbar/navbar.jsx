import '../navbar/navbar.css';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

export const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true);
        }

    }, [isMobile]);



    const toggleHandler = () => {
        return setIsMenuOpen(!isMenuOpen);
    }

    props.func(isMenuOpen);

    return (
        <nav className="navbar">
            <div className='logo-container'>
                <span className="material-symbols-outlined" onClick={toggleHandler}>
                    menu
                </span>
                <img src={logo} alt="logo" className='logo__img' />
                <h1 className='logo--text'>FlipBox</h1>
            </div>
            <div className='search-box'>
                <input type="search" className='input--search' placeholder='search here' />
                <button className='btn--search'>
                    <span className="material-symbols-outlined ">
                        search
                    </span>
                </button>
            </div>


        </nav>
    )
}