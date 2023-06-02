// Making 2 HTTP requests one after another
// using XMLHttpRequest

// It would be even harder to read after adding more and more HTTP requests
// In order for it to be more readable, we should use Promises instead of callbacks in this scenario

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://dog.ceo/api/breeds/list/all");

xhr.onreadystatechange = function () {
  // verifying it has reached the final "DONE" state
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(xhr.responseText), // handling the response
      breeds = response && Object.keys(response.message),
      firstBreedInTheList = breeds && breeds[0];

    const xhr2 = new XMLHttpRequest(); // starts making a new request after the first one finishes
    xhr2.open(
      "GET",
      `https://dog.ceo/api/breed/${firstBreedInTheList}/images/random` // getting the image of the dog breed
    );

    xhr2.onreadystatechange = function () {
      if (xhr2.readyState === XMLHttpRequest.DONE) {
        // second request went through
        console.log(xhr2.responseText);
      }
    };

    xhr2.send();
  }
};

xhr.send();
