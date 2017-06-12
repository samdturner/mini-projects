import React from 'react';

export default class Calculator extends React.Component {
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
    this.multiply = this.multiply.bind(this);
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

  multiply(e){
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

        <input className="num1" onChange={this.setNum1} value={num1}/>
        <input className="num2" onChange={this.setNum2} value={num2}/>
        <button className="clear" onClick={this.clear}>Clear</button>
        <br/>
        <button className="add" onClick={this.add}>+</button>
        <button className="subtract" onClick={this.subtract}>-</button>
        <button className="multiply" onClick={this.multiply}>*</button>
        <button className="divide" onClick={this.divide}>/</button>

        <h2 className="total">{total}</h2>
      </div>
    )
  }
}
