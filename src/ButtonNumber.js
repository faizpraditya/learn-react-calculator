import { Component } from "react";

class ButtonNumber extends Component{
    setNumber = () => {
            this.props.setValue(this.props.number)
    }

    setButton = () => {
        if (this.props.number === 0) {
            return(<button className="btn btn-dark col-3 cal-button m-1" onClick={this.setNumber}>{this.props.number}</button>)
        } else {
            return(<button className="btn btn-dark col-1 cal-button m-1" onClick={this.setNumber}>{this.props.number}</button>)
        }
    }

    render(){
        return(
            this.setButton()
        )
    }
}

export default ButtonNumber