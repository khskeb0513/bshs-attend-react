import React, {Component} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import qs from "query-string";
import AttendForm from "./AttendForm";
import moment from 'moment';

class Attend extends Component {

    state = {
        load: false,
        data: [],
        visible: 'hidden',
        working: 'hidden'
    }

    componentDidMount() {
        this.getStudentInformation()
    }

    getStudentInformation = () => {
        const code = qs.parse(window.location.search)['code']
        axios.post('/sql/student', {
            st_id: code
        }).then(
            (r) => {
                this.setState({
                    load: true,
                    data: r.data,
                    visible: 'visible'
                })
            }, (e) => {
                this.setState({
                        load: true,
                        data: e,
                        visible: 'visible'
                    }
                )
            }
        )
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const number = (Math.floor(Math.random() * (max - min)) + min).toString()
        if (number.length === 1) {
            return '0' + number
        } else if (number.length === 2) {
            return number
        } else {
            return '47'
        }
    }

    attend750 = () => {
        const code = qs.parse(window.location.search)['code']
        this.setState({
            visible: 'hidden',
            working: 'visible'
        })
        axios.post('/sql/studentin/create', {
            st_id: code,
            inDate: moment().format('YYYY-MM-DD'),
            inTime: '07' + this.getRandomInt(50, 59) + this.getRandomInt(0, 60),
            "class": this.state.data[0]['class'],
            state: 'Y',
            STD_NAME: '체크기1',
            gubun: '',
            bigo: ''
        }).then(r => {
            window.location.href = '/success?code=' + code
        })
    }

    attend800 = () => {
        const code = qs.parse(window.location.search)['code']
        this.setState({
            visible: 'hidden',
            working: 'visible'
        })
        axios.post('/sql/studentin/create', {
            st_id: code,
            inDate: moment().format('YYYY-MM-DD'),
            inTime: '08' + this.getRandomInt(0, 20) + this.getRandomInt(0, 60),
            "class": this.state.data[0]['class'],
            state: 'Y',
            STD_NAME: '체크기1',
            gubun: '',
            bigo: ''
        }).then(r => {
            window.location.href = '/success?code=' + code
        })
    }

    attend820 = () => {
        const code = qs.parse(window.location.search)['code']
        this.setState({
            visible: 'hidden',
            working: 'visible'
        })
        axios.post('/sql/studentin/create', {
            st_id: code,
            inDate: moment().format('YYYY-MM-DD'),
            inTime: '08' + this.getRandomInt(20, 40) + this.getRandomInt(0, 60),
            "class": this.state.data[0]['class'],
            state: 'Y',
            STD_NAME: '체크기1',
            gubun: '',
            bigo: ''
        }).then(r => {
            window.location.href = '/success?code=' + code
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map(r => {
                        return (<AttendForm name={r.name} class={r.class} ban={r.ban} num={r.num}/>)
                    })
                }
                <span style={{visibility: this.state.working}}>진행 중 입니다.</span>
                <div style={{visibility: this.state.visible}}>
                    <Button
                        onClick={this.attend750}
                        variant={"primary"}>
                        7:50 - 8:00 사이 출석체크
                    </Button>
                    <br/><br/>
                    <Button
                        onClick={this.attend800}
                        variant={"success"}>
                        8:00 - 8:20 사이 출석체크
                    </Button>
                    <br/><br/>
                    <Button
                        onClick={this.attend820}
                        variant={"warning"}>
                        8:20 - 8:40 사이 출석체크
                    </Button>
                    <br/><br/>
                    <Button
                        href='/'
                        variant={"outline-danger"}>
                        첫 화면으로
                    </Button>
                </div>
            </div>
        )
    }
}

export default Attend
