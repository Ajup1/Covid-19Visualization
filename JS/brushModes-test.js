var vows = require('vows'),
    assert = require('assert'),
    events = require('events'),
    load = require('./load'),
    suite = vows.describe('brushModes');

function d3Parcoords() {
  var promise = new(events.EventEmitter);
  load(function(d3) {
    promise.emit('success', d3.parcoords());
  });
  return promise;
}

suite.addBatch({
  'd3.parcoords': {
    'has by default': {
       topic: d3Parcoords(),
       'four brush modes': function(pc) {
         assert.strictEqual(pc.brushModes().length, 4);
       },
       'the brush mode "2D-strums"': function(pc) {
         assert.notStrictEqual(pc.brushModes().indexOf("2D-strums"), -1);
       },
    },
  }
});

suite.export(module);
