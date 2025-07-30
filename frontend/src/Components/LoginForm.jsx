import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "../schemas/userSchema";
import { getLoggedUser, loginUser, registerUser } from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from '../../classes/User'

const LoginForm = () => {
    const [isRegistered, setIsRegistred] = useState(true);
    const navigate = useNavigate();

    return (
        <div className='login-block' id='login-block'>
            <div className='sign-text-block'>
                <h1 className='logo'>MyBank</h1>
                <h2>Let's sign you in.</h2>
                <h3>Welcome back!</h3>
            </div>
            
            {isRegistered ? <Login /> : <Register />}
        </div>
    );

    function Login() {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: zodResolver(loginSchema)
        });

        const onSubmit = async (data) => {
            const result = await loginUser(data.email, data.password);
            alert(result.message);

            if (result.success){
                new User(result.user);
                navigate("/MyWallet");
            }
        };
        
        return (<form onSubmit={ handleSubmit(onSubmit) } className='container form-block'>
            <input 
                type="email"
                {...register("email")} 
                placeholder="Email" 
            />
            <p>{errors.email?.message}</p>

            <input 
                type="password" 
                {...register("password")} 
                placeholder="Password" 
            />
            <p>{errors.password?.message}</p>

            <button type="submit">Login</button>

            <p>Don't have an account? 
                <a onClick={() => setIsRegistred(false)}>Register</a>
            </p>
        </form>)
    }

    function Register() {
        const {
            register, 
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: zodResolver(registerSchema),
        });
        
        const onSubmit = async (data) => {
            const result = await registerUser(data.email, data.password);
            alert(result.message);

            if (result.success)
                window.location.reload();
        };

        return (<form onSubmit={ handleSubmit(onSubmit) } className='container form-block'>
            <input 
                type="email"
                {...register("email")} 
                placeholder="Email" 
            />
            <p>{errors.email?.message}</p>

            <input 
                type="password" 
                {...register("password")} 
                placeholder="Password" 
            />
            <p>{errors.password?.message}</p>

            <input 
                type="password" 
                {...register("confirmPassword")} 
                placeholder="Confirm Password" 
            />
            <p>{errors.confirmPassword?.message}</p>

            <button type="submit">Register</button>

            <p>Already have an account? 
                <a onClick={() => setIsRegistred(true)}>Sign in</a>
            </p>
        </form>)
    }
}

export default LoginForm