// Code your solutions in this file
function writeCards(names, occasion) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
}

// Function to count down from a number to 0
function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log (i);
  }
}