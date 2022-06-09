import { LikedCard } from "../../components/likedCard/likedCard"
import { Navbar } from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/sidebar"
import { useCategory } from "../../context/categoryContext/categoryContext"
import { useLikeHistoryWatchlater } from "../../context/likeHistoryWatchlaterContext/likeHistoryWatchlaterContext"


export const LikedPage = () => {
    const { isMenuOpen } = useCategory();
    const { likeHistoryState } = useLikeHistoryWatchlater();
    const { likeList } = likeHistoryState;
    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container'>
                    <h1 className='category--title'>Liked Videos</h1>
                </div>
                <div className="videoCard-container flex-center">
                    {
                        likeList.map(videoItem => {
                            return <LikedCard video={videoItem} key={videoItem._id} />
                        })
                    }
                </div>
            </main>
        </div>
    )
}