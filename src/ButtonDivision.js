import { Component } from "react";

class ButtonDivision extends Component{
    division = () => {
        this.props.setOption(4)
        this.props.nextValue(this.props.number1)
    }

    render(){
        return(
            <button className="btn btn-secondary" style={{width:"56px"}} onClick={this.division}>/</button>
        )
    }
}

export default ButtonDivision