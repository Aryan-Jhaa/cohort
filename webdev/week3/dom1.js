function callback() {
    document.querySelectorAll("h4")[1].innerHTML = "Changed after 3 secs"
}

setTimeout(callback, 3000); // calls the callback function every 1 sec.
