function parent() {
  var innerVariable = "Go to your room!";
  console.log(innerVariable)
  return function childe() {
    var innerVariable = "**sneaks out the bedroom window**";
    return innerVariable;
  }
}

var outerScope = childe;

var innerScope = outerScope();

innerScope();
