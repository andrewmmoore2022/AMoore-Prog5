document.addEventListener('DOMContentLoaded', function () {
    // Make an Ajax request to get the JSON data
    fetch('cit5students.json')
        .then(response => response.json())
        .then(data => {
            // Save the data in a variable
            window.studentData = data;
        });
});

// Function to display data by major
function displayByMajor(major) {
    // Filter the data based on the selected major
    const filteredData = window.studentData.filter(student => student.major === major);

    // Use Handlebars to render the data in a table
    const source = document.getElementById('table-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ students: filteredData });

    // Display the rendered HTML in the data-container
    document.getElementById('data-container').innerHTML = html;
}
