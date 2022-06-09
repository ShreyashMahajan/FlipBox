import '../videoCard/videoCard.css';
import { useState } from 'react';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';
import { useAuth } from '../../context/authContext/authContext';
import { FaTimes } from 'react-icons/fa';
import { PlaylistName } from '../playlistName/playlistName';
import { usePlaylist } from '../../context/playlistContext/playlistContext';



export const VideoCard = (props) => {

    const [showMoreItemClass, setShowMoreItemClass] = useState(false);
    const { video } = props;
    const { addToWatchlater, addToLikedVideo, deleteFromWatchlater, deleteFromLikedVideo } = useLikeHistoryWatchlater();
    const { likeHistoryState, addToHistory } = useLikeHistoryWatchlater();
    const { likeList, watchlaterList, historyList } = likeHistoryState;
    const { isUserLoggedIn } = useAuth();
    const [showPlaylist, setShowPlaylist] = useState(false);
    const { playlistState, addPlaylist } = usePlaylist();
    const { playlist } = playlistState;
    const [playlistInput, setPlaylistInput] = useState('');

    const isVideoPresent = (videoList, video) => {
        if (videoList.find(videoItem => videoItem._id === video._id) === undefined) {
            return false;
        } else {
            return true;
        }
    }

    let likeVideoPresent = isVideoPresent(likeList, video);
    let watchlaterPresent = isVideoPresent(watchlaterList, video);
    let isHistoryPresent = isVideoPresent(historyList, video);

    return (
        <>
            <div className="card-container" key={video._id} >
                <div className='card__img-container' >
                    <iframe src={`https://www.youtube.com/embed/${video._id}`} className='card__iframe'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video' />

                    <span className='video-time-count'>{video.timeDuration}</span>
                </div>
                <div className="card-content" onClick={() => { !isHistoryPresent && isUserLoggedIn && addToHistory(video) }} >
                    <div className='title-container'>
                        <h1 className="card--title">{video.title}</h1>
                        {
                            isUserLoggedIn &&
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
                                    <li className='more-item' onClick={() => {
                                        setShowMoreItemClass(false),
                                            setShowPlaylist(!showPlaylist)
                                    }}>Add to Playlist</li>
                                </ul>

                            </div>
                        }
                    </div>

                    <p className="card--channel-name">{video.creator}</p>
                    <div className="card-sub-content">
                        <span className="card--channel-views">{video.views} views</span>
                        <span className="card-time-uploaded">{video.timeReleased}</span>
                    </div>
                </div>
            </div>

            {showPlaylist &&
                <div className='playlist-modal'>
                    <div className='playlist--title-container'>
                        <h1 className='playlist--title'> Add to </h1>
                        <FaTimes className='delete--icon' onClick={() => setShowPlaylist(!showPlaylist)} />
                    </div>
                    <li>
                        {
                            (playlist.length !== 0 && playlist !== undefined) && playlist.map(playlistName => {
                                return <PlaylistName key={playlistName._id} playlistName={playlistName} video={video} />
                            })
                        }

                    </li>
                    <div className='playlist-create-container'>
                        <input type='text' placeholder='create playlist' className='input__name' onChange={(e) => setPlaylistInput(e.target.value)} value={playlistInput} />
                        <button className='btn__add' onClick={() => {
                            addPlaylist(playlistInput),
                                setPlaylistInput('');
                        }} >Create</button>
                    </div>
                </div>
            }

        </>
    )
}