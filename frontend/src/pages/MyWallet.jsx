import { data, Link } from 'react-router-dom'
import '../css/MyWallet.css'
import { useEffect, useState } from 'react'
import { User } from '../../classes/User'
import LastEventList from '../components/LastEventList'

const MyWallet = () => {
    const [user, setUser] = useState(User.get());
    const [isHistory, setIsHistory] = useState(user.history.length !== 0 ? true : false);
    console.log("history: ", isHistory);

    useEffect(() => {
        setUser(User.get());
    }, []);

    const handleBalanceChange = async () => {
        User.setBalance(200); 
        setUser(User.get());
    };

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
            <div className='top-block'>
                <h1 className="logo">My Wallet</h1>
                <Link to="/" className='log-out' onClick={() => User.clear()}>Log out</Link>
            </div>
            <div className='wallet-block'>
                <div className='cards-section'>
                    <div className='card-img card-blue'>
                        <p className='balance'>{user?.balance}</p>
                    </div>
                    <div className='card-img card-black'>
                        <p className='balance'>{user?.creditBalance}</p>
                    </div>
                </div>
                

                <div className='actionButtons-section'>
                    <Link to="/MyWallet/Blik">BLIK</Link>
                    <Link to="/MyWallet/Transfer">Transfer</Link>
                    <Link to="/MyWallet/History">History</Link>
                    <button onClick={handleBalanceChange}>Balance</button>
                </div>

                <div className='lastEvents-section'>
                    <h2>Last Events</h2>
                    
                    {isHistory ? (
                        Object.entries(groupedByDate).map(([date, events]) => (
                            <div key={date} className='day-event'>
                                <h3>{date}</h3>
                                <LastEventList key={date} events={events}/>
                            </div>
                        ))
                    ) : (
                        <p className='error'>No transactions were made.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyWallet