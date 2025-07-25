import '../css/History.css'
import { Link } from 'react-router-dom'

const History = () => {
    return (
        <div className='main-container'>
            <h1 className="logo">History</h1>
            <Link to="/MyWallet">Back</Link>

            <div className='history-block'>
                <div className='search-block'>
                    <input type="text" className='search'placeholder='Find tronsaction'/>   
                    <button>Search</button>
                </div>

                <div className='actionButtons-section'>
                    <button>Date</button>
                    <button>Amount</button>
                    <button>Incomes</button>
                    <button>Expenses</button>
                </div>

                {/* // TODO: Component */}
                <div className='day-event'>
                    <h3>23 July 2025</h3>
                    <div className='grid-card'>
                        <ul>
                            <li>Lorem ipsum, dolor sit amet.</li>
                            <li>Lorem ipsum, dolor sit amet.</li>
                            <li>Lorem ipsum, dolor sit amet.</li>
                        </ul>
                        <ul>
                            <li>$36.00</li>
                            <li>$36.00</li>
                            <li>$36.00</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History