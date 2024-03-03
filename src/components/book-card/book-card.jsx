import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const BookCard = ({ book, onBookClick }) => {
    return (          
        <Card className="h-100" onClick={() => onBookClick(book)}>
            <Card.Img src={book.image} style={{ width: "100%", overflow: 'hidden' }} /> 
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Button style={{ cursor: "pointer" }} onClick={() => onBookClick(book)} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        author: PropTypes.string
    }).isRequired,
    onBookClick: PropTypes.func.isRequired
};