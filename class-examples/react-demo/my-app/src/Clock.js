import React from 'react'; 
    
export default class Clock extends React.Component {
    constructor(props) {
        super(props); //always needs to be included in a constructor, first line. it's calling the react class constructor (what react developers made) 
        this.state = {date: new Date()}; //only assign (equal sign) once, in the constructor. All other changes should be updates 
        this.sayhello = this.sayHello.bind(this); 
      } 

      sayHello(){
        console.log(`Hello world! The time is ${this.state.date.toLocaleTimeString()}`); 
      } 

      sayGoodbye() { //does not need to be bound
        console.log(`Goodbye world! The time is ${this.state.date.toLocaleTimeString()}`); 
      }
      componentDidMount() { //initializes component on first time rendering of page 
        this.timerID = setInterval(
            () => {
                this.setState({
                    date: new Date()
                });
            },
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

   render(){ return (
        <div onClick={this.sayHello}>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
   }
}