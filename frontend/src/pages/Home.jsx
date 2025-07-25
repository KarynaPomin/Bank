import '../css/Home.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import cardsImg from '../assets/Cards.png'
import { Link } from 'react-router-dom';

const Home = () => {

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // if (formData.username === 'admin' && formData.password === '1234') {
        //     navigate('/MyWallet');
        // } else {
        //     setError('Nieprawidłowy login lub hasło');
        // }
    }

    return (
        <main className='home'>
            {/* Start */}
            <div className='container main-block'>
                <h1>MyBank</h1>
                <img src={cardsImg} alt="cards" className='cards-img'/>

                <h2>Everyday Banking Made Simple</h2>
                <h3>All of your financial needs & transactions in one banking application.</h3>

                <AnchorLink href="#login-block">
                    <button onClick="">↓</button>
                </AnchorLink>
            </div>

            {/* Login */}
            <div className='login-block' id='login-block'>
                <div className='sign-text-block'>
                    <h1 className='logo'>MyBank</h1>

                    <h2>Let's sign you in.</h2>
                    <h3>Welcome back.</h3>

                </div>

                {/* TODO: chek if user exist. */}
                <div className='container form-block'>
                    <form action="" onSubmit={handleSubmitLogin}> 
                        <input type="text" placeholder='Email adress'
                            name="username"
                            // value={formData.username}
                            // onChange={handleChange}
                        />
                        <input type="text" placeholder='Password'/>
                        <Link to="/MyWallet">Login</Link>
                        <p>Forgot Password</p>

                        <p>Don't have an accoount? <a>Sigh up</a></p>
                    </form>

                </div>
            </div>

        </main>             
    )
}

export default Home