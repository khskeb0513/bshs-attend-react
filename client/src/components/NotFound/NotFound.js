import React, {Component} from "react";
import {Button} from "react-bootstrap";

class NotFound extends Component {
    render() {
        return (
            <div>
                <p>
                    페이지를 찾을 수 없습니다.
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

export default NotFound
