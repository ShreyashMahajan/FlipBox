import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { WatchLaterCard } from '../../components/watchLaterCard/watchLaterCard';
import { useCategory } from '../../context/categoryContext/categoryContext';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';
import '../watchLater/watchLater.css';

export const WatchLater = () => {
    const { isMenuOpen } = useCategory();
    const { likeHistoryState } = useLikeHistoryWatchlater();
    const { watchlaterList } = likeHistoryState

    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container'>
                    <h1 className='category--title'>Watch Later</h1>
                </div>
                <div className="videoCard-container flex-center">
                    {
                        watchlaterList.map(videoItem => {
                            return <WatchLaterCard video={videoItem} key={videoItem._id} />
                        }
                        )}

                </div>
            </main>
        </div>
    )
}