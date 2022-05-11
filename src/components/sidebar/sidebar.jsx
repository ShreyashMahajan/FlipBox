import '../sidebar/sidebar.css';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className='menu-container'>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        home
                    </span>
                    <span className='item-list--title'>Home</span>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        play_arrow
                    </span>
                    <span className='item-list--title'>Video List</span>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        thumb_up
                    </span>
                    <span className='item-list--title'>Like/dislike</span>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        timer
                    </span>
                    <span className='item-list--title'>Watch later</span>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        history
                    </span>
                    <span className='item-list--title'>History</span>
                </li>
                <li className='item-list'>
                    <span className="material-symbols-outlined item-list__img" >
                        playlist_add
                    </span>
                    <span className='item-list--title'>Playlist</span>
                </li>
                <li className='item-list'>
                    <button className='btn--login'>Login</button>
                </li>
            </ul>
        </aside>
    )
}