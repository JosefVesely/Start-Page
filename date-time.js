
function date_time() {
    var now = new Date();

    // Date
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();

    // Time
    var time = now.getHours() + ":";

    if (now.getMinutes() < 10)
        time += "0";
    time += now.getMinutes()

    // Change HTML
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;

    setTimeout("date_time()", 1000);
}