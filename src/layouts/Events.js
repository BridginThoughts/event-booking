import React, { useState, useEffect } from 'react'
import Event from '../components/Event';

const Events = () => {
    const [events, setevents] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getevents();
    }, [])

    const getevents = async () => {
        const response = await fetch('/data/data.json', {
            "method": "GET"
        }).then(response => {
            return (response);
        }).catch(err => {
            return (err);
        });
        const events = await response.json();
        setevents(events.events);
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const filterNames = ({ name }) => {
        return name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    };

    return (
        <>
            <div className="search-wrapper">
                <div className="container">
                    <div className="row">
                        <form className="search-form col-sm-7">
                            <input type="text" onChange={updateSearch} value={search} placeholder="Search Event" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="container events my-5">
                <div className="row">
                   
                    {events.filter(filterNames).map((event) => {
                        return <Event key={event.id} id={event.id} name={event.name} date={event.date} image={event.image} seats={event.seats} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Events