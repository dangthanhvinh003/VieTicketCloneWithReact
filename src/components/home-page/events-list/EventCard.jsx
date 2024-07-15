import React from "react";
import { Card, Col } from "react-bootstrap";

const EventCard = ({ event }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={4} className="mb-2 mt-4" style={{ display: 'flex', flexDirection: 'column' }}>
            <Card data-bs-theme="dark" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Card.Img
                    variant="top"
                    src={event.img}
                    alt={event.name}
                    style={{
                        maxHeight: '15rem',
                        objectFit: 'cover',
                    }}
                />
                <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>
                            {event.startDate} - {event.endDate}
                            <br />
                            {event.address}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default EventCard;