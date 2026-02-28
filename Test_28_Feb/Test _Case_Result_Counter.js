let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let passCount = 0;
let failCount = 0;
let skipCount = 0;
let totalCount = testResults.length;

for (let i = 0; i < testResults.length; i++) {

    if (testResults[i] === "pass") {
        passCount++
    } else if (testResults[i] === "fail") {
        failCount++

    } else if (testResults[i] === "skip") {
        skipCount++
    }

}

let passPercentage = (passCount / totalCount) * 100;

//console.log(passPercentage)



function verdict() {
    if (passCount === totalCount) {
        return "Verdict: ready for release";
    } else if (failCount <= 2) {
        return "Verdict: failures ";
    } else if (failCount > 2) {
        return "Verdict: block release";
    }
}

console.log("TotalTests: " + totalCount, "PassTests:" + passCount, "FailedTests: " + failCount, "skipTests: " + skipCount, passPercentage, verdict());
