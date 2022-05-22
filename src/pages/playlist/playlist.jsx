import { Navbar } from '../../components/navbar/navbar';
import { PlaylistTile } from '../../components/playlistTile/playlistTile';
import { Sidebar } from '../../components/sidebar/sidebar';
import { useCategory } from '../../context/categoryContext/categoryContext';
import '../playlist/playlist.css';

export const Playlist = () => {
    const { isMenuOpen } = useCategory();
    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container sub-playlist-container'>
                    <h1 className='category--title'>Playlist</h1>
                    <button className='btn-create'>Create New Playlist</button>
                </div>
                <div className="videoCard-container flex-center">
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                </div>
            </main>
        </div>
    )
}