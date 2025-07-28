import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + "You Are Successfully Logged In")
            }
            else {
                console.log("Email or Password is not matching.")
            }
        }
        else {
            console.log("Email or Password is not matching.")
        }
    }

    return (
        <div className='login-block' id='login-block'>
            <div className='sign-text-block'>
                <h1 className='logo'>MyBank</h1>
                <h2>Let's sign you in.</h2>
                <h3>Welcome back.</h3>
            </div>

            {/* // TODO: chek if user exist by Zod. */}
            <div className='container form-block'>
                <form action="" onSubmit={ handleSubmit(onSubmit) }> 
                    <input 
                        type="email" 
                        {...register("email", { required: true })}
                        placeholder='Email adress'
                    />

                    <input 
                        type="password" 
                        {...register("password", {required: true})}
                        placeholder='Password'
                    />
                    <button>Login</button>
                    <p>Forgot Password</p>
                    <p>Don't have an accoount? <a>Sigh up</a></p>
                </form>
            </div>
    </div>
    )
}

export default Login