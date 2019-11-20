import React, { Component } from "react";
import { ButtonGroup, Button, Input } from "reactstrap";

export default class Checkbox extends Component {
  state = {
    text: "Show"
  };
  changeState(state) {
    this.props.onChange(!this.props.selected);
    if (state === "Show") {
      this.setState({
        text: "Hide"
      });
    } else {
      this.setState({
        text: "Show"
      });
    }
  }
  render() {
    return (
      <div>
        <ButtonGroup>
          {/* <input type="checkbox" onClick={() => onChange(!selected)} /> */}
          <Button
            color="primary"
            onClick={() => {
              this.changeState(this.state.text);
            }}
          >
            {this.state.text}
          </Button>
          {/* <Button
          color="primary"
          onClick={() => onCheckboxBtnClick(2)}
          active={cSelected.includes(2)}
        >
          Two
        </Button>
        <Button
          color="primary"
          onClick={() => onCheckboxBtnClick(3)}
          active={cSelected.includes(3)}
        >
          Three
        </Button> */}
        </ButtonGroup>
      </div>
    );
  }
}
