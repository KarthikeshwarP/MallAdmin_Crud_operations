import React from 'react';
import { Link } from 'react-router-dom';

const Operations = () => {
  return (
    <div className="container">
      <h2>Welcome to Mall Admin Module</h2>
      <p>Here you can perform various operations on the mall admin database.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <i className="bi bi-search" style={{ fontSize: '3rem' }}></i>
            <div className="card-body">
              <h4 className="card-title">View All Admins</h4>
              <p className="card-text">View all mall admins in the database.</p>
              <Link to="/view-all" className="btn btn-primary">
                Go to View All
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <i className="bi bi-plus" style={{ fontSize: '3rem' }}></i>
            <div className="card-body">
              <h4 className="card-title">View Specific Admin</h4>
              <p className="card-text">View aspecific admin by providing their id.</p>
              <Link to="/view-id" className="btn btn-primary">
                Go to View
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <i className="bi bi-pencil" style={{ fontSize: '3rem' }}></i>
            <div className="card-body">
              <h4 className="card-title">Add New Admin</h4>
              <p className="card-text">Add a new mall admin to the database.</p>
              <Link to="/add-new" className="btn btn-primary">
              Go to Add New
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <i className="bi bi-trash" style={{ fontSize: '3rem' }}></i>
            <div className="card-body">
              <h4 className="card-title">Update Admin</h4>
              <p className="card-text">Update the details of an existing mall admin.</p>
              <Link to="/update" className="btn btn-primary">
              Go to Update
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <i className="bi bi-pencil-square" style={{ fontSize: '3rem' }}></i>
            <div className="card-body">
              <h4 className="card-title">Delete Admin</h4>
              <p className="card-text">Delete a mall admin from the database.</p>
              <Link to="/delete" className="btn btn-primary">
              Go to Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
