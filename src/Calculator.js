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
// 5 : end (calculated)

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
            number1 : 0
        })
    }

    allClear = () => {
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

    backspace = () => {
        this.setState({
            number1 : parseInt(this.state.number1/10)
        })
    }

    render() {
        return(
        <div className="container my-5">
            <div className="row">
                <h1 className="display-1 text-light">{this.state.number1}</h1>
            </div>
            <div className="">
                <div className="row d-flex justify-content-center">
                    <button className="btn btn-secondary col-1" onClick={this.allClear}>AC</button>
                    <button className="btn btn-secondary col-1" onClick={this.clear}>C</button>
                    <button className="btn btn-secondary col-1" onClick={this.backspace}>&#8592;</button>
                    <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={4} />
                </div>
                <div className="row d-flex justify-content-center">
                    <ButtonNumber number={7} setValue={this.setValue} />
                    <ButtonNumber number={8} setValue={this.setValue} />
                    <ButtonNumber number={9} setValue={this.setValue} />
                    <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={3} />
                </div>
                <div className="row d-flex justify-content-center">
                    <ButtonNumber number={4} setValue={this.setValue} />
                    <ButtonNumber number={5} setValue={this.setValue} />
                    <ButtonNumber number={6} setValue={this.setValue} />
                    <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={2} />
                </div>
                <div className="row d-flex justify-content-center">
                    <ButtonNumber number={1} setValue={this.setValue} />
                    <ButtonNumber number={2} setValue={this.setValue} />
                    <ButtonNumber number={3} setValue={this.setValue} />
                    <ButtonOperator number1={this.state.number1} nextValue={this.nextValue} setOption={this.setOption} option={1} />
                </div>
                <div className="row d-flex justify-content-center">
                    {/* <button className="btn btn-warning px-5" onClick={() => this.clear()}>C</button> */}
                    <ButtonNumber number={0} setValue={this.setValue} />
                    <ButtonResult number1={this.state.number1} number2={this.state.number2} getResult={this.getResult} option={this.state.option} setOption={this.setOption} />
                </div>
            </div>
        </div>
        )
    }
}


export default Calculator;