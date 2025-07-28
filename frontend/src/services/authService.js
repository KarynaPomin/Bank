// // Save user
// localStorage.setItem("karl@example.com", JSON.stringify({ password: "12345678" }));

import { success } from "zod";

// // Load user
// const user = JSON.parse(localStorage.getItem("karl@example.com"));

// // Remove user 
// localStorage.removeItem("karl@example.com");

// export const registerUser = (email, password) => {
//     const existing = localStorage.getItem(email);
//     if (existing) 
//         return {success: false, message: "User already exists,"}

//     localStorage.setItem(email, JSON.stringify({ password }));
//     return {success: true, message: "New user registred!"}
// }   

const API_URL = "http://localhost:8000/users";

export const registerUser = async (email, password) => {
    try {
        // Check if user already exists
        const res = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`);
        const users = await res.json();

        if (users.length > 0) 
            return { success: false, message: "User already exists." };
    
        // Registe new user 
        const createRes = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (!createRes.ok) throw new Error("Failed to register user.");

        return { success: true, message: "New user registered!" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};