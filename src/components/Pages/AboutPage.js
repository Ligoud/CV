import React from "react";

import "../../scss/aboutPage.scss";

import MdConverter from "../../js/md";

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
  }
  async componentDidMount() {
    let md = new MdConverter();
    let text = await md.getHtml("aboutMe.md");
    this.about.current.innerHTML = text;
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
