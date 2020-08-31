import React from "react";

// import '../'
import CircleNav from "./circleNav";
import Background from "./Background";
import Content from "./Content";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //
    this.changePage = this.changePage.bind(this);
    //
    this.state = {
      chosenPage: "main",
      bgH: 2, //"100%", // TODO Изменить потом на 2
    };
  }
  changePage(page, bgH = "100%") {
    this.setState({ chosenPage: page, bgH: bgH });
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/1aa922d09f.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    let content = <Content page={this.state.chosenPage} />;
    let clr1 = "#54a0ff",
      clr2 = "#ff9f43"; //Цвета для градиента на фоне. Сделать в бг надо обработку по всем надо сделать
    console.log(this.state.bgH);
    return (
      <React.Fragment>
        <CircleNav changePage={this.changePage} />
        <Background
          key={this.state.bgH}
          linearGradient={{ color1: clr1, color2: clr2 }}
          heightInPages={this.state.bgH}
        />
        {content}
      </React.Fragment>
    );
  }
}
