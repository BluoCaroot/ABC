function formatDate(date) {
    // Define the formatting options for the date
    const options = { weekday: 'long', day: 'numeric', month: 'long' };

    // Create a new Date object using the input date
    // and format it as a string using the toLocaleDateString method
    return new Date(date).toLocaleDateString('en-US', options);
}


// Get the current date
const currentDate = new Date();

// Format the date
const formattedDate = formatDate(currentDate);

// Display the formatted date in the HTML element with id "main-container-title-h2"
document.getElementById('main-container-title-h2').appendChild(document.createTextNode(formattedDate));
