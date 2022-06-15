import { Navbar } from '../../components/navbar/navbar';
import { PlaylistTile } from '../../components/playlistTile/playlistTile';
import { Sidebar } from '../../components/sidebar/sidebar';
import { useCategory } from '../../context/categoryContext/categoryContext';
import { usePlaylist } from '../../context/playlistContext/playlistContext';
import '../playlist/playlist.css';

export const Playlist = () => {
    const { isMenuOpen } = useCategory();
    const { playlistState, addPlaylist } = usePlaylist();
    const { playlist } = playlistState;


    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} key={playlist._id} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container sub-playlist-container'>
                    <h1 className='category--title'>Playlist</h1>
                </div>
                <div className="videoCard-container flex-center">
                    <div>
                        {
                            Object.keys(playlist).length !== 0 && playlist.map(playlistItem => <PlaylistTile playlistTile={playlistItem} keys={playlistItem._id} />)
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}