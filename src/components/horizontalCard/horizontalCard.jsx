import '../horizontalCard/horizontalCard.css';
import airplane from '../../assets/images/airplane.jpg';

export const HorizontalCard = (props) => {
    const { video } = props;

    return (
        <>
            {Object.keys(video).length !== 0 &&
                <div className="horizontalCard-container">
                    <div className="card__img-container">
                        <img src={video.thumbnail} alt="airplane" className='horizontal__img' />
                        <p className='card-time-duration'> {video.timeDuration} </p>
                    </div>
                    <div className="horizontalCard-info-container">
                        <p className="horizontalCard--title"> {video.title} </p>
                        <p className="text-small size-small">{video.creator}</p>
                        <div className='horizontal-view-date-container'>
                            <p className="text-small size-small">{video.views}</p>
                            <p className="text-small size-small">{video.timeReleased}</p>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}