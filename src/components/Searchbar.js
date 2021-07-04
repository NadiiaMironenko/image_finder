import React, { Component } from "react";
// import PropTypes from "prop-types";
import swal from "sweetalert";
import { ImSearch } from "react-icons/im";

export default class Searchbar extends Component {
  state = {
    name: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.name.trim() === "") {
      return swal("введите данные, пожалуйста");
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ marginRight: 8 }} />
            <span>Search</span>
          </button>

          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
