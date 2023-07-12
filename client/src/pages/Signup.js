import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login" style={{ color: '#00adef' }}>← Go to Login</Link>
      <br></br>
      <br></br>
      <br></br>
      <h2>Sign Up (It's🆓!)</h2>
      <div className="center-content">
        <form onSubmit={handleFormSubmit}>
          <div className="first-name">
            <label htmlFor="firstName">First Name:  </label>
            <input
              placeholder="First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last Name:  </label>
            <input
              placeholder="Last Name"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Your Email:  </label>
            <input
              placeholder="example@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="pwd">Password:  </label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="button">
            <button type="submit">Signup Now!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
