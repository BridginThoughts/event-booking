import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export class BookSeats extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)  
        this.state = {
            username: "",
            email: "",
            phone: "",
            bookseats: 0,
            validated: false,
            errors: {},
            ...this.props.location.state
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if (name === "bookseats") {
            value = parseInt(value)
        }
        this.setState({ [name]: value })
    }

    addAttendee(numOfSeats) {
        let newAttendee = []
        for (let i = 0; i < (numOfSeats - 1); i++) {
            newAttendee.push(
                <div key={`attendee_${i + 2}`}>
                    <label>Name of Attendee {i + 2}</label>
                    <input name={`attendee_${i + 2}`} type="text" required value={this.state[`attendee_${i + 2}`] || ""} onChange={this.handleChange} />
                    <div className="booking__form-error">{this.state.errors[`attendee_${i + 2}`]}</div>
                </div>
            )
        }
        return newAttendee

    }

    validate() {
        let { username, email, phone, bookseats, seats } = this.state
        let errors = {};
        let isValid = true;
        if (!username) {
            isValid = false;
            errors["username"] = "Please enter your name.";
        }

        if (!email) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof email !== "undefined") {
            var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!emailPattern.test(email)) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!phone) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
        }

        if (typeof phone !== "undefined") {
            var phonePattern = new RegExp('^[0-9]+$');
            if (!phonePattern.test(phone)) {
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }

        if (!bookseats) {
            isValid = false;
            errors["bookseats"] = "Please select minimum one seat to book";
        }
        if ((seats - bookseats) < 0) {
            isValid = false;
            errors["bookseats"] = "Number of seats selected is more than available seats";
        }

        if (bookseats > 1) {
            isValid = false;
            for (let i = 0; i < (bookseats - 1); i++) {
                if (!this.state[`attendee_${i + 2}`]) {
                    errors[`attendee_${i + 2}`] = "Please enter the name of Attendee #" + (i + 2);
                } else {
                    isValid = true;
                }
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;

    }

    submitHandler(e) {

        e.preventDefault();

        this.setState({
            validated: this.validate()
        })


    }



    render() {
        const { id, name, date, image, seats } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="booking col-lg-4 col-md-6 my-5">
                        <h2>{name}</h2>
                        <div className="booking__date">{date}</div>
                        <div className="booking__seats-available">{`Tickets Available: ${seats}`}</div>
                        <img className="booking__image" src={`/images/${image}`} alt={name} />
                        <form className="booking__form">
                            <label>Name</label>
                            <input name="username" type="text" required value={this.state.username} onChange={this.handleChange} />
                            <div className="booking__form-error">{this.state.errors.username}</div>
                            <label>Email</label>
                            <input name="email" type="email" required value={this.state.email} onChange={this.handleChange} />
                            <div className="booking__form-error">{this.state.errors.email}</div>
                            <label> Phone </label>
                            <input name="phone" type="text" required value={this.state.phone} onChange={this.handleChange} />
                            <div className="booking__form-error">{this.state.errors.phone}</div>
                            <label>Number of seats</label>
                            <select name="bookseats" value={this.state.bookseats} onChange={this.handleChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <div className="booking__form-error">{this.state.errors.bookseats}</div>
                            {this.state.bookseats > 1 && this.addAttendee(this.state.bookseats)}

                            {this.state.validated && <Redirect to={{
                                pathname: `/Booked/${id}`,
                                state: {
                                    ...this.state
                                },
                            }} />}

                            {/* </Link> */}

                            <button className="btn btn-primary booking__form-submit" type="submit" onClick={this.submitHandler}>Book Tickets</button>
                            <Link to='/'><button className=" btn btn-secondary booking__form-cancel" type="submit">Cancel</button></Link>
                        </form>


                    </div>
                </div>
            </div>)
    }
}

export default BookSeats
