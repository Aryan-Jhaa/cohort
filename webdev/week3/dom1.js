// Updating DOM using JS 

function callback() {
    document.querySelectorAll("h4")[1].innerHTML = "Changed after 5 secs"
}

setTimeout(callback, 5000); // calls the callback function every 1 sec.
