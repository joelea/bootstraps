{expect, assert} = require 'chai'

describe 'in a context', ->
  it 'should be able to run a test', ->
    expect(1 + 2).to.eql(3)