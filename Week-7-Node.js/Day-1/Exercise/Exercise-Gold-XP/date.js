function getTimeLeftUntilNewYear() {
    // Get the current date
    var now = new Date();
  
    // Set the target date to January 1st of the next year
    var targetYear = now.getFullYear() + 1;
    var targetDate = new Date(targetYear, 0, 1);
  
    // Calculate the time difference in milliseconds
    var timeDiff = targetDate - now;
  
    // Calculate the remaining days, hours, minutes, and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    return `The 1st of January is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
  }
  
  // Usage example
  var timeLeft = getTimeLeftUntilNewYear();
  console.log(timeLeft);

 
  

  //---------------------------

  function calculateMinutesLived(birthdate) {
    // Get the current date and time
    var now = new Date();
  
    // Convert the birthdate string to a Date object
    var birthdateObj = new Date(birthdate);
  
    // Calculate the time difference in milliseconds
    var timeDiff = now - birthdateObj;
  
    // Calculate the number of minutes lived
    var minutesLived = Math.floor(timeDiff / (1000 * 60));
  
    // Return the number of minutes lived
    return minutesLived;
  }
//--------------------------

function getNextHoliday() {
    // Get today's date
    var today = new Date();
  
    // Hardcoded holiday date (example: December 25th)
    var holidayDate = new Date(today.getFullYear(), 11, 25);
  
    // Calculate the time difference in milliseconds
    var timeDiff = holidayDate - today;
  
    // Calculate the remaining days, hours, minutes, and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    // Hardcoded holiday name (example: Christmas)
    var holidayName = 'Christmas';
  
    // Return today's date, time left, and holiday name as a formatted string
    return `Today's date is ${today.toDateString()}. The next holiday is ${holidayName}, which is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
  }
  

module.exports  = {
    getTimeYear:getTimeLeftUntilNewYear,
    calMinLiv:calculateMinutesLived,
    getNext:getNextHoliday
}
