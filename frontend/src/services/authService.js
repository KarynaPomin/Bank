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

export const loginUser = async (email, password) => {
    try {
        const res = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`);
        const users = await res.json();

        if (users.length === 0) 
            return { success: false, message: "User not found" };
        
        const user = users[0]; 
        if (user.password === password) {
            localStorage.setItem("loggedUserEmail", user.email)
            return { 
                success: true, 
                message: "User successfully logged in!",
                user
            };
        } else {
            return { success: false, message: "Incorrect password" };
        }

    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const getLoggedUser = async () => {
    const email = localStorage.getItem("loggedUserEmail");
};


// User Service 

export const updateUserBalance = async (email, newBalance) => {
    try {
        const res = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`);
        const users = await res.json();

        if (users.length === 0) {
            return { success: false, message: "User not found" };
        }

        const userId = users[0].id;

        // Aktualizacja użytkownika (PATCH)
        const updateRes = await fetch(`${API_URL}/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ balance: newBalance }),
        });

        if (!updateRes.ok) {
            throw new Error("Failed to update user balance");
        }

        return { success: true, message: "Balance updated!" };

    } catch (error) {
        return { success: false, message: error.message };
    }
};

