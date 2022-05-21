import { HistoryCard } from '../../components/historyCard/historyCard';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import '../history/history.css'
import { useCategory } from '../../context/categoryContext/categoryContext.jsx';
import { useLikeHistoryWatchlater } from '../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext';


export const History = () => {
    const { isMenuOpen } = useCategory();
    const { likeHistoryState, clearAllFromHistory } = useLikeHistoryWatchlater();
    const { historyList } = likeHistoryState;
    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container'>
                    <h1 className='category--title'>History</h1>
                    <button className='btn-create' onClick={() => clearAllFromHistory()}>clear all</button>
                </div>
                <div className="videoCard-container flex-center">
                    {
                        historyList.map(videoItem => {
                            return <HistoryCard video={videoItem} key={videoItem._id} />
                        })
                    }

                </div>
            </main>
        </div>
    )
}