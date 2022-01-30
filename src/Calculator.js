import { Component } from "react"
import ButtonResult from "./ButtonResult"
import ButtonNumber from "./ButtonNumber"
import ButtonOperator from "./ButtonOperator"

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

    // clear(){
    clear = () => {
        this.setState({
            number1 : 0,
            number2 : 0,
            option : 0
        })
    }

    // setValue(num){
    setValue = (num) => {
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
        <div className="container my-5">
            <div className="me-2">
                <h1 className="display-1 text-light">{this.state.number1}</h1>
            </div>
            <div className="ms-5">
                <ButtonNumber number={7} setValue={this.setValue} />
                <ButtonNumber number={8} setValue={this.setValue} />
                <ButtonNumber number={9} setValue={this.setValue} />
                <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={4} /> <br/>
                <ButtonNumber number={4} setValue={this.setValue} />
                <ButtonNumber number={5} setValue={this.setValue} />
                <ButtonNumber number={6} setValue={this.setValue} />
                <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={3} /> <br/>
                <ButtonNumber number={1} setValue={this.setValue} />
                <ButtonNumber number={2} setValue={this.setValue} />
                <ButtonNumber number={3} setValue={this.setValue} />
                <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={2} /> <br/>
                {/* <button className="btn btn-warning px-5" onClick={() => this.clear()}>C</button> */}
                <button className="btn btn-warning px-5" onClick={this.clear}>C</button>
                <ButtonNumber number={0} setValue={this.setValue} />
                <ButtonResult number1={this.state.number1} number2={this.state.number2} getResult={this.getResult} option={this.state.option}/>
                <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={1} />
            </div>
        </div>
        )
    }
}


export default Calculator;