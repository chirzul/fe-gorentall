import React, { useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useApi from '../../helpers/useApi'
import './style.css'
import { addUsers } from '../../store/reducer/user'

function Register() {
  const [Users, setUsers] = useState({
    username: '',
    email: '',
    password: '',
    role: 'admin'
  })

  const { isAuth } = useSelector((state) => state.users)
  const api = useApi()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const login = () => {
    navigate('/login')
  }

  const onChangeInput = (event) => {
    event.preventDefault()
    const data = { ...Users }
    data[event.target.name] = event.target.value
    setUsers(data)
  }

  const register = () => {
    if (Users.username == '' || Users.email == '' || Users.password == '') {
      alert('Please fill all fields')
    } else if (Users.username != Users.username.toLowerCase()) {
      alert('username must be lowercase')
    } else if (Users.password.length < 8) {
      alert('password length must be greater than 8')
    } else {
      api
        .requests({
          method: 'POST',
          url: '/users',
          data: Users
        })
        .then((res) => {
          dispatch(addUsers(res.data))
          navigate('/login')
        })
        .catch((err) => {
          alert(err)
        })
    }
  }

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
                <input
                  className="form-control form-control-lg form-login"
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={onChangeInput}
                  required
                ></input>
                <input
                  className="form-control form-control-lg form-login"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={onChangeInput}
                  required
                ></input>
                <input
                  className="form-control form-control-lg form-login password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={onChangeInput}
                  required
                ></input>
                <br />
                <button
                  className="btn btn-lg btn-warning w-100 fw-bold form-login"
                  onClick={register}
                >
                  Sign up
                </button>
                <br />
                <Link to="/">
                  <button className="btn btn-lg btn-warning w-100 fw-bold btn-google form-login">
                    <FcGoogle />
                    Sign up with Google
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Register
