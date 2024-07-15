import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import EventCard from './EventCard';

import { fetchEvents } from '../../../apis/event';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
    };

    getEvents();
  }, []);

  return (
    <Container data-bs-theme="dark">
      {events.length > 0 ? (
        <>
          <h3 className='mt-4 text-center' style={{color: 'var(--bs-body-color)'}}>List of Events</h3>
          <Row>
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </Row>
        </>
      ) : (
        <p>No events found.</p>
      )}
    </Container>
  );
};

export default EventsList;