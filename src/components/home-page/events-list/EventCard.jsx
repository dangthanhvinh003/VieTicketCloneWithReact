import React from "react";
import { Card, Col } from "react-bootstrap";

const EventCard = ({ event }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={4} className="mb-2 mt-4">
            <Card data-bs-theme="dark">
                <Card.Img variant="top" src={event.img} alt={event.name} />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>
                        {event.startDate} - {event.endDate}
                        <br />
                        {event.address}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default EventCard;