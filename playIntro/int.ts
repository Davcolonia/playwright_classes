import test = require("playwright/test");

interface testcase {
    id: number,
    name: string,
    status: string,
    duration: number
}

let test1: testcase ={
    id: 400,
    name: "jonytest",
    status: "pass",
    duration: 144
};

console.log("TC-" + test1.id + ": "+ test1.name + "->"+test1.status);



interface APIresponse {
readonly statusCode: number,
body: string, 
headers?: object, 
responseTime?: number
}

let response: APIresponse = {
statusCode: 200,
body: '{"user": "admin"}'
};

console.log("Status: "+ response.statusCode);
console.log("Body: "+ response.body);
console.log("headers: "+ response.headers);