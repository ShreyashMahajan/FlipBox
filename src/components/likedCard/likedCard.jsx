import '../likedCard/likedCard.css';
import deleteImg from '../../assets/images/deleteImg.png';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';
import { toast } from 'react-toastify';
export const LikedCard = (props) => {
    const { video } = props;
    const { deleteFromLikedVideo } = useLikeHistoryWatchlater();

    return (
        <div className="card-container" >
            <div className='card__img-container'>
                <iframe src={`https://www.youtube.com/embed/${video._id}`} className='card__iframe'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />
                <span className='video-time-count'>{video.timeDuration}</span>
            </div>
            <div className="card-content">
                <div className='title-container'>
                    <h1 className="card--title">{video.title}</h1>
                    <img src={deleteImg} alt="delete playlist" onClick={() => { deleteFromLikedVideo(video), toast.success('deleted successfully') }} className='icon__img' />
                </div>

                <p className="card--channel-name">{video.creator}</p>
                <div className="card-sub-content">
                    <span className="card--channel-views">{video.views}</span>
                    <span className="card-time-uploaded">{video.timeReleased}</span>
                </div>
            </div>
        </div>
    )
}