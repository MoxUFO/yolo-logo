const CLI = require('./cli')
console.log(CLI)

class Shape {
    constructor(bg,text,textcolor,shape){
        this.bg = bg;
        this.text = text;
        this.textcolor = textcolor,
        this.shape = shape
    }
}

class Circle extends Shape{
    constructor(bg,text,textcolor){
        super(bg,text,textcolor, "circle")
    }
    render(){

    }
}

class Square extends Shape{
    constructor(bg,text,textcolor){
        super(bg,text,textcolor, "square")
    }
    render(){

    }
}

class Triangle extends Shape{
    constructor(bg,text,textcolor){
        super(bg,text,textcolor, "triangle")
    }
    render(){
        
    }
}

module.exports = undefined