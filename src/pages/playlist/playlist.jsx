import { HistoryCard } from '../../components/historyCard/historyCard';
import { Navbar } from '../../components/navbar/navbar';
import { PlaylistTile } from '../../components/playlistTile/playlistTile';
import { Sidebar } from '../../components/sidebar/sidebar';
import '../playlist/playlist.css';

export const Playlist = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container sub-playlist-container'>
                    <h1 className='category--title'>Playlist</h1>
                    <button className='btn-create'>Create New Playlist</button>
                </div>
                <div className="videoCard-container">
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />
                    <PlaylistTile />

                </div>
            </main>
        </div>
    )
}