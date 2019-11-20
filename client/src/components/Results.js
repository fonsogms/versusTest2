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
    axios
      .get(`/${query}`)
      .then(response => {
        physicalObject = response.data;
        this.setState({});
      })
      .catch(err => {
        this.setState({ errorMessage: "Sorry Page doesn´t exist" });
      });
  };

  render() {
    return (
      <div>
        {physicalObject.properties ? (
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
        ) : (
          <h1>Sorry the object you are looking for doesn´t exist</h1>
        )}
      </div>
    );
  }
}
