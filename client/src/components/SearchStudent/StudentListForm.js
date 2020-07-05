import React, {Component} from "react";
import {Button} from "react-bootstrap";

class StudentListForm extends Component {
    render() {
        const url = '/attendedcheck?code=' + this.props.st_id
        return (
            <tr style={{color: "white"}}>
                <td>{this.props.name}</td>
                <td>{this.props.class}</td>
                <td>{this.props.ban}</td>
                <td>{this.props.num}</td>
                <td>
                    <a
                        className='App-link'
                        href={url}
                    >
                        <Button
                        variant={"outline-primary"}>
                            >
                        </Button>
                    </a></td>
            </tr>
        )
    }
}

export default StudentListForm
