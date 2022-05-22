import { ChipComp } from '../../components/chipComp/chipComp';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { VideoCard } from '../../components/videoCard/videoCard';
import { useCategory } from '../../context/categoryContext/categoryContext';
import { useVideoList } from '../../context/videoListContext/videoListContext';
import '../home/home.css';

export const Home = () => {
    const { isMenuOpen } = useCategory();
    const { filteredVideoList } = useVideoList();

    return (
        <div className={`app-container flex-center ${!isMenuOpen ? 'app-container_hideMenu' : ''} `} >
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <ul className='sub-container flex-start'>
                    <ChipComp />

                </ul>
                <div className="videoCard-container flex-center">
                    {
                        filteredVideoList.map(videoItem => {
                            return <VideoCard video={videoItem} key={videoItem._id} />
                        })
                    }
                </div>
            </main>
        </div>
    )
}