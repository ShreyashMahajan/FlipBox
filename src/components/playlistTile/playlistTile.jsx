import '../playlistTile/playlistTile.css';
import deleteImg from '../../assets/images/deleteWhite.png'


export const PlaylistTile = () => {
    return (
        <div className='playlist-template'>
            <div className='playlist-content'>
                <h1 className='playlist--title'>My Playlist #1</h1>
                <p className='playlist-video-count'> 10 videos</p>
            </div>
            <div className='playlist--delete'>
                <img src={deleteImg} alt="delete playlist" className='icon__img' />
            </div>
        </div>
    )
}