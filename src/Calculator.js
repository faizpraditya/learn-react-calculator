import { Component } from "react"
import ButtonMinus from "./ButtonMinus"
import ButtonPlus from "./ButtonPlus"
import ButtonResult from "./ButtonResult"

// Option
// 0 : not selected
// 1 : +
// 2 : -
// 3 : *
// 4 : /

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            number1 : 0,
            number2 : 0,
            option : 0
        }
    }

    clear(){
        this.setState({
            number1 : 0,
            number2 : 0,
            option : 0
        })
    }

    setValue(num){
        if (this.state.number1 === 0) {
            this.setState({
                number1 : num
            })
        } else {
                let numSet = this.state.number1.toString()+num.toString()
            this.setState({
                number1 : parseInt(numSet)
            })
        }
    }

    getResult = (number1) => {
        this.setState({
            number1 : number1
        })
    }

    nextValue = (number1) => {
        this.setState({
            number2 : number1,
            number1 : 0
        })
    }

    setOption = (opt) => {
        this.setState({
            option : opt 
        })
    }

    render() {
        return(
        <div>
            <h1>{this.state.number1}</h1>
            <button onClick={() => this.setValue(7)}>7</button>
            <button onClick={() => this.setValue(8)}>8</button>
            <button onClick={() => this.setValue(9)}>9</button>
            <button>/</button><br/>
            <button onClick={() => this.setValue(4)}>4</button>
            <button onClick={() => this.setValue(5)}>5</button>
            <button onClick={() => this.setValue(6)}>6</button>
            <button>*</button><br/>
            <button onClick={() => this.setValue(1)}>1</button>
            <button onClick={() => this.setValue(2)}>2</button>
            <button onClick={() => this.setValue(3)}>3</button>
            <ButtonMinus number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} /> <br/>
            <button onClick={() => this.clear()}>C</button>
            <button onClick={() => this.setValue(0)}>0</button>
            <ButtonResult number1={this.state.number1} number2={this.state.number2} getResult={this.getResult} option={this.state.option}/>
            <ButtonPlus number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} />
            </div>
        )
    }
}


export default Calculator;