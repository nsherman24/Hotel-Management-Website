// List of Hotels
const hotels = [
    { name: "The Plaza Hotel", location: "New York City, USA", amenities: "Free WiFi, Pool", price:"$499" },
    { name: "The US Grant", location: "San Diego, USA", amenities: "Free parking, Gym", price:"$543"  },
    { name: "ARIA Casino & Resort", location: "Las Vegas, USA", amenities: "Pool, Spa, Gym", price:"$210" }
];

// This function is called when the user clicks the 'Search' button.
function searchHotels() {
    const input = document.getElementById('search-box').value.toLowerCase();
    displayResults(filterData(input));
    const filterDropdown = document.getElementById('filter-dropdown');
    if (filterDropdown.style.display === 'block') {
        filterDropdown.style.display = 'none';
    }
}

// This function filters the Data based on the search term and selected amenities.
function filterData(input) {
    const filters = document.querySelectorAll('input[name="amenities"]:checked',);
    let filteredAmenities = Array.from(filters).map(filter => filter.value);
    return hotels.filter(hotel => {
        const amenitiesMatch = filteredAmenities.every(amenity =>
            hotel.amenities.includes(amenity));
        return (hotel.name.toLowerCase().includes(input) ||
            hotel.location.toLowerCase().includes(input)) && amenitiesMatch;
    });
}

// This function updates the webpage with the search results.
function displayResults(filteredData) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; 

    if (filteredData.length > 0) {
        resultsContainer.style.display = 'block'; 

        filteredData.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.className = 'result-item'; 
            hotelDiv.innerHTML = `<h2>${hotel.name} ${hotel.price}</h2><p>${hotel.location} - Amenities: ${hotel.amenities}</p> `;
            resultsContainer.appendChild(hotelDiv);
        });
    } else {
        resultsContainer.style.display = 'none';
    }
    
}

// This function toggles the display of the filter dropdown.
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function(event) {
    const resultsContainer = document.getElementById('results-container');
    const searchContainer = document.getElementById('search-container');

    // If the clicked element is not inside the search container, hide the results
    if (!searchContainer.contains(event.target)) {
        resultsContainer.style.display = 'none';
    }
});