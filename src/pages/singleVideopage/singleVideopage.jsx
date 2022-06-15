import { useParams } from 'react-router-dom';
import { HorizontalCard } from '../../components/horizontalCard/horizontalCard';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { SingleVideoCard } from '../../components/singleVideoCard/singleVideoCard';
import { useCategory } from '../../context/categoryContext/categoryContext';
import { useVideoList } from '../../context/videoListContext/videoListContext';
import '../singleVideopage/singleVideopage.css';

const SingleVideoPage = () => {
    const { isMenuOpen } = useCategory();
    const { videoList } = useVideoList();
    const videoId = useParams();

    const findVideoById = () => {
        return videoList.find(videoItem => videoItem._id === videoId.id);
    }
    const findVideoByCategory = () => {
        return videoList.filter(videoItem => videoItem.categoryName === findVideoById().categoryName)
    }

    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className="display-video-container">
                    <div className="single-video-block">
                        <SingleVideoCard currentVideo={findVideoById()} />
                    </div>
                    <div className="side-video-block">
                        {
                            findVideoByCategory().map(currentVideo => <HorizontalCard video={currentVideo} key={currentVideo._id} />)
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export { SingleVideoPage };