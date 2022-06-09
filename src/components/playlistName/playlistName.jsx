import { usePlaylist } from '../../context/playlistContext/playlistContext';
import '../playlistName/playlistName.css';

export const PlaylistName = (props) => {
    const { playlistName, video } = props;
    const { addVideoToPlaylist } = usePlaylist();

    return (
        <div className="playlistName-container">
            <input type='checkbox' className="input-checkbox" name='playlistName' onClick={() => addVideoToPlaylist(playlistName._id, video)} />
            <span className="playlistName--title">{playlistName.title}</span>
        </div>
    )
}