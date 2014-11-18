var Benchmark;

Benchmark = (function() {
  function Benchmark(iterations) {
    this.iterations = iterations != null ? iterations : 10;
    this.padding = 10;
    this.results = {};
  }

  Benchmark.prototype.report = function(name, callable, params) {
    var end, fn, iterations, start;
    fn = callable.toFunction();
    iterations = this.iterations;
    if (typeof fn !== 'function') {
      alert("" + callable + " is not a callable function");
      return;
    }
    start = performance.now();
    while (iterations--) {
      fn.apply(window, [params]);
    }
    end = performance.now();
    if (name.length > this.padding) {
      this.padding = name.length;
    }
    return this.results[name] = "" + (parseFloat(end - start).toFixed(4)) + "ms";
  };

  Benchmark.prototype.setIterations = function(iterations) {
    this.iterations = iterations;
  };

  Benchmark.prototype.bench = function() {
    var name, padding, value, _ref, _results;
    padding = this.padding + 3;
    console.log("" + ('IDENTIFIER'.padRight(padding)) + " EXECUTION TIME");
    _ref = this.results;
    _results = [];
    for (name in _ref) {
      value = _ref[name];
      _results.push(console.log("" + (name.padRight(padding)) + " " + value));
    }
    return _results;
  };

  return Benchmark;

})();

String.prototype.toFunction = function() {
  var callback, name, scope, _i, _len;
  callback = this.split('.');
  scope = window;
  for (_i = 0, _len = callback.length; _i < _len; _i++) {
    name = callback[_i];
    if (scope[name] == null) {
      return this.toString();
    }
    scope = scope[name];
  }
  return scope;
};

String.prototype.padRight = function(total, character) {
  var max, text;
  if (character == null) {
    character = ' ';
  }
  text = this;
  max = total - text.length / character.length;
  while (max--) {
    text += character;
  }
  return text;
};
