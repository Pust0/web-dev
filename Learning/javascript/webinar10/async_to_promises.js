function someAsyncTask(callback) {
  console.log("Beginning of task");
  setTimeout(function () {
    console.log("End of task");
    callback();
  }, 3000);
}

let someTaskPromise = function () {
  //Promisification -> converting async to promise
  return new Promise(function (resolve, reject) {
    someAsyncTask(resolve);
  });
};

someTaskPromise().then(function () {
  console.log("After Task is complete");
});
