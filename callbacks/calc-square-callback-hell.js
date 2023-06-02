// This is an example of a callback hell

function calculateSquare(number, callback) {
  setTimeout(function () {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected"));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

// Wrongly invoking calculateSquare as if it were synchronous
// the engine will process these tasks without any delay at all
calculateSquare(1, function (error, result) {
  console.log(result);
});

calculateSquare(2, function (error, result) {
  console.log(result);
});

calculateSquare(3, function (error, result) {
  console.log(result);
});

// Correctly invoking calculateSquare function to
// print numbers sequentially respecting the
// 1 second delay between logs but causing callback hell
calculateSquare(1, function (error, result) {
  console.log(result);
  calculateSquare(2, function (error, result) {
    console.log(result);
    calculateSquare(3, function (error, result) {
      console.log(result);
      calculateSquare(4, function (error, result) {
        console.log(result);
        calculateSquare(5, function (error, result) {
          console.log(result);
          calculateSquare(6, function (error, result) {
            console.log(result);
          });
        });
      });
    });
  });
});
