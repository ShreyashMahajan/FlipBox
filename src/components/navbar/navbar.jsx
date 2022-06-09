import '../navbar/navbar.css';
import logo from '../../assets/images/logo.png';
import { useVideoList } from '../../context/videoListContext/videoListContext';
import { useCategory } from '../../context/categoryContext/categoryContext';

export const Navbar = () => {

    const { isMenuOpen, setIsMenuOpen } = useCategory();


    const toggleHandler = () => {
        if (isMenuOpen) {
            return setIsMenuOpen(false)
        } else {
            return setIsMenuOpen(true);
        }
    }


    const { videoDispatch } = useVideoList();

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
                <input type="search" className='input--search' placeholder='search here' onChange={(e) => videoDispatch({ type: 'SHOW_BY_SEARCH', payload: e.target.value })} />
            </div>


        </nav>
    )
}