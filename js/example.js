var table = prompt("enter a number between 1-10: ");    //user propmt added
var operator = 'multiplication'; // changed to multiplication
var i = 1;                 // Set counter to 1
var msg = '';              // Message

table = parseInt(table); //converting user input to integer

 if (operator === 'multiplication'); //changed operator to multiplication
 {
  // changed to a for loop so there was no "else" extra code
  for (; i < 11 ;) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}



// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;