import '../navbar/navbar.css';
import logo from '../../assets/images/logo.png';


export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <span className="material-symbols-outlined">
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

            <button className='btn--login'>Login</button>
        </nav>
    )
}