const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This promise is resolved after 4 seconds");
  }, 4000);
}
);

delayPromise.then((message) => console.log(message)); 
