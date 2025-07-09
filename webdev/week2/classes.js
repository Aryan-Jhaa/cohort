const { log } = require("console");

class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;

        return area;
    }

    paint(){
        console.log(`Rectangle with color ${this.color}`);
        
    }
}

const rect = new Rectangle(2, 4, "Red");
const area = rect.area();
console.log(area); // 2 x 4
const color = rect.paint();

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    area(){
        return Math.PI*this.radius*this.radius;
    }

    circumference(){
        return 2*Math.PI*this.radius;
    }

    color(){
        return this.color;
    }

}

const circle = new Circle(1, "Blue");
console.log(circle.area());
console.log(circle.circumference());
console.log(`Circle with color ${circle.color}`);
