import React, {Component} from "react";
import moment from "moment";

class AttendForm extends Component {

    state = {
        date: ''
    }

    dateComponent = () => {
        this.setState({
                date: moment().format('YYYY년 MM월 DD일')
            }
        )
    }

    componentDidMount() {
        this.dateComponent()
    }

    render() {
        return (
            <div>
                <span>{this.props.class}학년 {this.props.ban}반 {this.props.num}번 {this.props.name}</span><small> 님.</small><br/>
                <span>일자: {this.state.date}</span><br/><br/>
                <small>*오늘 일자가 맞는지 확인 후 진행해 주세요!</small><br/><br/>
            </div>
        )
    }
}

export default AttendForm
