import '../playlistCard/playlistCard.css';
import airplane from '../../assets/images/airplane.jpg';
import { MdDeleteForever } from "react-icons/md";
import { usePlaylist } from '../../context/playlistContext/playlistContext';

export const PlaylistCard = (props) => {
    const { playlistVideo, playlistTile } = props;
    const { deleteVideoFromPlaylist } = usePlaylist();

    return (
        <div className="card-container" key={playlistVideo._id}>
            <div className='card__img-container' >
                <iframe src={`https://www.youtube.com/embed/${playlistVideo._id}`} className='card__iframe'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />

                <span className='video-time-count'>{playlistVideo.timeDuration}</span>
            </div>
            <div className="card-content">
                <div className='title-container'>
                    <h1 className="card--title">{playlistVideo.title}</h1>
                    <div className='more-container'>

                        <MdDeleteForever className='icon--item' onClick={() => deleteVideoFromPlaylist(playlistTile._id, playlistVideo._id)} />
                    </div>
                </div>

                <p className="card--channel-name">{playlistVideo.creator}</p>
                <div className="card-sub-content">
                    <span className="card--channel-views">{playlistVideo.views} views</span>
                    <span className="card-time-uploaded">{playlistVideo.timeReleased}</span>
                </div>
            </div>
        </div>
    )
} 