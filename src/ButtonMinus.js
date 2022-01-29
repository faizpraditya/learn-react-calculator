import { Component } from "react";

class ButtonMinus extends Component{
    minus = () => {
        this.props.setOption(2)
        this.props.nextValue(this.props.number1)
    }

    render(){
        return(
            <button onClick={this.minus}>-</button>
        )
    }
}

export default ButtonMinus