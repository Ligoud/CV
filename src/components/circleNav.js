import React from "react";

import "../scss/nav.scss";

export default class CircleNav extends React.Component {
  constructor(props) {
    super(props);
    //
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
  }
  handleMainClick() {
    // console.log("mainclicked");
    this.props.changePage("main", 2);
  }
  handleAboutClick() {
    // console.log("aboutclicked");
    this.props.changePage("about");
  }
  handleProjectsClick() {
    this.props.changePage("projects");
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <div id="mainNav" onClick={this.handleMainClick}>
            <img src={require("../publicFiles/FirstLogo.png")}></img>
          </div>
          <div id="extNav">
            <div id="about" onClick={this.handleAboutClick}>
              <i className="fas fa-info"></i>
              <span>О себе</span>
            </div>
            <div id="projects" onClick={this.handleProjectsClick}>
              <i className="fas fa-tasks"></i>
              <span>О проектах</span>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
