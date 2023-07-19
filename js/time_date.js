function time() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (minutes < 10) { 
        minutes = "0" + minutes;
    }

    var time = `${hours}:${minutes}`;

    document.getElementById("time").innerHTML = time;
    
    setTimeout(time, 1000);
}

function get_suffix(number) {
    var j = number % 10;
    var k = number % 100;
    
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
}

function date(){
	var now = new Date();
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var day = now.getDate()
    var suffix = get_suffix(day);
    var day_name = days[now.getDay()-1];
    var month = months[now.getMonth()];
    var year = now.getFullYear();

    var date = `${day_name}, ${month} ${day}${suffix}, ${year}`;

	document.getElementById("date").innerHTML = date;

	setTimeout(date, 1000);
}