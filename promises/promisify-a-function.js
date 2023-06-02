// Ordinary capitalize function
function capitalize(text) {
  return text[0].toUpperCase() + text.substring(1);
}

// Promisified capitalize function
function capitalize(text) {
  return new Promise(function (resolve, reject) {
    if (typeof text !== "string") {
      // only rejecting without a "return", would not stop execution here
      return reject(new Error("Argument must be a string"));
    }

    const result = text[0].toUpperCase() + text.substring(1);

    return resolve(result);
  });
}

// However, it doesn't make much sense to promisify regular functions,
// makes more sense to promisify regular callback functions.
