
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" style={{ color: "red" }}>
                        <img
                            src="/image2.jpg"
                            alt="img"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{" "}
                        cristiano Ronaldo
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}
