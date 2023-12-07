function updateDateTime() {
    var currentDate = new Date();
    var datetimeElement = document.getElementById('dateTime');
    datetimeElement.innerHTML = 'Current Date and Time: ' + currentDate.toLocaleString();
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to set the initial date and time
updateDateTime();