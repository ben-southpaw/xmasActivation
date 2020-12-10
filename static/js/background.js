export default class Background {
  constructor(el) {
    this.el = el;
    this.w = 0;
    this.h = 0;

    this.total = 0;
    this.rows = 0;
    this.columns = 0;
    this.xSpacing = 200;
    this.ySpacing = 220;

    this.rotation = 0;
    this.gravity = 0;

    this.snowflakes = [];
    this.snowflakesPool = [];

    this.onResize();
    this.createSnowFlakes();
    this.tick();

    window.addEventListener("resize", this.onResize.bind(this));
  }

  createSnowflake() {}

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

    // console.log(this.snowflakes);
  }

  updateSnowFlakes() {
    this.rotation += 1;
    this.gravity += 1;
    this.snowflakes.forEach((obj, index) => {
      const x = obj.xIndex * this.xSpacing;

      const yStart = -this.ySpacing / 2;

      const yOffset = obj.xIndex * 100;
      let y = obj.yIndex * this.ySpacing + this.gravity + yOffset;
      y -= this.ySpacing * (this.rows + 2);
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

    this.columns = Math.ceil(this.w / this.xSpacing);
    this.rows = Math.ceil(this.h / this.ySpacing);
    this.total = this.columns * this.rows;

    // console.log(this.columns, this.rows, this.total);
  }
}
