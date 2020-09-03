import React from "react";

import "../../scss/projects.scss";

import MdConverter from "../../js/md";

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.card = React.createRef();
    this.md = new MdConverter();
  }
  async handleClick(event) {
    let target = event.currentTarget;
    //
    let projId = target.getAttribute("data-id");
    let projectText = await this.md.getHtml(projId + ".md");
    let card = document.querySelector("#projectsPage > div ul");
    // let card = document.querySelector("#ulWrap");
    //
    // console.log(card);
    // card.style.animationPlayState = "running";
    card.style.display = "none"; //ul display none
    // setTimeout(
    //   (trgt) => {
    //     trgt.parentNode.style.display = "none"; //ul display none
    //   },
    //   1500,
    //   target
    // );
    //
    //
    let projectBody = document.getElementsByClassName("detailedProj")[0];
    // projectBody.removeAttribute("hidden");

    projectBody.getElementsByClassName("text")[0].innerHTML = projectText;
    projectBody.style.animationPlayState = "running";
    //
  }
  //
  handleBack(event) {
    this.forceUpdate();
  }
  render() {
    let jsonList = require("../../textData/projects.json");
    let list = [];
    jsonList.forEach((el) => {
      list.push(
        <li
          title={el.name}
          data-id={el.id}
          key={el.id}
          onClick={this.handleClick}
        >
          <span>{el.name}</span>
          <div className="botBorder" />
        </li>
      );
    });

    return (
      <React.Fragment key={new Date()}>
        <article id="projectsPage">
          <div ref={this.card} className="hideScrollBar">
            <div className="detailedProj hideScrollBar">
              <div className="text hideScrollBar"></div>
              <div className="back" onClick={this.handleBack}>
                <span>Обратно</span>
              </div>
            </div>
            <div id="ulWrap">
              <ul className="mainList">{list}</ul>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
