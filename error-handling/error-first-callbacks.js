// Example of how to CORRECTLY perform error handling with async tasks using the Error First pattern

function calculateSquare(number, callback) {
  // making the function asynchronous by calling setTimeout
  setTimeout(function () {
    if (typeof number !== "number") {
      // instead of throwing a new error, the "error first" pattern stablishes
      //  that we should pass the error as an argument to the callback function
      callback(new Error("Argument of type number is expected"));

      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

calculateSquare("bad argument", function (error, result) {
  if (!!error) {
    console.log("Caught error: " + String(error));
    return;
  }

  console.log("result", result);
});
