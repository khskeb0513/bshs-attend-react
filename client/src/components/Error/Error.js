import React, {Component} from "react";
import {Button} from "react-bootstrap";

class Error extends Component {
    render() {
        return (
            <div>
                <p>
                    An error occurred while working.<br/>
                    Please repeat the procedure from the beginning.
                </p>
                <Button
                    variant={"outline-danger"}
                    href='/'
                >
                    첫 화면
                </Button>
            </div>
        )
    }
}

export default Error
