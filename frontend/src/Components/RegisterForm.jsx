import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/userSchema";
import { registerUser } from "../services/authService";

const RegisterForm = () => {
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
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input type="password" {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>

        <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;