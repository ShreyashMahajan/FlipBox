import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext/authContext';
import { useCategory } from '../../context/categoryContext/categoryContext';
import '../sidebar/sidebar.css';

export const Sidebar = () => {
    const { isMenuOpen } = useCategory();
    const { isUserLoggedIn, logout } = useAuth();
    return (
        <aside className="sidebar">
            <ul className={`menu-container ${!isMenuOpen ? 'hide-menu-container' : ''}`}>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        home
                    </span>
                    <NavLink to="/" className='text--link' >
                        <span className='item-list--title'>Home</span>
                    </NavLink>
                </li>
                <li className='item-list' >
                    <span className="material-symbols-outlined item-list__img" >
                        thumb_up
                    </span>
                    <NavLink to='/like' className='text--link'>
                        <span className='item-list--title'>Liked</span>
                    </NavLink>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        timer
                    </span>
                    <NavLink to="/watchlater" className='text--link'>
                        <span className='item-list--title'>Watch later</span>
                    </NavLink>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        history
                    </span>
                    <NavLink to="/history" className='text--link'>
                        <span className='item-list--title'>History</span>
                    </NavLink>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        playlist_add
                    </span>
                    <NavLink to="/playlist" className='text--link'>
                        <span className='item-list--title'>Playlist</span>
                    </NavLink>
                </li>
                <li className='item-list'>
                    {!isUserLoggedIn && <NavLink to='/login'>
                        <button className='btn--login'>Login</button>
                    </NavLink>}
                    {isUserLoggedIn && <NavLink to='/login'>
                        <button className='btn--login' onClick={() => {
                            logout();
                        }}>Logout</button>
                    </NavLink>}
                </li>
            </ul>
        </aside>
    )
}