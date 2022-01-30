import { Component } from "react";

class ButtonNumber extends Component{
    setNumber = () => {
        this.props.setValue(this.props.number,this.props.nState)
    }

    render(){
        return(
            <button className="btn btn-dark px-5" onClick={this.setNumber}>{this.props.number}</button>
        )
    }
}

export default ButtonNumber