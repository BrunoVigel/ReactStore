import React from 'react'
import Head from '../Helper/Head';
import Products from './Products';

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img src="https://via.placeholder.com/500x300/817F82" className="card-img" alt="Background" height="550px"/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
              </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
}

export default Home