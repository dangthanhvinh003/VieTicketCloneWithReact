import React, { useEffect, useState } from 'react';
import styles from './viewDetail.module.css'; // Import correct CSS module

const ViewDetail = () => {
  const [data, setData] = useState({ events: [], users: [] });
  const [selectedEvent, setSelectedEvent] = useState({});
  const [organizer, setOrganizer] = useState({});

  useEffect(() => {
    fetch('/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        if (data.events.length > 0) {
          const event = data.events[0];
          const organizer = data.users.find(user => user.id === event.idUser);
          setSelectedEvent(event);
          setOrganizer(organizer);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  if (!data || !selectedEvent || !organizer) {
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
            <img src={selectedEvent.image} alt="Event" className={styles.eventImage} />
          </div>
        </header>
        <main className={styles.main}>
            <section className={styles.eventDetails}>
                <div className={styles.description}>
                <h2>About Description</h2>
                <p>Some description about the event...</p>
                </div>
                <aside className={styles.organizer}>
                <div>
                {/* <div className={styles.organizerDetails}> */}
                    <div className={styles.organizerHeader}>
                        <img src={organizer.image} alt="Organizer" className={styles.organizerImage} />
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
