let MAX_ATTEMPTS = 1

do {

    let sucesspercentage = Math.random();
    let sucessCount = 0;

    if (sucesspercentage > 0.6) {
        console.log("Attempt " + MAX_ATTEMPTS, "SUCCESS (Response 200 OK) API call PASSED after " + MAX_ATTEMPTS + " attempt(s)");

    } else { console.log("Attempt " + MAX_ATTEMPTS, "FAILED(Timeout / Error)"); }

    MAX_ATTEMPTS++;

}
while (MAX_ATTEMPTS <= 5)