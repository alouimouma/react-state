import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            interval: null,
            Person: {
                fullName: " C.Ronaldo",
                bio: "Cristiano Ronaldo dos Santos Aveiro, dit Cristiano Ronaldo.C'est un footballeur portugais qui joue comme attaquant pour la Juventus dans la Ligue italienne et l'équipe nationale du Portugal",
                profession: "footballeur",
                ImgSrc: "/image1.jpg",
            },
        };
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
            }, 1000),
        });
    }

    render() {
        return (
            <div>
                <Card style={{ width: "50rem", margin: "auto"  }}>
                    <Card.Img variant="top" src={this.state.Person.ImgSrc} />
                    <Card.Body style={{ color: "red" }}>
                        <Card.Title>
                            <span style={{ color: "red" }}>FullName</span> :{" "}
                            {this.state.Person.fullName}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "30px" }}>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>
                                    <span style={{ color: "red" }}>Bio </span>:{" "}
                                    {this.state.Person.bio}{" "}
                                </ListGroupItem>

                                <ListGroupItem>
                                    <span style={{ color: "red" }}>
                                        Profession{" "}
                                    </span>
                                    : {this.state.Person.profession}{" "}
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <h4>
                                the counter
                                <span style={{ color: "red" }}>
                                    {" "}
                                    {this.state.timer}{" "}
                                </span>
                                {this.state.timer > 1 ? "seconds" : "second"}{" "}
                                ago
                            </h4>
                        </small>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
