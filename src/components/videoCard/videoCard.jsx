import '../videoCard/videoCard.css';
import { useVideoList } from '../../context/videoListContext/videoListContext';

export const VideoCard = () => {

    const { filteredVideoList } = useVideoList();
    console.log('from video card', filteredVideoList)
    return (
        <>
            {
                filteredVideoList.map(video => {
                    return (
                        <div className="card-container" key={video._id}>
                            <div className='card__img-container'>
                                <img src={video.thumbnail} alt="video name" className="card__img" />
                                <span className='video-time-count'>{video.timeDuration}</span>
                            </div>
                            <div className="card-content">
                                <div className='title-container'>
                                    <h1 className="card--title">{video.title}</h1>
                                    <span className="material-symbols-outlined">
                                        more_vert
                                    </span>
                                </div>

                                <p className="card--channel-name">{video.creator}</p>
                                <div className="card-sub-content">
                                    <span className="card--channel-views">{video.views} views</span>
                                    <span className="card-time-uploaded">{video.timeReleased}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}






