import React from 'react';
class Counter extends React.Component{

constructor(props){
super(props);
this.state={count:10};
this.handleDecrement=this.handleDecrement.bind(this);
this.handleIncrement=this.handleIncrement.bind(this);
}

 handleDecrement(){
this.setState((curState) => {
  return{count: curState.count-1};
})
}

handleIncrement(){
  this.setState((curState) => {
    return{count: curState.count+1};
  })
  }

render(){
  const date=new Date("October 22 2023");
  date.setDate(date.getDate() + this.state.count);
  return(
    <div>
      <button onClick={this.handleDecrement}>-</button>
      <span> {date.toDateString()} [{this.state.count}]</span>
      <button onClick={this.handleIncrement}>+</button>
    </div>
  )
}
}

export default Counter;