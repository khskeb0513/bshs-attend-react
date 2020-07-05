import React, {Component} from "react";
import {Button} from "react-bootstrap";

class Success extends Component {
    render() {
        return (
            <div>
                <p>이용해 주셔서 감사합니다.</p>
                <br/>
                <Button
                    variant={"primary"}
                    href={'/'}
                >
                    첫 화면으로
                </Button>
            </div>
        );
    }
}

export default Success
