import { HistoryCard } from '../../components/historyCard/historyCard';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import '../history/history.css';

export const History = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container'>
                    <h1 className='category--title'>History</h1>
                </div>
                <div className="videoCard-container">
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </div>
            </main>
        </div>
    )
}