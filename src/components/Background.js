import React from "react";

import "../scss/background.scss";

export default class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: `linear-gradient(${this.getGradients(this.props.linearGradient)})`,
      height:
        this.props.heightInPages === "100%"
          ? this.props.heightInPages
          : this.props.heightInPages * 100 + "vh",
    };
  }
  getGradients(obj) {
    let res = "";
    for (let prop in obj) {
      res += obj[prop] + ",";
    }
    res = res.slice(0, -1); //Убираю запятую
    return res;
  }
  render() {
    return (
      <React.Fragment>
        <div
          id="moveBg"
          style={{
            background: this.state.color,
            height: this.state.height,
          }}
        ></div>
        <div id="staticBg"></div>

        {this.props.children}
      </React.Fragment>
    );
  }
}
