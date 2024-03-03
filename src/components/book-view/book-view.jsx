import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const BookView = ({ book, onBackClick }) => {
    return (
        <Card onClick={onBackClick} style={{ borderRadius: "3%", overflow: 'hidden' }}>
            <Container style={{ padding: 0 }}>
                <Row noGutters>
                    <Col style={{ overflow: 'hidden', borderRadius: '3% 0 0 3%' }}>
                        {/* Apply borderRadius to the specific corners based on image position */}
                        <Card.Img variant="top" src={book.image} style={{ width: "100%" }} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.author}</Card.Text>
                            <Button className="back-button" style={{ cursor: "pointer" }} onClick={e => { e.stopPropagation(); onBackClick(); }}>Back
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};
