/* eslint no-use-before-define: 0 */ // --> OFF
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        username: input.username,
        password: input.password,
        email: input.email,
      })
    );
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h5>Sign Up</h5>
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Enter Name"
                value={input.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={input.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={input.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
