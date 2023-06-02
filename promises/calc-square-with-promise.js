function calculateSquare(number) {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof number !== "number") {
        return reject(new Error("Argument of type number is expected"));
      }

      const result = number * number;

      resolve(result);
    }, 1000);
  });

  return myPromise;
}

// Invoking with correct argument
// since calculateSquare returns a promise, we can chain a then
calculateSquare(2).then(
  (value) => {
    // onFulfilled fn
    console.log("Success: " + value);
  },
  (error) => {
    // onRejected fn won't be called
    console.log("Error: " + error);
  }
);

// Invoking with incorrect argument
calculateSquare("string").then(
  (value) => {
    // onFulfilled fn won't be called
    console.log("Success: " + value);
  },
  (error) => {
    console.log("Error: " + error);
  }
);
