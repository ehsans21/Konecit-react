import { Card, Button, Col, Row } from "react-bootstrap";
import timedata from "./data";
import { useState } from 'react';



export default function Timesheet() {

    setInterval(updateTime, 1000);

    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }


    return (


        <div className="timesheet">
            <h4 className='clock'></h4>
            <Button variant="outline-success">Login</Button>{' '}
            <Button variant="outline-success">Logout</Button>{' '}
            <br></br>
            {currentTime} 


            {timedata.map((time) => {
                return (
                    <Row xs={1} md={2} className="g-4" key={time.id}>
                        {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className="mt-3" style={{ color: "#000", width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title>
                                        {time.title}
                                    </Card.Title>
                                    <Card.Text>Requirements: {time.details}</Card.Text>
                                    <Card.Text>Location: {time.location}</Card.Text>
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
