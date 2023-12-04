import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteAdmin = () => {
  const [adminId, setAdminId] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminExists, setAdminExists] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  const handleAdminIdChange = (event) => {
    setAdminId(event.target.value);
  };

  const handleFetchAdmin = () => {
    // Make a GET request to check if the admin exists
    axios
      .get(`http://localhost:8082/MallAdmin/${adminId}`)
      .then((response) => {
        if (response.data) {
          setAdminExists(true);
          setAdminName(response.data.name);
        } else {
          setAdminExists(false);
          setAdminName('');
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  const handleAdminDelete = () => {
    // Make a DELETE request to remove the admin
    axios
      .delete(`http://localhost:8082/MallAdmin/${adminId}`)
      .then(() => {
        setDeleteSuccess(true);
        setAdminExists(false);
        setAdminName('');
        // You may need to handle ID rearrangement logic here
      })
      .catch((error) => {
        setDeleteError(true);
        setAdminExists(false);
        setAdminName('');
        console.error(error);
      });
  };

  useEffect(() => {
    // Automatically clear success and error messages after 3 seconds
    const messageTimer = setTimeout(() => {
      setDeleteSuccess(false);
      setDeleteError(false);
    }, 3000);

    return () => {
      clearTimeout(messageTimer);
    };
  }, [deleteSuccess, deleteError]);

  return (
    <div>
      <h1>Delete Admin</h1>
      <input
        type="text"
        placeholder="Enter Admin ID"
        value={adminId}
        onChange={handleAdminIdChange}
      />
      <button onClick={handleFetchAdmin}>Check Admin</button>

      {adminExists && (
        <div>
            <br /><br />
          <h2>Confirmation</h2>
          <p>Admin Name: {adminName}</p>
          <button onClick={handleAdminDelete}>Confirm Deletion</button>
        </div>
      )}

      {adminExists === false && (
        <div className="alert alert-danger mt-3 container">Admin doesn't exist.</div>
      )}

      {deleteSuccess && (
        <div className="alert alert-success mt-3 container">
          Admin {adminName} has been deleted successfully!
        </div>
      )}

      {deleteError && (
        <div className="alert alert-danger mt-3 container">Deletion failed. Please try again.</div>
      )}
    </div>
  );
};

export default DeleteAdmin;
