import React, { createContext } from "react";
import { NavLink } from "react-router-dom";
function Login() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [value, setValue] = React.useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    setIsLoggedIn;
  };

  return (
    <div className="w-full flex justify-center bg-main h-screen">
      <form
        action=""
        className="flex flex-col gap-4 max-w-96 justify-center place-items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-large rounded-xl p-5 bg-orange">
          Login to you Account
        </h1>
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="p-3 rounded-lg"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={value.username}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="p-3 rounded-lg"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={value.password}
          />
        </div>
        <div className="text-small">
          <NavLink className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2">
            Forgot password?
          </NavLink>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-orange px-4 py-2 rounded-lg text-primary  cursor-pointer hover:bg-green transition-all duration-300 ease-in-out"
        />
      </form>
    </div>
  );
}

export default Login;
