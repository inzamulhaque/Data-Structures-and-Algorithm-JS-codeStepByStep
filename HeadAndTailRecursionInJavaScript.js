// head trcursion

function head(x) {
  console.warn(x);
  if (x > 0) {
    head(x - 1);
  }
}

head(5);

// tail trcursion

function tail(x) {
  if (x > 0) {
    tail(x - 1);
  }
  console.warn(x);
}

tail(5);
