import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import normalBaby from "./assets/unadulterated-hoglette.png";
import SunBaby from "./assets/sun-eyes.png";
import BlueBaby from "./assets/blue-eyes.png";
import GlowingBaby from "./assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorMapper = {
  normal: normalBaby,
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby
};
export default class BabyHog extends Component {
  state = {
    weight: 1
  };
  changeWeight = e => {
    // nothing needs to change here
    const newWeight =
      e.target.name === "+" ? this.state.weight + 10 : this.state.weight - 10;
    this.setState({
      weight: newWeight
    });
  };

  render() {
    const { babyHog } = this.props;
    console.log("this is this.props", babyHog.eyeColor);
    return (
      <li className="hogbabies">
        <h1>Name: {babyHog.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {babyHog.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img
            src={eyeColorMapper[this.props.eyeColor]}
            style={{ height: "200px" }}
            alt="MasterBlasterJrJr"
          />
        </div>
      </li>
    );
  }
}
