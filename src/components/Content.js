import React from "react";

import "../scss/content.scss";

import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";

// const {CustomAnimations}=require('../js/animateContent.js')
// import CustomAnimations from '../js/animateContent.js'

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chosenContent = "";
    switch (this.props.page) {
      case "main":
        chosenContent = <MainPage />;
        break;
      case "about":
        chosenContent = <AboutPage />;
        break;
      case "projects":
        chosenContent = <ProjectsPage />;
        break;
    }
    return (
      <React.Fragment>
        {chosenContent}
        {/* <MainPage /> */}
        {/* <ProjectsPage /> */}
      </React.Fragment>
    );
  }
}
