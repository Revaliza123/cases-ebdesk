import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar.jsx";
import Navbar from "../components/navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faEdit,
  faEllipsis,
  faHamburger,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function DSource() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 10,
    skip: 0,
    totalUsers: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
const [dataToDisplay, setDataToDisplay] = useState(users);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editUserData, setEditUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
  });
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [pagination, debouncedSearchQuery]);

  const fetchUsers = () => {
    let url = `https://dummyjson.com/users?limit=${pagination.limit}&skip=${pagination.skip}&select=firstName,lastName,username,email,gender,image`;

    if (debouncedSearchQuery && pagination.skip) {
      url += `&q=${debouncedSearchQuery}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (debouncedSearchQuery) {
          setSearchResults(data.users);
        } else {
          setUsers(data.users);
          setPagination({
            ...pagination,
            totalUsers: data.total,
          });
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handlePageChange = (action) => {
    setPagination((prevPagination) => {
      let newSkip;
      if (action === "prev") {
        newSkip = Math.max(0, prevPagination.skip - prevPagination.limit);
      } else if (action === "next") {
        newSkip = prevPagination.skip + prevPagination.limit;
      }
      return { ...prevPagination, skip: newSkip };
    });
  };

 // Perbarui fungsi handleSearch
 const handleSearch = (e) => {
  const searchTerm = e.target.value;

  if (searchTerm.trim() === "") {
    // Jika kotak pencarian kosong, jangan fetch data awal
    setSearchResults(null);
    setIsSearching(false);
  } else {
    // Jika ada kata kunci pencarian, ambil data berdasarkan kata kunci
    setIsSearching(true);
    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.users);
      })
      .catch((error) => console.error("Error searching users:", error));
  }

  setSearchQuery(searchTerm);
};
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
    closeModal();
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User added successfully:", data);
        closeModal();
        fetchUsers(); // Refresh the user list after adding
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  const handleEditUser = () => {
    // Edit user logic here
    fetch(`https://dummyjson.com/users/${selectedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editUserData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User updated successfully:", data);
        closeEditModal();
        fetchUsers(); // Refresh the user list after editing
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const handleEllipsisClick = (user) => {
    setSelectedUser(user);
  };

  const openEditModal = (user) => {
    setEditUserData({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      gender: user.gender,
    });
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditUserData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      gender: "",
    });
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteUser = () => {
    // Implement delete logic here
    fetch(`https://dummyjson.com/users/${selectedUser.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User deleted successfully:", data);
        closeDeleteModal();
        fetchUsers(); // Refresh the user list after deleting
      })
      .catch((error) => console.error("Error deleting user:", error));
    closeDeleteModal();
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
          <form className="flex items-center px-6 space-x-4 bg-white rounded-md shadow-md p-2">
            <label htmlFor="search">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search users management"
              className="outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
          <button
            className="ml-auto bg-[#3A70D9] text-white px-4 py-2 rounded"
            onClick={openModal}
          >
            Add User
          </button>
        </div>

        {/* User Table */}
        <div className="container overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-white text-gray-600 rounded-md shadow-sm">
              <tr>
                <th className="py-2 px-4 text-start">Id</th>
                <th className="py-2 px-4 text-start">Name</th>
                <th className="py-2 px-4 text-start">Username</th>
                <th className="py-2 px-4 text-start">Email</th>
                <th className="py-2 px-4 text-start">Gender</th>
                <th className="py-2 px-4 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {((searchResults && isSearching) ||
                (!searchResults && !isSearching)) &&
                (searchResults || users).map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 rounded-md shadow-md"
                  >
                    <td className="py-2 px-4">{user.id}</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center">
                        <img
                          src={user.image}
                          alt="User"
                          loading="lazy"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="ml-2">
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-4">{user.username}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.gender}</td>
                    <td className="py-2 px-4">
                      <div className="relative inline-block text-left">
                        <button
                          className="flex items-center justify-center w-6 h-6"
                          onClick={() => handleEllipsisClick(user)}
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            className="text-gray-500"
                          />
                        </button>
                        {selectedUser && selectedUser.id === user.id && (
                          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                onClick={() => openEditModal(user)}
                              >
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className="text-black mr-4"
                                />
                                Edit
                              </button>
                              <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                onClick={openDeleteModal}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="text-black mr-4"
                                />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={pagination.skip === 0}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Prev
            </button>
            <span>
              Showing {pagination.skip + 1} to{" "}
              {Math.min(
                pagination.skip + pagination.limit,
                pagination.totalUsers
              )}{" "}
              of {pagination.totalUsers} users
            </span>
            <button
              onClick={() => handlePageChange("next")}
              disabled={
                pagination.skip + pagination.limit >= pagination.totalUsers
              }
              className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>

        {/* Add/Edit User Modal */}
        {(isModalOpen || isEditModalOpen) && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            onClick={isEditModalOpen ? closeEditModal : closeModal}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-75 z-10"></div>
            <div
              className="bg-white p-8 rounded-md shadow-md z-30 w-1/3"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">
                {isEditModalOpen ? "Edit User" : "Add User"}
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={
                      isEditModalOpen
                        ? editUserData.firstName
                        : newUserData.firstName
                    }
                    onChange={(e) => {
                      if (isEditModalOpen) {
                        setEditUserData({
                          ...editUserData,
                          firstName: e.target.value,
                        });
                      } else {
                        handleInputChange(e);
                      }
                    }}
                    className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={
                      isEditModalOpen
                        ? editUserData.lastName
                        : newUserData.lastName
                    }
                    onChange={(e) => {
                      if (isEditModalOpen) {
                        setEditUserData({
                          ...editUserData,
                          lastName: e.target.value,
                        });
                      } else {
                        handleInputChange(e);
                      }
                    }}
                    className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={
                      isEditModalOpen
                        ? editUserData.username
                        : newUserData.username
                    }
                    onChange={(e) => {
                      if (isEditModalOpen) {
                        setEditUserData({
                          ...editUserData,
                          username: e.target.value,
                        });
                      } else {
                        handleInputChange(e);
                      }
                    }}
                    className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={
                      isEditModalOpen ? editUserData.email : newUserData.email
                    }
                    onChange={(e) => {
                      if (isEditModalOpen) {
                        setEditUserData({
                          ...editUserData,
                          email: e.target.value,
                        });
                      } else {
                        handleInputChange(e);
                      }
                    }}
                    className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={
                      isEditModalOpen ? editUserData.gender : newUserData.gender
                    }
                    onChange={(e) => {
                      if (isEditModalOpen) {
                        setEditUserData({
                          ...editUserData,
                          gender: e.target.value,
                        });
                      } else {
                        handleInputChange(e);
                      }
                    }}
                    className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-[#3A70D9] text-white px-4 py-2 rounded"
                    onClick={isEditModalOpen ? handleEditUser : handleAddUser}
                  >
                    {isEditModalOpen ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete User Modal */}
        {isDeleteModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            onClick={closeDeleteModal}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-75 z-10"></div>
            <div
              className="bg-white p-8 rounded-md shadow-md z-30 w-1/4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">Delete User</h2>
              <p>Are you sure you want to delete this user?</p>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-[#E53E3E] text-white px-4 py-2 rounded mr-2"
                  onClick={handleDeleteUser}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
