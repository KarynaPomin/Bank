import { Link } from 'react-router-dom'
import '../css/MyWallet.css'
import BlueCard from "../assets/CartBlueBalance.png"
import BlackCard from "../assets/CartBlackBalance.png"
import { useState } from 'react'

const MyWallet = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='main-container'>
            <div className='top-block'>
                <h1 className="logo">My Wallet</h1>
                <Link to="/" className='log-out'>Log out</Link>
            </div>
            <div className='wallet-block'>
                <div className='cards-section'>
                    <img src={BlueCard} alt="card" className='card-img' />
                    <img src={BlackCard} alt="card" className='card-img' />
                    <span className='card-img'></span>
                </div>

                <div className='actionButtons-section'>
                    <Link to="/MyWallet/Blik">BLIK</Link>
                    <Link to="/MyWallet/Transfer">Transfer</Link>
                    <Link to="/MyWallet/History">History</Link>
                </div>

                <div className='lastEvents-section'>
                    <h2>Last Events</h2>

                    {/* // TODO: Component */}
                    <div className='day-event'>
                        <h3>23 July 2025</h3>

                        <div className='card-event'>
                            <div className='title-card-event'>
                                <p>Expenses</p>
                                <p>$64.98</p>
                            </div>

                            <p className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? "▼" : "▶" }
                            </p>
                        </div>
                        
                        {isOpen && (
                                <div className='grid-card-event'>
                                    <ul>
                                        <li>Expenses</li>
                                        <li>Expenses</li>
                                        <li>Expenses</li>
                                    </ul>
                                    <ul>
                                        <li>$36.00</li>
                                        <li>$36.00</li>
                                        <li>$36.00</li>
                                    </ul>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWallet