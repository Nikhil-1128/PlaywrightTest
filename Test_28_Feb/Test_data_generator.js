
const status1 = "Active";
const status2 = "InActive";
const role = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 0; i < 8; i++) {
    var userId = "USR-000" + (i + 1);
    var userName = "TestUser_" + (i + 1);
    var emailID = "testuser" + (i + 1) + "@testingacademy.com";
    if ((i + 1) % 3 === 0) {
        var statusval = status2;
    }
    else
        var statusval = status1;




    console.log(userId + "|" + userName + "|" + emailID + "|" + role[i % role.length] + "|" + statusval);
}