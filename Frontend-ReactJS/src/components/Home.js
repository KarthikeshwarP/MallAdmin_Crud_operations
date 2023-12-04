import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'


const Section1 = () => {
  return (
    <>
    <Navbar/>
    <div className="container">

      <div className="row mt-5">
        {/* Mall Admin Section */}
        <div className="col-md-3">
          <img
            src="https://th.bing.com/th/id/OIG.G6jkjVBc1pTNp7CTTIqz?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
            alt="Mall Admin"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h2>Mall Admin</h2>
          <p>
          The Mall Admin Module empowers administrators to efficiently manage all aspects of the shopping mall. It provides the ability to add, update, and delete mall administrators responsible for overseeing various mall operations. With this module, you can maintain an organized administrative structure for your shopping center, ensuring smooth day-to-day operations.
          </p>
          <Link to="/operations" className="btn btn-primary">
                operations
              </Link>
        </div>
      </div>

      <div className="row mt-5">
        {/* Shops Section */}
        <div className="col-md-9">
          <h2>Shops</h2>
          <p>
          The Shops Module offers comprehensive features for managing the diverse range of shops within your mall. It allows you to oversee tenants, lease agreements, and shop details. This module simplifies the process of shop allocation, lease renewals, and lease management. By using this module, you can maintain a dynamic and profitable mix of shops in your mall.
          </p>
          <Link to="/operations" className="btn btn-primary">
                operations
              </Link>
        </div>
        <div className="col-md-3">
        <img src="https://th.bing.com/th/id/OIG.nA9ONaAEMTJ4Fx_u9waz?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" alt="Shops" className="img-fluid" />

        </div>
      </div>
 
      <div className="row mt-5">
        {/* Products Section */}
        <div className="col-md-3">
          <img
            src="https://th.bing.com/th/id/OIG.CCDK96KrSjyAfYTDESPN?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
            alt="Products"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h2>Products</h2>
          <p>
          The Products Module is designed to streamline the presentation and management of products available in your mall's various shops. It helps you maintain accurate and up-to-date product details, including pricing, inventory levels, and product descriptions. This module enhances the shopping experience for customers and makes it easy to showcase the latest products in your mall.
          </p>
          <Link to="/operations" className="btn btn-primary">
                operations
              </Link>
        </div>
      </div>

      <div className="row mt-5">
        {/* Customer Module Section */}
        <div className="col-md-9">
          <h2>Customer Module</h2>
          <p>
          The Customer Module focuses on elevating the shopping experience for mall visitors. It offers tools for collecting customer feedback, implementing discount programs, and establishing loyalty initiatives. This module is key to building strong customer relationships and enhancing visitor satisfaction. It provides the means to engage with shoppers and keep them coming back to your mall for their shopping needs.
          </p>
          <Link to="/operations" className="btn btn-primary">
                operations
              </Link>
        </div>
        <div className="col-md-3">
          <img
            src="https://th.bing.com/th/id/OIG.C_XvGyt.kQXPwwfx5I9W?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
            alt="Customer Module"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Section1;
