import React, {Component} from "react";
import axios from 'axios';
import {Button, FormControl, InputGroup, Table} from 'react-bootstrap'

import StudentListForm from "./StudentListForm";

class SearchStudent extends Component {
    state = {
        load: false,
        hidden: 'hidden',
        data: [],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = () => {
        axios.post('/sql/student', {
            name: this.state.name
        }).then(
            (r) => {
                this.setState({
                    load: false,
                    hidden: 'visible',
                    data: r.data
                })
            }, (e) => {
                this.setState({
                        load: false,
                        hidden: 'visible',
                        data: e
                    }
                )
            }
        )
    }

    render() {
        return (
            <div className='container-md'>
                <h4>
                    학생 검색 페이지
                </h4>
                <br/>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={this.handleChange}
                        name='name'
                        placeholder="이름을 입력하세요."
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={this.handleSubmit}>검색</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Table className="table" style={{visibility: this.state.hidden}}>
                    <thead>
                    <tr style={{color: "white"}}>
                        <th scope="col">이름</th>
                        <th scope="col">학년</th>
                        <th scope="col">반</th>
                        <th scope="col">번호</th>
                        <th scope="col">선택</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(r => {
                            return (
                                <StudentListForm name={r.name} st_id={r.st_id} class={r.class} ban={r.ban} num={r.num}/>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default SearchStudent
