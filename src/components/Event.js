import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Event extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { id, name, date, image, seats } = this.props
        return (

            <div className="event col-lg-4 col-md-6" id={id}>
                <div className="event__wrapper">
                    <div className="event__img" style={{ backgroundImage: 'url(images/' + image + ')' }}></div>

                    {/* <img src={"./images/" + image} alt={name} /> */}
                    <h2>{name}</h2>
                    <div className="event__date">{date}</div>
                    <div className="event__seats">Tickets Available:
                        {seats === 0 ?
                            <span className="event__no-seats"> N/A</span>
                            :
                            <span className="event__found-seats text-info"> {seats}</span>
                        }
                    </div>
                    <div className="clearfix"></div>
                    {seats === 0 ?
                        <button className="event__sold-out fas fa-calendar-times btn btn-default "> <span>SOLD OUT</span> </button>
                        :

                        <Link className="event__book-event fas fa-calendar-check btn btn-primary" to={{
                            pathname: `/BookSeats/${id}`,
                            state: {
                                ...this.props
                            },
                        }}
                        > <span>Book Event</span></Link>
                        // <button className="bookEvent"><span>BOOK EVENT</span></button>
                    }
                </div>
            </div>
        )
    }
}

export default Event
