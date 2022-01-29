import { Component } from "react";

class ButtonMultiply extends Component{
    minus = () => {
        this.props.setOption(3)
        this.props.nextValue(this.props.number1)
    }

    render(){
        return(
            <button onClick={this.minus}>*</button>
        )
    }
}

export default ButtonMultiply