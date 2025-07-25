import '../css/Transfer.css'
import { Link } from 'react-router-dom'

const Transfer = () => {
    return (
        <div className='main-container'>
            <h1 className="logo">Transfer</h1>

            <Link to="/MyWallet">Back</Link>

            <div className='form-send-block'>
                <form action="">
                    <input 
                        type="text"
                        placeholder='Transfer from'
                    />
                    <input 
                        type="text"
                        placeholder='Transfer to'
                    />
                    <input 
                        type="text"
                        placeholder='Account or phone number'
                    />

                    <button>Next</button>
                </form>
            </div>

            <img src="" alt="" />
        </div>
    )
}

export default Transfer