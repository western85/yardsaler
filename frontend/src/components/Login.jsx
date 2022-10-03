import React, { useState } from "react";
import axios from "axios";
import "./Login.css"

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setInput((prevInput) => {
          return {
            ...prevInput,
            [name]: value,
          };
        });
      };


    const handleLogin = (event) => {
        event.preventDefault();
        const login = {
          email: input.email,
          password: input.password,
        };
    
        setInput({ email: "", password: "" });
        axios.post("http://localhost:3001/login", login);
        console.log("congratulations, idiot- You posted this to atlas:", input);
      };

    return (
        <div className="container">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <input
                onChange={handleChange}
                name="email"
                value={input.email}
                className="form-control"
                placeholder="email"
              ></input>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                name="password"
                value={input.password}
                className="form-control"
                placeholder="Password"
              ></input>
            </div>
            <button onClick={handleLogin} className="btn btn-large btn-info">
              Login
            </button>
          </form>
        </div>
      );
}

export default Login