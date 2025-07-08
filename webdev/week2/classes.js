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
        console.log(`Paint with color ${this.color}`);
        
    }
}

const rect = new Rectangle(2, 4, "Red");
const area = rect.area();
console.log(area); // 2 x 4
const color = rect.paint();