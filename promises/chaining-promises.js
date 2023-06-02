function calculateSquare(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number !== "number") {
        return reject(new Error("Argument of type number is expected"));
      }
      const result = number * number;
      resolve(result);
    }, 1000);
  });
  return promise;
}

calculateSquare(1)
  .then((value) => {
    console.log(value); // 1
  })
  .then((value2) => {
    console.log(value2); // undefined
  });

calculateSquare(1)
  .then((value) => {
    console.log(value); // 1
    return 25;
  })
  .then((value2) => {
    console.log(value2); // 25, the value returned by the previous function
  });

calculateSquare(1)
  .then((value) => {
    console.log(value); // 1
    throw new Error("something went wrong!");
  })
  .then(
    (value2) => {
      console.log(value2); // "Could not fulfill request. Error: something went wrong!"
    },
    (reason) => {
      // in order to handle the error, we need to add onRejected function as a 2nd argument
      console.log("Could not fulfill request. " + reason);
    }
  );

calculateSquare(1)
  .then((value) => {
    console.log(value); // 1
    return calculateSquare(2);
  })
  .then(
    (value2) => {
      console.log(value2); // 4
    },
    (reason) => {
      console.log("error happened: " + reason);
    }
  );

calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare("string"); // passing wrong argument
  })
  .then(
    (value2) => {
      console.log(value2);
    },
    (reason) => {
      console.log("Error occurred: " + reason); // error message will be printed
    }
  );
