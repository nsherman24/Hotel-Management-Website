function validateForm() {
  var currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
  
  // Validate check-in date
  var checkInDate = new Date(document.getElementById("check-in-date").value);
  if (checkInDate < currentDate) {
    alert("Check-in date cannot be in the past");
    return false;
  }

  // Validate check-out date
  var checkOutDate = new Date(document.getElementById("check-out-date").value);
  if (checkOutDate < currentDate) {
    alert("Check-out date cannot be in the past");
    return false;
  }
  // Validate check-out date
  var checkInDate = new Date(document.getElementById("check-in-date").value);
  var checkOutDate = new Date(document.getElementById("check-out-date").value);
  if (checkOutDate <= checkInDate) {
    alert("Check-out date must be after check-in date");
    return false;
  }

  // Validate email format
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate phone number format
  var phone = document.getElementById("phone").value;
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (10 digits)");
    return false;
  }

  // Validate number of guests
  var adults = parseInt(document.getElementById("adults").value);
  var children = parseInt(document.getElementById("children").value);
  if (adults + children === 0) {
    alert("Please select at least one guest");
    return false;
  }

  // Form is valid
  return true;
}
