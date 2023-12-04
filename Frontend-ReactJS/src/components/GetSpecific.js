import React, { useState } from 'react';
import axios from 'axios';

const GetSpecific = () => {
  const [adminId, setAdminId] = useState(''); // State to store the admin ID
  const [adminDetails, setAdminDetails] = useState(null); // State to store the admin details

  const handleAdminIdChange = (event) => {
    setAdminId(event.target.value);
  };

  const handleFetchAdmin = () => {
    // Make a GET request to retrieve the specific admin
    axios.get(`http://localhost:8082/MallAdmin/${adminId}`)
      .then(response => {
        // Handle the response data for the specific admin
        setAdminDetails(response.data);
      })
      .catch(error => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Get Specific Admin</h1>
      <input
        type="text"
        placeholder="Enter Admin ID"
        value={adminId}
        onChange={handleAdminIdChange}
      />
      <button onClick={handleFetchAdmin}>Fetch Admin</button>

      {adminDetails && (
        <div>
          <h2>Admin Details</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Password</th>
                <th>Mall</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{adminDetails.id} &nbsp;&nbsp;</td>
                <td>{adminDetails.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{adminDetails.password}&nbsp;&nbsp;&nbsp;</td>
                <td>{adminDetails.mall}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{adminDetails.phone}&nbsp;&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetSpecific;
