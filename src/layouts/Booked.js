import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Booked extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)  
        this.state = {
            ...this.props.location.state
        }
        console.log(this.state)
        //        this.handleChange = this.handleChange.bind(this);

    }
    render() {
        const { bookseats, date, name } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="booked col-md-6">
                        {bookseats > 1 ? <div className="booked__seats">You have booked <span className="seats">{bookseats}</span> tickets for</div>
                            :
                            <div className="booked__seats">You have booked <span className="seats">1</span> ticket for</div>
                        }
                        <div className="booked__event">
                            <h2 className="booked__event-name">{name}</h2>
                            <div className="booked__event-date">{date}</div>
                        </div>

                        <button className="btn btn-primary " type="submit" >Make Payment</button>
                        <Link to='/'><button className=" btn btn-secondary" type="submit">Back to Events</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Booked
