import { usePlaylist } from '../../context/playlistContext/playlistContext';
import '../playlistName/playlistName.css';

export const PlaylistName = (props) => {
    const { playlistName, video, hidePlaylist } = props;
    const { addVideoToPlaylist, deleteVideoFromPlaylist } = usePlaylist();

    const isVideoPresent = (videoList, video) => {
        if (videoList.find(videoItem => videoItem._id === video._id) === undefined) {
            return false;
        } else {
            return true;
        }
    }

    let isPlaylistPresent = isVideoPresent(playlistName.videos, video);

    return (
        <div className="playlistName-container" key={playlistName._id}>
            <input type='checkbox' className="input-checkbox" name='playlistName' defaultChecked={isPlaylistPresent} onClick={() => {
                isPlaylistPresent ? deleteVideoFromPlaylist(playlistName._id, video._id) : addVideoToPlaylist(playlistName._id, video),
                    hidePlaylist()
            }} />
            <span className="playlistName--title">{playlistName.title}</span>
        </div>
    )
}