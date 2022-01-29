import { Component } from "react";

class ButtonResult extends Component{
    result = () => {
        if (this.props.option===1){
            this.props.getResult(this.props.number1+this.props.number2)
        }
        switch (this.props.option) {
            case 1:
                this.props.getResult(this.props.number1+this.props.number2)
                break;
            case 2:
                this.props.getResult(this.props.number1-this.props.number2)
                break;
            case 3:
                this.props.getResult(this.props.number1*this.props.number2)
                break;
            case 4:
                this.props.getResult(this.props.number1/this.props.number2)
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <button onClick={this.result}>=</button>
        )
    }
}

export default ButtonResult