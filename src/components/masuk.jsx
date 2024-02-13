import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar.jsx";
import Navbar from "../components/navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHamburger,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function DSource() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    // Add more fields as needed
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    // ...
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Reset form fields when closing the modal
    setNewUserData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      gender: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Add logic to send newUserData to your API or update users state
    // You can use fetch or any state management library here
    // After adding user, close the modal
    // Example:
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newUserData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle successful response, update users state, etc.
    //   setUsers([...users, data.user]); // Assuming the API returns the added user
    //   closeModal();
    // })
    // .catch(error => {
    //   console.error('Error adding user:', error);
    // });

    // For now, just close the modal (remove this line when implementing actual logic)
    closeModal();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100">
        <Navbar />
        <div className="flex justify-between p-4 mb-6">
          <h3 className="font-bold text-lg">USER MANAGEMENT</h3>
          <span>Logoipsum/Usermanagement</span>
        </div>

        {/* Search Form */}
        <div className="container flex items-center mx-4 my-2">
          {/* ... (existing search form) */}
          <button
            className="ml-auto bg-[#3A70D9] text-white px-4 py-2 rounded"
            onClick={openModal}
          >
            Add User
          </button>
        </div>

        {/* User Table */}
        <div className="container overflow-x-auto">
          {/* ... (existing table) */}
        </div>

        {/* Pagination or additional content goes here */}

        {/* Add User Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-75 z-10"></div>
            <div
              className="bg-white p-8 rounded-md shadow-md z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">Add User</h2>
              <form>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-[#3A70D9] text-white px-4 py-2 rounded"
                    onClick={handleAddUser}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
