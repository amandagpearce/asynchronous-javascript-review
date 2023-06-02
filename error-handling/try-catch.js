// Example of how NOT to perform error handling with async tasks

function calculateSquare(number, callbackFn) {
  setTimeout(function () {
    // setTimeout resides in the task queue, by the time the error is found, the try catch will already have been executed
    if (typeof number !== "number") {
      throw new Error("Argument of type number is expected"); // will throw an uncaught error in the console
    }
    const result = number * number;
    callbackFn(result);
  }, 1000);
}

// Try catch can't be used with asynchronous functions since it resides in the call stack
try {
  calculateSquare("bad argument", function (result) {
    console.log(result);
  });
} catch (error) {
  console.log("Caught error: " + String(error)); // this will never be reached in this example
}
