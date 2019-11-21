import React, { Component } from "react";
import axios from "axios";
import "../results.scss";

import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  H1
} from "reactstrap";
import Properties from "./Properties";
let physicalObject = {};
export default class Results extends Component {
  state = {
    selectedProperties: {},
    errorMessage: ""
  };
  componentDidMount = () => {
    const query = this.props.match.params.name_url;
    axios.get(`/${query}`).then(response => {
      if (typeof response.data === "string") {
        this.setState({ errorMessage: response.data });
      } else {
        physicalObject = response.data;
        this.setState({});
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.errorMessage ? (
          <h1>{this.state.errorMessage}</h1>
        ) : physicalObject.properties ? (
          <>
            <h1>{physicalObject.name}</h1>
            <Properties
              physicalObject={physicalObject}
              onChange={selectedProperties =>
                this.setState({ selectedProperties })
              }
              selectedProperties={this.state.selectedProperties}
            ></Properties>
          </>
        ) : null}
      </div>
    );
  }
}
