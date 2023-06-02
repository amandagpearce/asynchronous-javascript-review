// Declared 3 functions to simulate a Car Dealer API
function askFirstDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(8000), 3000); // first dealer offers 8000 for the car, within 3 seconds
  });
}

// askSecondDealer returns a promise that becomes rejected after 5 seconds
function askSecondDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Not a suitable car"), 5000);
  });
}

function askThirdDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10000), 8000); // third dealer offers 10000 for the car, within 8 seconds
  });
}

// Get the answer from all dealers and pick the biggest offer:
// Promise.all will invoke these 3 functions in parallel
Promise.allSettled([
  askFirstDealer(),
  askSecondDealer(),
  askThirdDealer(),
]).then((prices) => {
  console.log("prices", prices);

  let bestOffer = Math.max(...prices);

  console.log(`I'll sell the car for ${bestOffer}`);
});
