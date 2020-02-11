import React, { Component } from "react";
import { logDOM } from "@testing-library/react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={this.props.logo} alt="logo" class="topLeftHeader"/>
        <p class="topLeftHeader">{this.props.name} </p>
        <h6 class="topLeftHeader">{this.props.description}</h6>
        <img src={this.props.fblogo} alt="facebook logo" class="topRightNavImages"/>
        <img src={this.props.twitlogo} alt="twitter logo" class="topRightNavImages"/>
        <img src={this.props.gplus} alt="google plus logo" class="topRightNavImages"/>
        <img src={this.props.ig} alt="instagram logo" class="topRightNavImages"/>
        <img src={this.props.flic} alt="flic logo" class="topRightNavImages"/>
        <img src={this.props.pint} alt="pinterest logo" class="topRightNavImages"/>
        <img src={this.props.wifi} alt="wifi logo" class="topRightNavImages"/>
        <img src={this.props.mail} alt="email logo" class="topRightNavImages"/>
      </div>
    );
  }
}   

