import React from "react";

function LoginModal({ isShow, showToggle }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={`fixed inset-0  ${isShow ? "block" : "hidden"}`}>
      <div
        className={`modal ${
          isShow ? "flex flex-col" : "none"
        } bg-main absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 opacity-100 rounded-lg shadow-lg`}
      >
        <div className="modal-header flex flex-row justify-between mb-10">
          <h5 className="font-bold"> Sign in to your account</h5>
          <button
            className="bg-White text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-red"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              showToggle();
            }}
          >
            x
          </button>
        </div>
        <div className="modal-body flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={handleOnChange}
            value={value.email}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={handleOnChange}
            value={value.password}
            name="password"
          />
          <button className="bg-White text-black rounded-lg h-10 p-3 mt-4 hover:bg-red  ">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
