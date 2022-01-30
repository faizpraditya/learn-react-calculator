import { Component } from "react";

class ButtonResult extends Component{
    result = () => {
        switch (this.props.option) {
            case 1:
                this.props.getResult(this.props.number2+this.props.number1)
                break;
            case 2:
                this.props.getResult(this.props.number2-this.props.number1)
                break;
            case 3:
                this.props.getResult(this.props.number2*this.props.number1)
                break;
            case 4:
                this.props.getResult(this.props.number2/this.props.number1)
                break;
            default:
                break;
        }
        this.props.setOption(5)
    }

    render(){
        return(
            <button className="btn btn-warning col-1" onClick={this.result}>=</button>
        )
    }
}

export default ButtonResult