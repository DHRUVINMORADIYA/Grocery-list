import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) return;

    const newItem = { id: Date.now(), text: this.state.text };
    this.setState({ items: this.state.items.concat(newItem), text: "" });
  };

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        What needs to be done?
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default App;
