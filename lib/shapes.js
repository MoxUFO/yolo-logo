
class Shape {
    constructor(text,textColor,logoColor,logoShape){
        this.text = text;
        this.textColor = textColor,
        this.logoColor = logoColor
        this.logoShape = logoShape
    }
}

class Circle extends Shape{
    constructor(text,textColor,logoColor){
        super(text,textColor,logoColor, "circle")
    }
    render(){
        // console.log(this.logoColor);
        return `<svg version="1.1" width="300" height="200"> 
        <circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
} 

class Square extends Shape{
    constructor(text,textColor,logoColor){
        super(text,textColor,logoColor, "square")
    }
    render(){

    }
}

class Triangle extends Shape{
    constructor(text,textColor,logoColor){
        super(text,textColor,logoColor, "triangle")
    }
    render(){

    }
}

module.exports = {Shape,Triangle,Square,Circle}