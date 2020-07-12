import React, {Component} from "react";
import {Button} from 'react-bootstrap'

class DoubleProcess extends Component {
    render() {
        return (
            <div>
                <p>
                    중복된 요청이 검출되었습니다.<br/>
                    다시 시도해 주십시오.
                </p>
                <Button
                    variant={"outline-danger"}
                    href='/'
                >
                    첫 화면
                </Button>
            </div>
        );
    }
}

export default DoubleProcess
