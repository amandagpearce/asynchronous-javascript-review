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

// To handle rejections we could either:
// 1- Throw an error
// 2- Return a rejected promise

// Will print the message "Something went wrong".
calculateSquare(1)
  .then((value) => {
    console.log(value);
    throw new Error("Something went wrong");
  })
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log("error happened: " + reason);
    }
  );

// If the error gets moved to the 2nd then, it will not be caught
// and the uncaught error message will appear on the console
calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then(
    (value) => {
      console.log(value);
      throw new Error("Something went wrong");
    },
    (reason) => {
      console.log("error happened: " + reason);
    }
  );

// In order to catch the error, it's necessary to extract the
// onRejected function from the 2nd then method, and create a 3rd then method.
calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then((value) => {
    console.log(value);
    throw new Error("Something went wrong");
  })
  .then(undefined, (reason) => {
    console.log("error happened: " + reason);
  });

// Previous example can be perfected with the usage of the catch method
calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then((value) => {
    console.log(value);
    throw new Error("Something went wrong");
  })
  .catch((reason) => {
    console.log("error happened: " + reason);
  });

// Also, instead of throwing an error we could return a rejected promise
calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      return reject("Something went wrong");
    });
  })
  .catch((reason) => {
    console.log("error happened: " + reason);
  });
