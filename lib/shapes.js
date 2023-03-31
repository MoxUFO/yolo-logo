//this fline contains the parent object of shape and the objects for each specific shape

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
    console.log('Gentered custom logo!');
    return `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
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
    console.log('Gentered custom logo!');
    return `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
            <rect x="88" y="85"  width="123" height="120" fill="${this.logoColor}" />
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor, "triangle");
  }
  render() {
    console.log('Gentered custom logo!');
    return `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
            <polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}
//exports all classes in this file
module.exports = { Shape, Triangle, Square, Circle };
