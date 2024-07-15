import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './viewDetail.module.css'; 

const ViewDetail = () => {
  const { eventId } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    const fetchEventAndOrganizer = async () => {
      try {
        const eventResponse = await fetch('http://localhost:8080/events');
        if (!eventResponse.ok) {
          throw new Error('Network response was not ok ' + eventResponse.statusText);
        }
        const events = await eventResponse.json();

        const event = events.find(event => event.id === eventId);
        
        if (event) {
          const userResponse = await fetch('http://localhost:8080/users');
          if (!userResponse.ok) {
            throw new Error('Network response was not ok ' + userResponse.statusText);
          }
          const users = await userResponse.json();
          const organizer = users.find(user => {
            console.log(user.id, event.idUser)
            return parseInt(user.id) === parseInt(event.idUser)
          });
          console.log(organizer)

          setSelectedEvent(event);
          setOrganizer(organizer);
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchEventAndOrganizer();
  }, [eventId]);
  console.log(selectedEvent, organizer)

  if (!selectedEvent || !organizer) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eventDetails}>
            <div className={styles.eventInfo}>
              <h1>{selectedEvent.name}</h1>
              <p>Start date: {selectedEvent.startDate}</p>
              <p>Location: {selectedEvent.address}</p>
              <button>Buy Ticket</button>
            </div>
            <img src={selectedEvent.img} alt="Event" className={styles.eventImage} />
          </div>
        </header>
        <main className={styles.main}>
            <section className={styles.eventDetails}>
                <div className={styles.description}>
                <h2>About Description</h2>
                <p>{selectedEvent.description || 'Some description about the event...'}</p>
                </div>
                <aside className={styles.organizer}>
                <div>
                <div className={styles.organizerHeader}>
                        <img src={organizer.avatar} alt="Organizer" className={styles.organizerImage} />
                        <h2>Organizer</h2>
                    </div>
                    <div>
                        <p>Name: {organizer.name}</p>
                        <p>Email: {organizer.email}</p>
                        <p>Website: {organizer.website || 'N/A'}</p>
                    </div>
                </div>

                </aside>
            </section>
        </main>
        <footer className={styles.footer}>
          <p>VieTicket</p>
          <p>Social Links...</p>
        </footer>
      </div>
    </div>
  );
}

export default ViewDetail;
