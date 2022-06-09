import '../playlistTile/playlistTile.css';
import deleteImg from '../../assets/images/deleteWhite.png'
import { usePlaylist } from '../../context/playlistContext/playlistContext';
import { PlaylistCard } from '../playlistCard/playlistCard';


export const PlaylistTile = (props) => {
    const { playlistTile } = props;
    const { deletePlaylist } = usePlaylist();

    return (
        <div className='playlist-template'  >
            <div className='playlist-content'>
                <h1 className='playlist--title'>{playlistTile.title}</h1>
                {/* <p className='playlist-video-count'> {playlistData.videos.length} videos</p> */}
                <div className='playlist-video-container'>
                    {
                        playlistTile.videos.map(playlistVideo => <PlaylistCard playlistVideo={playlistVideo} playlistTile={playlistTile} />)
                    }
                </div>
            </div>
            <div className='playlist--delete' onClick={() => deletePlaylist(playlistTile._id)}>
                <img src={deleteImg} alt="delete playlist" className='icon__img' />
            </div>
        </div>
    )
}