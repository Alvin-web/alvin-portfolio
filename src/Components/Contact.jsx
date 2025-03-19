
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
} from "../firebaseconfig";
import "../Contact.css";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Firebase authentication (Firebase v9 or later)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save additional data to Firestore (Firebase v9 or later)
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        message: message,
      });

      alert("Registration successful!");
      setEmail("");
      setPassword("");
      setName("");
      setMessage("");
    } catch (error) {
      setError(error.message); // Display error message if registration fails
    }
  };

  return (
    
    
    <div className="register-page">

      
      <div className="container">
        <form onSubmit={handleRegister}>
          <h1>Want to work together?</h1>
          <h3>Let's Connect</h3>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label id="kaka" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your message"
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button id="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
