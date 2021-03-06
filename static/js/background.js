import { BrowserUtils } from "../../static/js/utils/BrowserUtils.js";

export default class Background {
  constructor(el) {
    this.el = el;
    this.w = 0;
    this.h = 0;

    this.total = 0;
    this.rows = BrowserUtils.isMobile() ? 15 : 10;
    this.columns = BrowserUtils.isMobile() ? 4 : 7;
    this.xSpacing = 0;
    this.ySpacing = 0;

    this.rotation = 0;
    this.gravity = 0;

    this.snowflakes = [];
    this.snowflakesPool = [];

    this.onResize();
    this.createSnowFlakes();
    this.tick();

    window.addEventListener("resize", this.onResize.bind(this));
  }

  createSnowFlakes() {
    // this.snowflakes.forEach(obj => {
    //   this.el.removeChild(obj.el);
    // })

    for (let i = 0; i < this.total; i++) {
      const xIndex = i % this.columns;
      const yIndex = Math.floor(i / this.columns) % this.rows;
      const el = document.createElement("div");
      el.classList.add("snowflake");
      this.el.appendChild(el);
      const obj = { el, xIndex, yIndex };
      this.snowflakes.push(obj);
    }
  }

  updateSnowFlakes() {
    this.rotation += 1;
    this.gravity += 1;
    this.snowflakes.forEach((obj, index) => {
      const x = obj.xIndex * this.xSpacing + this.xSpacing / 2;

      const yStart = -this.ySpacing / 2;

      const yOffset = obj.xIndex * this.xSpacing * 0.4;
      let y = obj.yIndex * this.ySpacing + this.gravity + yOffset;
      y -= this.ySpacing * (this.rows + 1);
      y %= this.rows * this.ySpacing;
      y += yStart;

      obj.el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(-${this.rotation}deg)`;
    });
  }

  tick() {
    this.updateSnowFlakes();
    requestAnimationFrame(() => {
      this.tick();
    });
  }

  onResize() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    this.xSpacing = this.w / this.columns;
    this.ySpacing = this.xSpacing * 1.5;
    // this.rows = Math.ceil(this.h / this.ySpacing);
    this.total = this.columns * this.rows;
  }
}
