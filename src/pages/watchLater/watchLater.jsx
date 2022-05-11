import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { WatchLaterCard } from '../../components/watchLaterCard/watchLaterCard';
import '../watchLater/watchLater.css';

export const WatchLater = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container'>
                    <h1 className='category--title'>Watch Later</h1>
                </div>
                <div className="videoCard-container">
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                    <WatchLaterCard />
                </div>
            </main>
        </div>
    )
}