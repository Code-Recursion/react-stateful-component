import React, { Component } from "react";
import Contact from "./Contact";

export default class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "pluto", age: 4 },
      { id: 2, name: "ajay", age: 21 },
      { id: 3, name: "batman", age: 69 },
    ],
    contact: { name: "" },
  };

  handleDelete = (id, event) => {
    const newState = Object.assign([], this.state.contacts);
    let index = newState.findIndex((contact) => {
      return contact.id === id;
    });
    newState.splice(index, 1);
    this.setState({
      contacts: newState,
    });
  };

  generateId = () => {
    const id = this.state.contacts.reduce((a, b) => {
      return a.id > b.id ? a.id : b.id;
    });
    return id + 1;
  };

  handleChange = (event) => {
    this.setState({
      contact: { name: event.target.value },
    });
  };

  handleCreateContact = async (event) => {
    event.preventDefault();

    console.log(this.generateId());

    let contacts = Object.assign([], this.state.contacts);

    let ContactObj = {
      id: this.generateId(),
      name: this.state.contact.name,
      age: 50,
    };

    let updatedContacts = contacts.concat(ContactObj);

    await this.setState({ contacts: updatedContacts });

    await this.setState({
      contact: { name: "" },
    });
    event.target.value = "";
    console.log(this.state);
  };

  handleChangeName = (id, event) => {
    const index = this.state.contacts.findIndex((contact) => {
      return id === contact.id;
    });
    let contact = Object.assign({}, this.state.contacts[index]);
    contact.name = event.target.value;

    let contacts = Object.assign([], this.state.contacts);
    contacts[index] = contact;
    this.setState({ contacts });
  };

  render() {
    return (
      <div>
        {this.state.contacts.map((contact) => (
          <Contact
            handleDelete={this.handleDelete.bind(this, contact.id)}
            handleChangeName={this.handleChangeName.bind(this, contact.id)}
            key={contact.id}
            id={contact.id}
            name={contact.name}
            age={contact.age}
          />
        ))}
        <div style={{ margin: " 2rem 4rem" }}>
          <form onSubmit={this.handleCreateContact}>
            <input
              type="text"
              value={this.state.contact.name}
              onChange={this.handleChange}
            />
            <button>create</button>
          </form>
        </div>
      </div>
    );
  }
}
