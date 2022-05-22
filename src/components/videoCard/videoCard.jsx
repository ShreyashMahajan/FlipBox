import '../videoCard/videoCard.css';
import { useState } from 'react';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';


export const VideoCard = (props) => {

    const [showMoreItemClass, setShowMoreItemClass] = useState(false);
    const { video } = props;
    const { addToWatchlater, addToLikedVideo, deleteFromWatchlater, deleteFromLikedVideo } = useLikeHistoryWatchlater();
    const { likeHistoryState, addToHistory } = useLikeHistoryWatchlater();
    const { likeList, watchlaterList, historyList } = likeHistoryState;

    const isVideoPresent = (videoList, video) => {
        if (videoList.find(videoItem => videoItem._id === video._id) === undefined) {
            return false;
        } else {
            return true;
        }
    }

    let likeVideoPresent = isVideoPresent(likeList, video);
    let watchlaterPresent = isVideoPresent(watchlaterList, video);
    let isHistoryPresent = isVideoPresent(historyList, video)

    return (

        <div className="card-container" key={video._id} >
            <div className='card__img-container' >
                <iframe src={`https://www.youtube.com/embed/${video._id}`} className='card__iframe'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />

                <span className='video-time-count'>{video.timeDuration}</span>
            </div>
            <div className="card-content" onClick={() => { !isHistoryPresent && addToHistory(video) }} >
                <div className='title-container'>
                    <h1 className="card--title">{video.title}</h1>
                    <div className='more-container'>
                        <span className="material-symbols-outlined" onClick={() => setShowMoreItemClass(!showMoreItemClass)}>
                            more_vert
                        </span>
                        <ul className={`more-item-container ${showMoreItemClass ? 'show-moreItem' : ''}`}>
                            {
                                !watchlaterPresent ? <li className='more-item' onClick={() => { addToWatchlater(video), setShowMoreItemClass(false) }}>Add to Watchlater</li> :
                                    <li className='more-item' onClick={() => { deleteFromWatchlater(video), setShowMoreItemClass(false) }}>Remove from Watchlater</li>
                            }
                            {
                                !likeVideoPresent ? <li className='more-item' onClick={() => { addToLikedVideo(video), setShowMoreItemClass(false) }}>Add to Liked</li> :
                                    <li className='more-item' onClick={() => { deleteFromLikedVideo(video), setShowMoreItemClass(false) }}>Remove from Liked</li>
                            }
                            <li className='more-item'>Add to Playlist</li>
                        </ul>
                    </div>
                </div>

                <p className="card--channel-name">{video.creator}</p>
                <div className="card-sub-content">
                    <span className="card--channel-views">{video.views} views</span>
                    <span className="card-time-uploaded">{video.timeReleased}</span>
                </div>
            </div>
        </div>
    )
}