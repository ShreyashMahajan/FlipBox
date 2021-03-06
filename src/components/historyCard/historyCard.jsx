import '../historyCard/historyCard.css';
import airplane from '../../assets/images/airplane.jpg';
import remove from '../../assets/images/remove.png';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';

export const HistoryCard = (props) => {
    const { video } = props;
    const { deleteFromHistory } = useLikeHistoryWatchlater();


    return (
        <div className="card-container" key={video._id}>
            <div className='card__img-container'>
                <iframe src={`https://www.youtube.com/embed/${video._id}`} className='card__iframe'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />
                <img src={remove} alt="remove" className='heart__img' onClick={() => deleteFromHistory(video)} />

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