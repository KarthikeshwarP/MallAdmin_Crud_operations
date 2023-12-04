import React, { useState } from 'react';
import axios from 'axios';

const UpdateAdmin = () => {
  const [adminId, setAdminId] = useState('');
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    password: '',
    mall: '',
    phone: '',
  });
  const [adminExists, setAdminExists] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleAdminIdChange = (event) => {
    setAdminId(event.target.value);
  };

  const handleFetchAdmin = () => {
    // Make a GET request to check if the admin exists
    axios
      .get(`http://localhost:8082/MallAdmin/${adminId}`)
      .then((response) => {
        if (response.data) {
          // Admin exists, set newAdmin details and update success
          setAdminExists(true);
          setNewAdmin(response.data);
        } else {
          // Admin doesn't exist, show an error message
          setAdminExists(false);
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  const handleAdminUpdate = () => {
    // Make a PUT request to update the admin details
    axios
      .put(`http://localhost:8082/MallAdmin/${adminId}`, newAdmin)
      .then(() => {
        // Handle the update success
        setUpdateSuccess(true);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Update Admin Details</h1>
      <input
        type="text"
        placeholder="Enter Admin ID"
        value={adminId}
        onChange={handleAdminIdChange}
      />
      <button onClick={handleFetchAdmin}>Check Admin</button>

      {adminExists && (
        <div>
          <h2>Update Admin Details</h2>
          <input
            type="text"
            placeholder="Name"
            value={newAdmin.name}
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={newAdmin.password}
            onChange={(e) =>
              setNewAdmin({ ...newAdmin, password: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Mall"
            value={newAdmin.mall}
            onChange={(e) => setNewAdmin({ ...newAdmin, mall: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            value={newAdmin.phone}
            onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
          />
          <button onClick={handleAdminUpdate}>Update Admin</button>
        </div>
      )}

      {adminExists === false && (
        <div className="alert alert-danger mt-3">Admin doesn't exist.</div>
      )}

      {updateSuccess && (
        <div className="alert alert-success mt-3">Admin details updated successfully!</div>
      )}
    </div>
  );
};

export default UpdateAdmin;
