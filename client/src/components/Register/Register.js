import React, {useState} from "react";
import axios from "axios";
import { json } from "express";

const Register = ()=> {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm:''
    });

const {name, email, password, passwordConfirm} =userData;

const  onChange = e => {
    const { name, value } = e.target;
    setUserData({
        ...userData,
        [name]: value
    })
}

const register = async () => {
    // check that passwords match
    if (password !== passwordConfirm) {
        console.log('Passwords do not match')
    } else {
        //create a user object
        const newUser ={
            name: name,
            email: email,
            pasword: password
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body =JSON.stringify(newUser);
            const res = await axios.post('http://localhost:5000/api/users', body, config);
            console.log(res.data);
        } catch (error) { 
            console.error(error.response.data);
            return;
        }
    }
}


return (
  <div>
    <h2>Register</h2>
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => onChange(e)}
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Confirm Password"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={(e) => onChange(e)}
      />
    </div>
    <div>
    <button onClick={() => register()}>Register</button>
    </div>
  </div>
)




}

export default Register