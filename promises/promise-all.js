// Declared 3 functions to simulate a Car Dealer API
function askFirstDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(8000), 3000); // first dealer offers 8000 for the car, within 3 seconds
  });
}
function askSecondDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(12000), 5000); // second dealer offers 12000 for the car, within 5 seconds
  });
}
function askThirdDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10000), 8000); // third dealer offers 10000 for the car, within 8 seconds
  });
}

// Get the answer from all dealers and pick the biggest offer:
// Promise.all will invoke these 3 functions in parallel
Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
  (prices) => {
    console.log(prices);
    let bestOffer = Math.max(...prices);
    console.log(`I'll sell the car for ${bestOffer}`);
  }
);
