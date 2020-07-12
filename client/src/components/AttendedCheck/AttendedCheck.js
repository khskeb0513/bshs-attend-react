import React, {Component} from "react";
import qs from 'query-string';
import axios from 'axios'
import {Button} from "react-bootstrap";
import moment from 'moment';
import Error from "../Error/Error";

class AttendedCheck extends Component {

    state = {
        load: false,
        data: []
    }

    handleChange = (e) => {
        const code = qs.parse(window.location.search)['code']
        const url = '/attend?code=' + code
        if (e === 0) {
            return (
                <div>
                    <p>오늘 자 출석 기록이 없으므로 출석 체크를 진행합니다.</p>
                    <Button style={{marginRight: '16px'}} href='/' variant={"outline-success"}>첫 화면</Button>
                    <Button href={url} variant={"outline-primary"}>다음</Button><br/><br/>
                    <small>* 빠른 출석 체크를 원한다면 이 페이지를 북마크 및 홈화면에 추가하세요.</small>
                </div>
            )
        } else {
            return (
                <div>
                    <p>오늘 자 출석 기록이 있어 출석 체크를 진행할 수 없습니다.</p>
                    <span>{this.state.data[0]['inDate']}</span><br/>
                    <span>{this.state.data[0]['inTime']}</span>
                    <br/><br/>
                    <Button href='/' variant={"outline-danger"}>첫 화면</Button>
                </div>
            )
        }
    }

    componentDidMount() {
        const code = qs.parse(window.location.search)['code']
        axios.post('/sql/studentin', {st_id: code, inDate: moment().format('YYYY-MM-DD')}).then((r) => {
            this.setState({
                load: true,
                data: r.data
            })
        }, (e) => {
            this.setState({
                load: true,
                data: e
            })
        })
    }

    render() {
        const code = qs.parse(window.location.search)['code']
        if (code) {
            return (
                <div className='container-md'>
                    {this.handleChange(this.state.data.length)}
                </div>
            );
        } else {
            return (
                <Error />
            )
        }
    }
}

export default AttendedCheck
