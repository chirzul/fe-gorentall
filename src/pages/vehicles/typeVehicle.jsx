import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Card from '../../components/card'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class TypeVehicle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicle: []
    }
  }

  getVehicle = async () => {
    try {
      const { data: vehicle } = await axios.get(
        this.props.match.params.category == 'all'
          ? process.env.REACT_APP_BASE_URL + 'vehicles'
          : process.env.REACT_APP_BASE_URL +
              'vehicles/?category=' +
              this.props.match.params.category
      )
      this.setState({
        vehicle: vehicle.data
      })
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
              <h2 className="title">
                {this.props.match.params.category == 'all'
                  ? 'All Vehicles'
                  : this.props.match.params.category}
              </h2>
            </div>

            <div className="row">
              {this.state.vehicle.map((v, k) => {
                return (
                  <Card
                    id={v.vehicle_id}
                    image={v.image}
                    name={v.name}
                    city={v.location}
                  />
                )
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}

export default TypeVehicle
