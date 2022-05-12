import { HistoryCard } from '../../components/historyCard/historyCard';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import '../history/history.css';


export const History = () => {

    const pullData = (data) => {
        return data;
    }

    return (
        <div className="app-container">
            <Navbar func={pullData} />
            <Sidebar />
            <main className='mainbar' >
                <div className='sub-container'>
                    <h1 className='category--title'>History</h1>
                    <button className='btn-create'>clear all</button>
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