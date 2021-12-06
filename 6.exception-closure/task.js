//1 Форматтер чисел
function parseCount(x){
    

    const parsed = Number.parseInt(x, 10);

    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    
    return parsed;
}

function validateCount(x){

    try{
        const y = parseCount(x);
        return y;
    } catch (e) {
        return e;  
    }
}   

//2 Треугольник

class Triangle {
 
    constructor(a, b, c) {
        if ((a+b > c) && (a+c >b) && (b+c > a) ) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    

    getPerimeter (){

        if(this.a == 0 || this.b == 0 || this.c == 0 ) {
            return "Ошибка! Треугольник не существует";
        }

        let perimetr = this.a + this.b + this.c;
        
        return perimetr;
    }

    getArea (){

        if(this.a == 0 || this.b == 0 || this.c == 0 ) {
            return "Ошибка! Треугольник не существует";
        }

        let p = 0.5*this.getPerimeter();
        let s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p-this.c));
    
        return Math.round(s*1000)/1000;
    }

    
}


function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);        
    // } catch(e) {
    //     return ;
    }
}