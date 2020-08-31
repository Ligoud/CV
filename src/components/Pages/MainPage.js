import React from "react";

import "../../scss/mainPage.scss";
//
import CustomAnimations from "../../js/animateContent.js";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    //
    this.about = React.createRef();
    this.project = React.createRef();

    this.infoText = require("../../js/txtinfo.json");
  }

  startTypingInfo = (type) => {
    let txt = "";
    switch (type) {
      case "about":
        txt = this.infoText.aboutInfo;
        break;
    }
    this.animate.typeText(0, txt, this.about.current);
  };

  componentDidMount() {
    this.animate = new CustomAnimations(this.project.current);
    setTimeout(this.startTypingInfo, 1000, "about");
  }

  render() {
    return (
      <article id="mainPageArticle">
        <section id="aboutCurrentProject">
          <fieldset>
            <legend align="center">О данном проекте</legend>
            <div className="cardBg">
              <div ref={this.about} className="textField hideScrollBar"></div>
            </div>
          </fieldset>
        </section>
        <section id="aboutProjectTechnologies">
          <fieldset>
            <legend align="center">Об использоуемых технологиях</legend>
            <div className="cardBg">
              <div ref={this.project} className="textField hideScrollBar"></div>
            </div>
          </fieldset>
        </section>
      </article>
    );
  }
}
