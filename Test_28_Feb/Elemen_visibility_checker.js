let isPresent = false;
let isDisplayed = false;
let isEnabled = false;



if (isPresent === true && isDisplayed === true && isEnabled === true) {
    statusVal = "READY";
}

else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    statusVal = "DISABLED";
}
else if (isPresent === true && isDisplayed === false && isEnabled === false) {
    statusVal = "HIDDEN";
}
else if (isPresent === false && isDisplayed === false && isEnabled === false) {
    statusVal = "NOT FOUND";
}
else
    statusVal = "Unknown";

let severity = statusVal === "READY" ? "OK (All Good)"
    : statusVal === "HIDDEN" ? "WARNING(Not displayed or no enabled)"
        : statusVal === "NOT FOUND" ? "CRITICAL (Not present)"
            : "unknown status";

console.log("status :" + statusVal, severity);
