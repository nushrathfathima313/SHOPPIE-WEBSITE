import React from "react";
import './main.css'
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/banner-1.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container1">
              <h5 className="card-title fs-1 text fw-lighter"><b>New Season Arrivals</b></h5>
              <h5 className="card-title fs-1 text fw-lighter"><b>GET UPTO 50% OFF</b></h5>
           <button><b>Shop Now</b></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
