import '../css/Blik.css'
import { Link } from 'react-router-dom'

const Blik = () => {
    return (
        <div className='main-container'>
            <h1 className="logo">Blik</h1>

            <Link to="/MyWallet">Back</Link>

            <div className='blik-block'>
                <h1 className='blik-code'>234 544</h1>

                <p className='blik-code-valid'>Blick code is valid for </p>
                <p className='blik-code-valid-time'>1 m 8s</p>
                <progress className='blik-code-progres-time'></progress>
                <button className='blik-code-copy'>Copy code</button>
            </div> 
        </div>
    )
}

export default Blik