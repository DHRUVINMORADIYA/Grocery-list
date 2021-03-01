import ReactDOM from "react-dom";
import React from "react";

class TODO extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    console.log("change");
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    console.log("submit");
    if (this.state.text.length < 1) {
      alert("something needs to be added!");
    } else {
      this.setState({
        list: this.state.list.concat({
          text: this.state.text,
          id: this.state.list.length,
        }),
        text: "",
      });
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Welcome to TODO</h1>
        {this.state.list.length} items are there in the list
        <ol>
          {this.state.list.map((i) => (
            <li key={i.id}>{i.text}</li>
          ))}
        </ol>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TODO />, document.getElementById("root"));
