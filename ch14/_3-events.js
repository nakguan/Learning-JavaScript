const EventEmitter = require("events").EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    const countdown = this;
    return new Promise(function(resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        setTimeout(function() {
          if (countdown.superstitious && i === 13)
            return reject(new Error("Oh my god"));
          countdown.emit("tick", i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000);
      }
    });
  }
}

function launch() {
  return new Promise((resolve, reject) => {
    console.log("Lift off!");
    setTimeout(function() {
      resolve("in orbit!");
    }, 2 * 1000);
  });
}

const c = new Countdown(5).on("tick", function(i) {
  if (i > 0) console.log(i + "...");
});

c.go()
  .then(launch)
  .then(msg => {
    console.log(msg);
  });
