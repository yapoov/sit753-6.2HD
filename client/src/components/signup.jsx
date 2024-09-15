import React, { useState } from 'react';
import "../App.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Here you can handle form submission, e.g., send data to backend
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <div className="my-modal modal-sm">
        <div className="logo">
          <h2 className="text-center">Sign Up for FoodXP</h2>
        </div>
        <div className='login-group'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control text-center" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control text-center" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                className="form-control text-center" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                className="form-control text-center" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                className="form-control text-center" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>

            <div className="text-end">
              <Link to="/login" className="link">Already have an account? Log In</Link>
            </div>

            <div className="float-right p-t-30">
              <button type="submit" className="btn btn-success m-l-15">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
