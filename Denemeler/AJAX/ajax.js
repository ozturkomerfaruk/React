//Object Methods

//new XMLHttpRequest()
//abort()                   ---> Cancels the current request
//getAllResponseHeaders     ---> Return
//getResponseHeader()       ---> return spesicic
//open(Method, url, async, user, psw)
//send()
//send(string)
//setRequestHeader

//Object Properties

//onload    
//onreadystatechange
//readyState
//responseText
//responseXML
//status
//statusText

//readyState
/**
 * 0: request not initialized
 * 1: server connection established
 * 2: request received
 * 3: processing request
 * 4: request finished and response is ready
 */

// status
/**
 * 200: "OK"
 * 403: "Forbidden"
 * 404: "Page not found"
 */


function loadDoc() {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            obj = JSON.parse(xhttp.responseText)
            document.getElementById("status").innerHTML = obj["users"][0]["name"]
        }
        console.log(this.status)
    };
    xhttp.open("GET", "deneme.json", true);
    xhttp.send()
}