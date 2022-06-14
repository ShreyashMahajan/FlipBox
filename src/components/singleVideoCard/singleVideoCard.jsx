import '../singleVideoCard/singleVideoCard.css';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiMenuAddFill } from "react-icons/ri";
import airplane from '../../assets/images/airplane.jpg';
import remove from '../../assets/images/remove.png';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';


export const SingleVideoCard = (props) => {
    const { currentVideo } = props;
    const { likeHistoryState, addToWatchlater, addToLikedVideo, deleteFromLikedVideo, deleteFromWatchlater } = useLikeHistoryWatchlater();
    const { historyList, likeList, watchlaterList } = likeHistoryState;

    const isVideoPresent = (videoList, video) => {
        if (videoList.find(videoItem => videoItem._id === video._id) === undefined) {
            return false;
        } else {
            return true;
        }
    }

    let likeVideoPresent = isVideoPresent(likeList, currentVideo);
    let watchlaterPresent = isVideoPresent(watchlaterList, currentVideo);
    let isHistoryPresent = isVideoPresent(historyList, currentVideo);

    return (
        <>
            {
                <div className='singlecard-container'>
                    <div className='singleVideo-container'>
                        <iframe
                            className='single__img'
                            src={`https://www.youtube.com/embed/${currentVideo?._id}`}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className="singleVideo-info">
                        <h1 className="singleVideo--title">{currentVideo?.title}</h1>
                        <div className="singleVideo-view-like-container">
                            <div className='view-date-container'>
                                <p className='text-small'>{currentVideo?.views} views</p>
                                <p className='text-small'> {currentVideo?.timeReleased}  </p>
                            </div>
                            <div className='like-save-container'>
                                {likeVideoPresent ? <AiFillLike className='icon__img' onClick={() => deleteFromLikedVideo(currentVideo)} /> : <AiOutlineLike className='icon__img' onClick={() => addToLikedVideo(currentVideo)} />}

                                {/* <RiMenuAddFill className='icon__img' /> */}
                                {watchlaterPresent ? <MdWatchLater className='icon__img' onClick={() => deleteFromWatchlater(currentVideo)} /> : <MdOutlineWatchLater className='icon__img' onClick={() => addToWatchlater(currentVideo)} />}
                            </div>
                        </div>
                        <div className="singleVideo-channel-info">
                            <div className="channel-data-container">
                                <img src={remove} alt="channel image" className='channel__img' />
                                <div className="channel-name-container">
                                    <p className="channel--name"> {currentVideo?.creator} </p>
                                    <p className='text-small' >11.2M subscribers</p>
                                </div>
                            </div>
                            <div className="btn-container">
                                <button className='btn-subscribe' > Subscribe</button>
                            </div>
                        </div>
                        <div className="singleVideo-description-container">
                            <p className="singleVideo-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}