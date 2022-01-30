import { Component } from "react";

class ButtonOperator extends Component{
    operator = () => {
        this.props.setOption(this.props.option)
        this.props.nextValue(this.props.number1)
    }
    
    sign = () => {
        switch (this.props.option) {
            case 1:
                return(<>+</>)
            case 2:
                return(<>&minus;</>)
            case 3:
                return(<>&times;</>)
            case 4:
                return(<>&divide;</>)
            default:
                break;
        }
    }

    render(){
        return(
                <button className="btn btn-warning col-1" onClick={this.operator} >{this.sign()}</button>
        )
    }
}

export default ButtonOperator