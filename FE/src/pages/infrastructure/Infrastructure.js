import { Card, Button, Col, Row } from "react-bootstrap";
import timedata from "./data";
import { useState } from 'react';
import infra from "./data"


export default function Infrastructure() {

    return (


        <div className="infrastructure">
            <Button variant="outline-success">Login</Button>{' '}
            <Button variant="outline-success">Logout</Button>{' '}
 


            {infra.map((inf) => {
                return (
                    <thead>
                        <tr>
                            <th>Server Namer</th>
                            <th>Clients</th>
                            <th>IP</th>
                            <th>port</th>
                            <th>CPU</th>
                            <th>RAM</th>
                            <th>SSD</th>
                            <th>HDD</th>
                            <th>OS</th>
                            <th>Software</th>
                            <th>Users</th>
                            <th>grace period</th>
                        </tr>
                    </thead>

                            <tbody>
                                <tr>
                                    <td.Title>
                                        {inf.title}
                                    </td.Title>
                                    <td.Text>Requirements: {inf.details}</td.Text>
                                    <td.Text>Location: {inf.location}</td.Text>
                                </tr>
                            </tbody>

                )
            })}

        </div>
    );
}
