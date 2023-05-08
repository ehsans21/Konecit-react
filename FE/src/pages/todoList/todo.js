import { Card, Button, Col, Row } from "react-bootstrap";
import todo from "./data";
import TodoDetails from "./todoList";
import { useState } from 'react';



export default function TodoListS() {
    const [notes, setNotes] = useState([]);
    
    function addNote(newNote) {
        setNotes(prevNotes => {
           return [...prevNotes, newNote];
        });
    }
    return (

       <div className="todo">
        <TodoDetails onAdd={addNote} />
         {notes.map((todo) => {
                return (
                    <Row xs={1} md={2} className="g-4" key={todo.id}>
                        {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className="mt-3" style={{ color: "#000", width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title>
                                        {todo.title}
                                    </Card.Title>
                                    <Card.Text> {todo.details}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                )
            })}

        </div>
    );
}