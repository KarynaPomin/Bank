import '../css/Home.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import cardsImg from '../assets/Cards.png';
import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';

const Home = () => {

    return (
        <main className='home'>
            {/* Start */}
            <div className='container main-block'>
                <h1>MyBank</h1>
                <img src={cardsImg} alt="cards" className='cards-img'/>

                <h2>Everyday Banking Made Simple</h2>
                <h3>All of your financial needs & transactions in one banking application.</h3>

                <AnchorLink href="#login-block">
                    {/* <button onClick="">↓</button> */}
                </AnchorLink>
            </div>

            {/* <LoginForm /> */}
            <RegisterForm />
        </main>             
    )
}

export default Home