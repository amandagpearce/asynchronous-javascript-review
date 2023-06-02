// This function accepts a promise as an argument
function logToConsole(somePromise) {
  somePromise.then((value) => console.log(value));
}

// Create a promise and pass this promise to logToConsole function
const somePromise = new Promise((resolve, reject) => resolve("Hello"));
logToConsole(somePromise);

// If we pass a non-promise value to logToConsole function, it will throw an error
const value = "string";
logToConsole(value);

// Promise.resolve() will create a promise out of any given value, same for Promise.reject()
const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);

const rejectedPromise = Promise.reject(value);
const rejectedPromise2 = Promise.reject(new Error("some error"));
