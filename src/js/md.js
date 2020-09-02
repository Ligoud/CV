export default class MdConverter {
  constructor() {
    this.md = require("markdown-it")();
    this.getHtml = this.getHtml.bind(this);
  }

  async getHtml(fileName) {
    console.log(fileName);
    let path = require(`../textData/${fileName}`);
    console.log(path);
    let text;
    let prom = new Promise((res, rej) => {
      fetch(path)
        .then((res) => {
          // console.log(res.text());
          return res.text();
        })
        .then((data) => {
          let html = this.md.render(data);
          res(html);
        });
    });
    text = await prom;
    return text;
  }
}
