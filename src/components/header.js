import React from "react";
import { adminLogin } from "../services/api";
import { toast } from "react-toastify";

function Header({ setShowPopup, setIsAdmin, isAdmin }) {
  const handleAdminLogin = async () => {
    const email = prompt("Enter admin email:");

    if (!email) return;

    try {
      const res = await adminLogin(email);

      if (res.success) {
        toast.success("Admin login successful");
        setIsAdmin(true);
      } else {
        toast.error("Not an admin");
      }
    } catch (err) {
      toast.error("Invalid admin email");
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 px-5 py-3 shadow-sm">
      <p className="text-xl font-semibold m-0">DSA Problems Tracker</p>

      <div className="flex gap-3">
        {!isAdmin && (
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
            onClick={handleAdminLogin}
          >
            Admin Login
          </button>
        )}

        {isAdmin && (
          <button
            className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition"
            onClick={() =>
              setShowPopup({ isOpen: true, title: "add", problemId: null })
            }
          >
            Add Problem
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
