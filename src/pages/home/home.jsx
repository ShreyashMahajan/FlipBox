import { ChipComp } from '../../components/chipComp/chipComp';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { VideoCard } from '../../components/videoCard/videoCard';
import '../home/home.css';

export const Home = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <ul className='sub-container'>
                    <ChipComp />
                    <ChipComp />
                    <ChipComp />
                    <ChipComp />
                </ul>
                <div className="videoCard-container">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />

                </div>
            </main>
        </div>
    )
}