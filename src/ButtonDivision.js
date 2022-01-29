import { Component } from "react";

class ButtonDivision extends Component{
    division = () => {
        this.props.setOption(4)
        this.props.nextValue(this.props.number1)
    }

    render(){
        return(
            <button onClick={this.division}>/</button>
        )
    }
}

export default ButtonDivision