class Shape {
  constructor(text, textColor, logoColor, logoShape) {
    this.text = text;
    (this.textColor = textColor), (this.logoColor = logoColor);
    this.logoShape = logoShape;
  }
  render() {
    return "Test on shapes passed";
  }
}

class Circle extends Shape {
  constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor, "circle");
  }
  render() {
    // console.log(this.logoColor);
    return `<svg version="1.1" width="300" height="200"> 
            <circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor, "square");
  }
  render() {
    return `<svg version="1.1" width="300" height="200"> 
            <rect x="100" y="85"  width="100" height="100" fill="${this.logoColor}" />
            <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor, "triangle");
  }
  render() {
    return `<svg version="1.1" width="300" height="200"> 
            <polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />
            <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
