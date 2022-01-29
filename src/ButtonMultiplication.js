import { Component } from "react";

class ButtonMultiply extends Component{
    multiply = () => {
        this.props.setOption(3)
        this.props.nextValue(this.props.number1)
    }

    render(){
        return(
            <button onClick={this.multiply}>*</button>
        )
    }
}

export default ButtonMultiply