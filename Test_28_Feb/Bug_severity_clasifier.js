let frequency = "often";
let impact = "major";

if (frequency === "always" && impact === "blocker") {
    console.log("Severity :P0", "Frequency :" + frequency, "impact :" + impact);
}
else if (frequency === "always" && impact === "major" || frequency === "often" && impact === "blocker") {
    console.log("Severity :P1", "Frequency :" + frequency, "impact :" + impact);
}
else if (frequency === "always" && impact === "minor" || frequency === "often" && impact === "major" || frequency === "rarely" && impact === "blocker") {
    console.log("Severity :P2", "Frequency :" + frequency, "impact :" + impact);
}


else if (frequency === "often" && impact === "minor" || frequency === "rarely" && impact === "major") {
    console.log("Severity :P3", "Frequency :" + frequency, "impact :" + impact);
}


else if (frequency === "rarely" && impact === "minor") {
    console.log("Severity :P4", "Frequency :" + frequency, "impact :" + impact);
}