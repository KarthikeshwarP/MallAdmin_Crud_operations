import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({
    id: '',
    name: '',
    password: '',
    mall: '',
    phone: '',
  });

  const [adminAdded, setAdminAdded] = useState(false);
  const [adminExists, setAdminExists] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAdmin({ ...newAdmin, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a POST request to create a new admin
    axios
      .post('http://localhost:8082/MallAdmin', newAdmin)
      .then((response) => {
        // Handle the response as needed
        if (response.data === 'Admin already exists') {
          setAdminExists(true);
          setAdminAdded(false);
        } else {
          setAdminAdded(true);
          setAdminExists(false);
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  useEffect(() => {
    // Reset success and error messages after a few seconds
    const timer = setTimeout(() => {
      setAdminAdded(false);
      setAdminExists(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [adminAdded, adminExists]);

  return (
    <div>
      <h1>Create New Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Admin ID:</label>
          <input
            type="text"
            name="id"
            value={newAdmin.id}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newAdmin.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={newAdmin.password}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Mall Name:</label>
          <input
            type="text"
            name="mall"
            value={newAdmin.mall}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={newAdmin.phone}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Admin
        </button>
      </form>
      {adminAdded && (
        <div className="alert alert-success mt-3">Admin added successfully!</div>
      )}
      {adminExists && (
        <div className="alert alert-danger mt-3">Admin ID already exists!</div>
      )}
    </div>
  );
};

export default CreateAdmin;
