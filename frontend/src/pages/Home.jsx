import '../App.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import cardsImg from '../assets/Cards.png'

const Home = () => {
    return (
        <>
            {/* Start */}
            <div className='main-block'>
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

                <div className='form-block'>
                    <form action="">
                        <input type="text" placeholder='Email adress'/>
                        <input type="text" placeholder='Password'/>
                        <button>Login</button>
                        <p>Forgot Password</p>

                        <p>Don't have an accoount? <a>Sigh up</a></p>
                    </form>

                </div>
            </div>

        </>             
    )
}

export default Home