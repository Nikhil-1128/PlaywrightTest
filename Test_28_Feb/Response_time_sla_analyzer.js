let responseTime = [120, 230, 450, 510, 180, 620]
let i = 0
var sla_breach = 0;
while (i < responseTime.length) {
    var min, max;

    if (responseTime[i] > 500) {
        sla_breach++;
    }

    min = responseTime[0];
    max = responseTime[0];

    if (min > responseTime[i]) {
        min = responseTime[i];
    } else if (max < responseTime[i]) {
        max = responseTime[i];
    }

    let sum = 0;
    sum = sum + responseTime[i];

    var avg = sum / responseTime.length
    i++;

}



console.log("min:" + min, "max: " + max, "avg: " + avg, "sla_breach: " + sla_breach);