import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";

const Signin = () => {
  const dispatch = useDispatch();
  // state needs to start empty
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // Handles Form Submissions and runs it through the signin() in redux folder
  const handleSubmit = (e) => {
    e.preventDefault(); // need to prevent reload after form submission
    dispatch(
      signin({
        email: input.email,
        password: input.password,
      })
    );
  };

  // Gets the input name + input email to have the value entered in state email + password
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
            <h5>Sign In</h5>
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
              <button type="submit" className="button">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
