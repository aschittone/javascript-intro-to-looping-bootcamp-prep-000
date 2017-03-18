function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    if ( i === 1) {
      array.push("I am " + i + " strange loop.");
    } else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array;
}


function whileLoop(n) {
  let count = n;
  while (count > 0) {
    console.log(--count);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue());
  return array;
}
