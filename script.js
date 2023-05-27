function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ampm = hour >= 12 ? "PM" : "AM";
  
    // Format the hour in 12-hour format
    hour = hour % 12 || 12;
  
    // Update the hour, minute, second, and AM/PM elements
    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minute;
    document.getElementById("second").textContent = second;
    document.getElementById("ampm").textContent = ampm;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  