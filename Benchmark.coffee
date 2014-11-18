class Benchmark
  constructor: (@iterations = 10) ->
    @padding = 10
    @results = {}

  report: (name, callable, params) ->
    fn = callable.toFunction()
    iterations = @iterations

    unless typeof fn is 'function'
      alert "#{callable} is not a callable function"
      return

    start = performance.now()
    fn.apply window, [params] while iterations--
    end = performance.now()

    @padding = name.length if name.length > @padding
    @results[name] = "#{parseFloat(end - start).toFixed 4}ms"

  setIterations: (@iterations) ->

  bench: ->
    padding = @padding + 3
    console.log "#{'IDENTIFIER'.padRight padding} EXECUTION TIME"
    console.log "#{name.padRight padding} #{value}" for name, value of @results

String::toFunction = ->
  callback = @.split '.'
  scope = window
  for name in callback
    return @.toString() if not scope[name]?
    scope = scope[name]
  scope

String::padRight = (total, character = ' ') ->
  text = @
  max = total - text.length / character.length
  text += character while max--
  text

String::padLeft = (total, character = ' ') ->
  text = @
  max = total - text.length / character.length
  text = character + text while max--
  text
