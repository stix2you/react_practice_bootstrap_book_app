import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();  // this prevents the default behavior of the form which is to reload the entire page

        const data = {
            access: username,
            secret: password
        };

        fetch("https://openlibrary.org/account/login.json", {
            method: "POST",
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                onLoggedIn(username);
            } else {
                alert("Login failed");
            }
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Form.Group className="mb-2" controlid="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlid="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button className="mb-4" variant="primary" type="submit">Submit</Button>
        </Form>
    );
};