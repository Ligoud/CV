import React from "react";

import "../../scss/aboutPage.scss";

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <article id="aboutPageArticle">
          <div className="hideScrollBar">
            <section id="photoSection">
              <figure>
                <img src={require("../../publicFiles/pepoG.jpg")} />
                <figcaption>
                  <span>Это Я, - Меретин Егор</span>
                </figcaption>
              </figure>
            </section>
            <section id="personalInfo">
              <fieldset>
                <legend align="center">Обо мне</legend>
                <div className="cardBg">
                  <div
                    ref={this.about}
                    className="textField hideScrollBar"
                  ></div>
                </div>
              </fieldset>
            </section>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
