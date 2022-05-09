import '../historyCard/historyCard.css';
import airplane from '../../assets/images/airplane.jpg';
import remove from '../../assets/images/remove.png';

export const HistoryCard = () => {
    return (
        <div className="card-container">
            <div className='card__img-container'>
                <img src={airplane} alt="video name" className="card__img" />
                <img src={remove} alt="remove" className='heart__img' />

            </div>
            <div className="card-content">
                <div className='title-container'>
                    <h1 className="card--title">This is the title of this video</h1>

                </div>

                <p className="card--channel-name">Channel</p>
                <div className="card-sub-content">
                    <span className="card--channel-views">200k views</span>
                    <span className="card-time-uploaded">2 years ago</span>
                </div>
            </div>
        </div>
    )
}