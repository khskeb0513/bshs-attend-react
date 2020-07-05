import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class Intro extends Component {
    render() {
        return (
            <div>
                <p>
                    부산고등학교 출석시스템
                </p>
                <a
                    href='/search'
                    className='App-link'>
                    <Button
                        variant={"outline-primary"}
                    >
                        다음
                    </Button>
                </a>
            </div>
        )
    }
}

export default Intro
