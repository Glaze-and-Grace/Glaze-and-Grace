import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-30"></div>
      <div className="modal-container bg-white w-80 p-4 rounded-lg shadow-lg z-50">
        <h2 className="text-2xl font-medium mb-4">Please Log In</h2>
        <p className="mb-6">You need to log in to add items to the cart.</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mr-4"
            onClick={onClose}
          >
            Close
          </button>
          <a
            href="/login" // Replace with your actual login page URL
            className="bg-[#17403C] text-white px-4 py-2 rounded-lg"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
