import { Component } from "react";

class ButtonPlus extends Component{
    plus = () => {
        this.props.setOption(1)
        this.props.nextValue(this.props.number1)
    }

    render(){
        return(
            <button className="btn btn-secondary" style={{width:"56px"}} onClick={this.plus}>+</button>
        )
    }
}

export default ButtonPlus