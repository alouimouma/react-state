import "./App.css";
import { Component } from "react";
import Profile from "./component/profile";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/Navbar";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    toggleVisibililiy = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    render() {
        return (
            <div className="App">
                <Nav />
                <Button
                    variant="success"
                    style={{ margin: "50px" }}
                    onClick={this.toggleVisibililiy}
                >
                    {this.state.open ? "Close profile" : "Open profile"}
                </Button>
                {this.state.open && <Profile />}
            </div>
        );
    }
}
