function formatDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Get the current date
const currentDate = new Date();

// Format the date
const formattedDate = formatDate(currentDate);

// Display the formatted date in the HTML element with id "dateContainer"
document.getElementById('main-container-title-h2').appendChild(document.createTextNode(formattedDate));
