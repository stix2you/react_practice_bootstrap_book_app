import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

export const MainView = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://openlibrary.org/search.json?q=star+wars")
            .then((response) => response.json())
            .then((data) => {
                const booksFromApi = data.docs.map((doc) => {
                    return {
                        id: doc.key,
                        title: doc.title,
                        image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
                        author: doc.author_name?.[0]
                    };
                });

                setBooks(booksFromApi);
            });
    }, []);

    return (
        <Row className="justify-content-md-center">
            {!user ? (
                <Col className="mb-5" md={4}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                    <SignupView />
                </Col>
            ) : selectedBook ? (
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <BookView
                            book={selectedBook}
                            onBackClick={() => setSelectedBook(null)}
                        />
                    </Col>
                </Row>

            ) : books.length === 0 ? (
                <h2>Loading Book Data . . .</h2>
            ) : (
                <>
                    {books.map((book) => (
                        <Col className="mb-5" key={book.id} md={3} >
                            <BookCard 
                                book={book}
                                onBookClick={(newSelectedBook) => {
                                    setSelectedBook(newSelectedBook);
                                }}
                            />
                        </Col>
                    ))}
                </>
            )}
        </Row>
    );

};