import React, {Component} from "react";

class AttendForm extends Component {
    render() {
        return (
            <div>
                <span>{this.props.class}학년 {this.props.ban}반 {this.props.num}번 {this.props.name}</span><small> 님!</small><br/>
            </div>
        )
    }
}

export default AttendForm
