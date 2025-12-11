import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [foodList, setFoodList] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [daysSinceIAte, setDaysSinceIAte] = useState("");

  const API = "http://localhost:3001";

  // Fetch Food List
  const fetchFood = async (token) => {
    try {
      const res = await axios.get(`${API}/api/food`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setFoodList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/register`, {
        name: userName,
        email: email,
        password: password,
      });
      alert("Registered! Now Login.");
    } catch (err) {
      console.log(err);
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/login`, {
        name: userName,
        password: password,
      });

      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);

      fetchFood(res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  // Add Food
  const handleAddFood = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/api/food`,
        { name: foodName, daysSinceIAte },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFoodName("");
      setDaysSinceIAte("");

      fetchFood(token);
    } catch (err) {
      console.log(err);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setFoodList([]);
  };

  // If Not Logged In → Show Register & Login Forms
  if (!isLoggedIn) {
    return (
      <div>
        <h2>Food Tracker</h2>

        <h3>Register</h3>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>

        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  // If Logged In → Show Food Management UI
  return (
    <div>
      <h2>Welcome, {userName}</h2>

      <button onClick={handleLogout}>Logout</button>

      <h3>Add Food</h3>
      <form onSubmit={handleAddFood}>
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Days Since I Ate"
          value={daysSinceIAte}
          onChange={(e) => setDaysSinceIAte(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h3>Your Foods</h3>
      <ul>
        {foodList.map((food) => (
          <li key={food._id}>
            {food.name} — {food.daysSinceIAte} days ago
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
