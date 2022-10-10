import React, { Component } from 'react'
import Footer from '../../components/footer'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import './style.css'

export class Register extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <section className="login-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="login-form">
                    <h1 className="login-tagline text-white">
                      Let's Explore
                      <br />
                      The World
                    </h1>
                    <p className="text-white login-subtagline">
                      Already have account?
                    </p>
                    <Link to="/login">
                      <button className="btn btn-lg btn-warning fw-bold btn-signup form-login">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action="">
                    <input
                      className="form-control form-control-lg form-login"
                      type="text"
                      placeholder="Name"
                    ></input>
                    <input
                      className="form-control form-control-lg form-login"
                      type="email"
                      placeholder="Email"
                    ></input>
                    <input
                      className="form-control form-control-lg form-login password"
                      type="password"
                      placeholder="Password"
                    ></input>
                    <br />
                    <Link to="/">
                      <button className="btn btn-lg btn-warning w-100 fw-bold form-login">
                        Sign up
                      </button>
                    </Link>
                    <br />
                    <Link to="/">
                      <button className="btn btn-lg btn-warning w-100 fw-bold btn-google form-login">
                        <FcGoogle />
                        Sign up with Google
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Register
