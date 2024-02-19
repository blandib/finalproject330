/*export function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // retrieve data from localstorage
  export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }*/
  // store the quiz data in localStorage as a string
localStorage.setItem("quizData", JSON.stringify(quizData));