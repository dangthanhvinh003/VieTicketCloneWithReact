import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './searchEvent.module.css';

const SearchEvent = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredEvents(
        events.filter((event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredEvents(events);
    }
  }, [searchTerm, events]);

  return (
    <div className={`${styles.container} container mt-5`}>
      <div className={styles['search-bar'] + ' mb-4'}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredEvents.map((event) => (
          <div className="col-md-6 mb-4" key={event.id}>
            <div className={`${styles.card} card`}>
              <img
                src={event.img}
                className="card-img-top"
                alt={event.name}
              />
              <div className={`${styles['card-body']} card-body`}>
                <h5 className={`${styles['card-title']} card-title`}>{event.name}</h5>
                <p className={`${styles['card-text']} card-text`}>Start Date: {event.startDate}</p>
                <p className={`${styles['card-text']} card-text`}>Location: {event.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchEvent;
