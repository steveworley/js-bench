JS Benchmark - The easy way.
=====
This is designed to make benchmarking changes in functions easy.

### Installation

```
git clone git@github.com:steveworley/js-bench.git
```

### Usage

To run the benchmark you will need to include the JS in your markup and create a new instance of the `Benchmark` 

``` javascript
<script type="text/javascript" src="Benchmark.min.js"></script>

<script type="text/javascript">
  var b = new Benchmark();
</script>
```

After you have created an instance you need to add functions on which to `report` on.

``` javascript
<script type="text/javascript" src="Benchmark.min.js"></script>

<script type="text/javascript">
  var bar = function() {
    var strings = ['this', 'is', 'string'], string;
    for (var i = 0; i < strings.length; i++) {
      string += strings[i] + ' ';
    }
    return string;
  }

  var baz = function() {
    var strings = ['this', 'is', 'string'];
    return strings.join(' ');
  }

  var b = new Benchmark();

  b.report('foo', 'bar');
  b.report('baz', 'baz');
  b.bench();
</script>
```
Expected output:
```
# Browser console.
IDENTIFIER    EXECUTION TIME
foo           0.9660ms
baz           0.2200ms 
```

### Set the iterations

If you need to perform more iterations than the default (10), you can use `setIterations()` to set the value or you can create a benchmark object by passing in the iteration number.

``` javascript
<script type="text/javascript" src="Benchmark.min.js"></script>

<script type="text/javascript">
  var a = new Benchmark(100);
  var b = new Benchmark();
  b.setIterations(1000);
</script>
```