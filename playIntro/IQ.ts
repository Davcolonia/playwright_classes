
interface TestHook{
    (testName: string): void;
}

let beforeHook: TestHook = function(testName: string): void {
    console.log("[BEFORE] Setting up "+ testName);
}

let afterHook: TestHook = function(testName: string): void {
    console.log("[AFTER] Setting up "+ testName);
}

beforeHook("total tests");


let statusCode:number[] = [200,201,404,500];

let testSuits:string[] = ["smoke", "safety", "regression"];

console.log("Status codes:", statusCode);
console.log("Suites:", testSuits );

let testResult: {name: string; status: string; duration: number} = {

    name: "login Test",  
    status: "Pass",
    duration: 1200
};

console.log(testResult.name + "->" + testResult.status + " ("+testResult.duration+ "ms)");

afterHook("total tests");

