import { updateUserBalance } from "../src/services/authService";

export class User {
  static user;

  constructor(user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    this.user = user;
    console.log("Constructor create user: ", user)
  }
  
  static save(user) {
    this.user = user;
    localStorage.setItem("loggedUser", JSON.stringify(user));
    console.log("Save user: ", user)
  }

  static get() {
    if (!this.user) {
        const data = localStorage.getItem("loggedUser");
        this.user = data ? JSON.parse(data) : null;
    }

    console.log("Get user: ", this.user)
    return this.user;
   }

  static getBalance() {
    const user = this.user;

    console.log("Get balance: ", user.balance)
    return user?.balance ?? 0;
  }

  static async setBalance(amount) {
    const user = this.get();
    if (!user) return;

    user.balance += amount;
    this.save(user);

    // Aktualizacja na serwerze
    const res = await updateUserBalance(user.email, user.balance);
    console.log("Set balance:", user.balance, "| API:", res);
    window.location.reload(false);
  }


  static getHistory() {
    const user = this.user;

    console.log("Get history: ", user.history)
    return user?.history || [];
  }

//   static setHistory(historyArray) {
//     const user = this.get();
//     if (!user) return;
//     user.history = historyArray;
//     this.save(user);
//   }

  static clear() {
    this.user = null;
    localStorage.removeItem("loggedUser");
    
    console.log("Removed user: ", this.user)
  }
}
