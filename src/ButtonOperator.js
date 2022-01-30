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
                return(<>-</>)
            case 3:
                return(<>*</>)
            case 4:
                return(<>/</>)
            default:
                break;
        }
    }

    render(){
        return(
            <button className="btn btn-secondary" style={{width:"56px"}} onClick={this.operator}>{this.sign()}</button>
        )
    }
}

export default ButtonOperator