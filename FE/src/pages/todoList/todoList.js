import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";


export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });




 function TodoDetails(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })

}

function submitNote(event) {
    props.onAdd(note)
    event.preventDefault();
    
}
    return (
        <div className="todo-details">
            <Form>
                <input className="title" onChange={TodoDetails} value={note.title} placeholder="Title"/>
                <textarea name="content" onChange={TodoDetails} value={note.content} placeholder="Take a note..." />
                <Button variant="outline-success" onClick={submitNote}>Add</Button>{' '}
            </Form>
        </div>
    )
}