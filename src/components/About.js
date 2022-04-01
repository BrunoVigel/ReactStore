import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from '../Helper/Head'

const About = () => {
  return (
    <div>
      <Head title="About" />
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary-dark fw-bold mb-4">About us</h1>
            <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque nam ea modi fugiat explicabo commodi aliquid quis, suscipit molestias earum perspiciatis sunt voluptates omnis culpa! Sequi eum, qui ea, nam nihil fuga doloremque sit expedita perspiciatis voluptas labore repellat.</p>
            <NavLink to="/contact" className="btn btn-outline-secondary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="https://via.placeholder.com/400x400/817F82" alt="About Us" height="400px" widht="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About