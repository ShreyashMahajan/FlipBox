import '../watchLaterCard/watchLaterCard.css';
import heart from '../../assets/images/heart.png';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';

export const WatchLaterCard = (props) => {
    const { video } = props;
    const { deleteFromWatchlater } = useLikeHistoryWatchlater();
    return (
        <div className="card-container" key={video._id}>
            <div className='card__img-container'>
                <img src={video.thumbnail} alt="video name" className="card__img" />
                <img src={heart} alt="heart png" className='heart__img' onClick={() => deleteFromWatchlater(video)} />

            </div>
            <div className="card-content">
                <div className='title-container'>
                    <h1 className="card--title">{video.title}</h1>

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