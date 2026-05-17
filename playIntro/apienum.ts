enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELTE = "DELTE"
}

function sendRequest(method:HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " -> 200 OK");
}

sendRequest(HTTPMethod.GET, "/api/users")
sendRequest(HTTPMethod.POST, "/api/users")
sendRequest(HTTPMethod.DELTE, "/api/users/1")
