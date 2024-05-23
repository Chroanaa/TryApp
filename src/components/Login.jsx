import React, { createContext } from "react";
import {
  Form,
  NavLink,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getUser } from "../utils/api";
function Login() {
  const [status, setStatus] = React.useState("idle");
  if (localStorage.getItem("isLoggedIn")) {
    return <Navigate to='/host' replace />;
  }
  const location = useLocation();
  const navigate = useNavigate();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    setStatus("loading");
    setTimeout(() => {
      setStatus("idle");
      document.getElementById("submitBtn").disabled = false;
    }, 2000);
    validateUser();
  };
  const validateUser = async () => {
    const response = await getUser(value);
    if (response.status === 401) {
      navigate("/login", { state: { message: response.data.message } });
      return;
    }
    localStorage.setItem("isLoggedIn", true);
  };
  const errorMessage = location.state?.message;
  return (
    <div className='w-full flex justify-center bg-main h-screen'>
      <form
        action=''
        className='flex flex-col gap-4 max-w-96 justify-center place-items-center'
        onSubmit={handleSubmit}
      >
        {errorMessage && <p className='text-red'>{errorMessage}</p>}
        <h1 className='text-large rounded-xl p-5 bg-orange'>
          Login to you Account
        </h1>
        <div className='flex flex-col'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            className='p-3 rounded-lg'
            name='username'
            placeholder='Username'
            onChange={handleChange}
            value={value.username}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='p-3 rounded-lg'
            name='password'
            placeholder='Password'
            onChange={handleChange}
            value={value.password}
          />
        </div>
        <div className='text-small'>
          <NavLink className='underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2 '>
            Forgot password?
          </NavLink>
        </div>
        <button
          id='submitBtn'
          className='bg-orange px-4 py-2 rounded-lg text-primary  cursor-pointer disabled:bg-gray text-black hover:bg-green transition-all duration-300 ease-in-out'
        >
          {status === "loading" ? "Submitting..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
