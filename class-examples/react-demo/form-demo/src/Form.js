import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hello",
      full: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target; /*html element that was interacted with ex: the text input value (I think) where onchange = handleChange*/
    const value =  target.type === 'checkbox' ? target.checked : target.value; /*same as saying ... if target type is checkbox, make value target checked, else (if not), keep the value it already has*/
    const name = target.name; 

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(`name is: ${this.state.name}!`);
    console.log(`full is: ${this.state.full}!`);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="fullName">Full Name?</label>
        <input
          type="checkbox"
          id="fullName"
          name="full"
          chacked={this.state.full}
          onChange={this.handleChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
