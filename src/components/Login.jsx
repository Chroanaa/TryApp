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
  const location = useLocation();
  const prevLocation = location.state?.prevUrl;
  if (localStorage.getItem("isLoggedIn")) {
    return <Navigate to={prevLocation} replace />;
  }
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const [value, setValue] = React.useState({
    username: "",
    password: "",
  });
  console.log(prevLocation);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const validateUser = async () => {
    try {
      const response = await getUser(value);
      navigate(prevLocation ? prevLocation : "/host", { replace: true });
      localStorage.setItem("isLoggedIn", true);
      window.location.reload();
    } catch (error) {
      setError(error.message.data.message);
      setStatus("idle");
    } finally {
      setValue({
        username: "",
        password: "",
      });
      setStatus("idle");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      validateUser();
    }, 2000);
  };

  const authErrorMessage = location.state?.message;
  const invalidCredentialsMessage = error;
  return (
    <div className='w-full flex justify-center bg-main h-screen'>
      <form
        action=''
        className='flex flex-col gap-4 max-w-96 justify-center place-items-center'
        onSubmit={handleSubmit}
      >
        {invalidCredentialsMessage && (
          <p className='text-red'>{invalidCredentialsMessage}</p>
        )}
        {authErrorMessage && <p className='text-red'>{authErrorMessage}</p>}
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
            required
            autoComplete='on'
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
            required
            autoComplete='on'
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
