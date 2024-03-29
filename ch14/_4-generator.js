const fs = require("fs");

function nfcall(f, ...args) {
  return new Promise((resolve, reject) => {
    f.call(null, ...args, (err, ...args) => {
      if (err) return reject(err);
      resolve(args.length < 2 ? args[0] : args);
    });
  });
}
const ptimeout = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

const grun = g => {
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        settimeout(iterate, 0, x.value);
      }
    }
  })();
};

function* theFutureIsNow() {
  const dataA = yield nfcall(fs.readFile, "a.txt");
  const dataB = yield nfcall(fs.readFile, "b.txt");
  const dataC = yield nfcall(fs.readFile, "c.txt");

  yield ptimeout(60 * 1000);
  yield nfcall(fs.writeFile, "d.txt", dataA + dataB + dataC);
}

grun(theFutureIsNow);
