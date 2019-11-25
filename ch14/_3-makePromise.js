function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i > 0) console.log(i + "...");
        else resolve(console.log("Go!"));
      }, seconds - i * 1000);
    }
  });
}

countdown(10).then(
  function() {
    console.log("countdown completed successfully");
  },
  function(err) {
    console.log("countodwn experienced an error: " + err.message);
  }
);
