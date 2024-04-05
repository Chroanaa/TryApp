import React from "react";

function LoginModal({ isShow, showToggle }) {
  return (
    <div className={`fixed inset-0  ${isShow ? "block" : "hidden"}`}>
      <div
        className={`modal ${
          isShow ? "flex flex-col" : "none"
        } bg-main absolute  z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 opacity-100  rounded-lg shadow-lg`}
      >
        <div className="modal-header flex flex-row justify-between mb-10">
          <h5 className="font-bold"> Sign in to your account</h5>
          <button
            className="bg-black text-white rounded-full h-8 w-8 flex justify-center items-center"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              showToggle();
            }}
          >
            X
          </button>
        </div>
        <div className="modal-body flex flex-col gap-2">
          <input type="text" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
