import React, { Component } from "react";
import { logDOM } from "@testing-library/react";
import UL from './ul'

export default class Body extends Component {
  render() {
    return (
      <div>
        <img src={this.props.mainPic} alt="chocolate-pizza-pic"/>
        <p> {this.props.paragraph1}</p>
        <p>{this.props.paragraph2}</p>
        <p>{this.props.paragraph3}</p>
        <ul>
          <li>{this.props.li}</li>
          <li>{this.props.li1}</li>
          <li>{this.props.li2}</li>
          <li>{this.props.li3}</li>
          <li>{this.props.li4}</li>
          <li>{this.props.li5}</li>
        </ul>
        <ul>
          <li>{this.props.li6}</li>
          <li>{this.props.li7}</li>
          <li>{this.props.li8}</li>
          <li>{this.props.li9}</li>
          <li>{this.props.li10}</li>
          <li>{this.props.li11}</li>
        </ul>
          
       
      </div>

    );
  }
}