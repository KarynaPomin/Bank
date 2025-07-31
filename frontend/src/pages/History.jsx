import { useState } from 'react'
import '../css/History.css'
import { Link } from 'react-router-dom'
import { User } from '../../classes/User';
import HistoryEvent from '../components/HistoryEvent';

const History = () => {
    const [user, setUser] = useState(User.get());
    const [isHistory, setIsHistory] = useState(user.history.length !== 0 ? true : false);
    
    let groupedByDate = [];
    if (isHistory) {
        groupedByDate = user.history.reduce((acc, event) => {
            (acc[
                new Date(event.date).toLocaleDateString("en", {
                    year: "numeric",
                    day: "2-digit",
                    month: "long",
                })
            ] = acc[
                new Date(event.date).toLocaleDateString("en", {
                    year: "numeric",
                    day: "2-digit",
                    month: "long",
                })
            ] || []).push(event);
            return acc;
        }, {});
    }

    return (
        <div className='main-container'>
            <h1 className="logo">History</h1>
            <Link to="/MyWallet">Back</Link>

            {/* // TODO: Search */}
            <div className='history-block'>
                <div className='search-block'>
                    <input type="text" className='search'placeholder='Find tronsaction'/>   
                    <button>Search</button>
                </div>

                {/* // TODO: Filter by: */}
                <div className='actionButtons-section'>
                    <button>Date</button>
                    <button>Amount</button>
                    <button>Incomes</button>
                    <button>Expenses</button>
                </div>

                <div className='history-events'>
                    {/* // TODO: Component */}
                    {isHistory ? (
                        Object.entries(groupedByDate).map(([date, events]) => (
                            <div key={date} className='day-event'>
                                <h3>{date}</h3>
                                <HistoryEvent key={date} events={events} />
                            </div>
                        ))
                    ) : (
                        <p className='error'>No history yet.</p>
                    )}
                </div>
                
            </div>

        </div>
    )
}

export default History