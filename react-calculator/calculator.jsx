import React from 'react';

class Calculator extends React.Component {
  constructor(){
    super();
    this.state = {
      num1: "",
      num2: "",
      total: 0
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.muiltiply = this.muiltiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e){
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e){
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  add(e){
    e.preventDefault();
    const total = this.state.num1 + this.state.num2;
    this.setState({ total });
  }

  subtract(e){
    e.preventDefault();
    const total = this.state.num1 - this.state.num2;
    this.setState({ total });
  }

  muiltiply(e){
    e.preventDefault();
    const total = this.state.num1 * this.state.num2;
    this.setState({ total });
  }

  divide(e){
    e.preventDefault();
    const total = this.state.num1 / this.state.num2;
    this.setState({ total });
  }

  clear(e){
    e.preventDefault();
    this.setState({ num1: "", num2: "", total: 0 });
  }

  render(){
    const { num1, num2, total } = this.state;
    return (
      <div>
        <h1>React Calculator</h1>

        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <button onClick={this.clear}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.muiltiply}>*</button>
        <button onClick={this.divide}>/</button>

        <h2>{total}</h2>
      </div>
    )
  }
}

export default Calculator;
