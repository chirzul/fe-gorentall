import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Card from '../../components/card'
import { Link } from 'react-router-dom'
import './style.css'
import axios from 'axios'

export class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicle: []
    }
  }

  getVehicle = async () => {
    try {
      const { data: vehicle } = await axios.get(
        process.env.REACT_APP_BASE_URL + 'vehicles'
      )
      this.setState({
        vehicle: vehicle.data
      })
      console.log(vehicle.data)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getVehicle()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="popular-in-town">
          <div className="container">
            <div className="row">
              <h2 className="title">Details</h2>
            </div>
            {this.state.vehicle.map((v, k) => {
              if (v.vehicle_id == this.props.match.params.id) {
                return (
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={v.image} alt="uihef" />
                    </div>
                    <div className="col-lg-6">
                      <p className="detail-name">{v.name}</p>
                      <p className="detail-location">{v.location}</p>
                      <p className="detail-status">{v.status}</p>
                      <p className="detail-desc">{v.description}</p>
                      <p className="detail-etc">
                        Capacity : {v.category == 'Cars' ? '4' : 2} person
                      </p>
                      <p className="detail-etc">Type : {v.category}</p>
                      <p className="detail-etc">Reservation before 2PM</p>
                    </div>
                  </div>
                )
              }
            })}
            <div className="row mt-5">
              <div className="col-md-4">
                <button className="btn btn-lg btn-warning fw-bold btn-signup form-login">
                  Chat Admin
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-lg btn-warning w-100 fw-bold form-login">
                  Reservation
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-lg btn-warning fw-bold btn-signup form-login">
                  Like
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Details
