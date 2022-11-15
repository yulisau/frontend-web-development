import React from "react";

export default class TextAreaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "hello" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value =
      event.target
        .value; /*html element that was interacted with ex: the text input value (I think) where onchange = handleChange*/
    this.setState({ value: value });
  }

  handleSubmit(event) {
    console.log(`value is: ${this.state.value}!`); 
    event.preventDefault(); 
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <textarea
          id="name"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    );
  }
}
