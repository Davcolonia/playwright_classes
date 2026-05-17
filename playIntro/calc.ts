interface calculator {
    add(a:number, b:number):number;
    sub(a:number, b:number):number;
    mult: (a:number, b:number) => number;
}

const calc: calculator ={
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mult: (a,b) => a*b
}