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
    // ev.persist();
    // let ev = event;
    let target = event.currentTarget;
    //
    let projId = target.getAttribute("data-id");
    console.log(1);
    let projectText = await this.md.getHtml(projId + ".md");
    console.log(2);
    let card = document.querySelector("#projectsPage > div");
    //

    card.style.animationPlayState = "running";
    target.parentNode.style.display = "none"; //ul display none
    let projectBody = document.getElementsByClassName("detailedProj")[0];
    projectBody.removeAttribute("hidden");

    projectBody.getElementsByClassName("text")[0].innerHTML = projectText;
    projectBody.style.animationPlayState = "running";
    //
  }
  // ! ДОДЕЛАТЬ Это
  handleBack() {}
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
      <React.Fragment>
        <article id="projectsPage">
          <div ref={this.card} className="hideScrollBar">
            <div className="detailedProj hideScrollBar" hidden>
              <div className="text hideScrollBar"></div>
              <div className="back" onClick={this.handleBack}>
                <span>Обратно</span>
              </div>
            </div>

            <ul className="mainList">{list}</ul>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
