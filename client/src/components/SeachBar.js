import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../AutoComplete.css";
import { Button } from "reactstrap";
export default class SearchBar extends Component {
  state = {
    items: [],
    text: ""
  };

  //Here we call all of the data from the database to get the suggestions
  componentDidMount() {
    axios.get("/home").then(response => {
      //  console.log(response.data);
      this.setState({
        items: response.data
      });
    });
  }
  // While writing we sort the matching suggestions in the input field
  onTextChanged = e => {
    const value = e.target.value;

    this.setState({
      text: value
    });
  };

  // Here we check the suggestions on the first input field

  //Once the suggestion is clicked we push that value to the selected array in the component state so we can use that data later for the get call

  render() {
    const { text } = this.state;
    console.log(text);
    // console.log(this.state.suggestions);
    return (
      <div className="App-Component">
        <div className="AutoCompleteText">
          <input type="text" onChange={this.onTextChanged} value={text} />
        </div>
        <button>
          <Link to={`/${text}`}>Check</Link>
        </button>
      </div>
    );
  }
}
