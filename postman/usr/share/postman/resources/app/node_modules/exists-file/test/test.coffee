existFile = require '..'
should    = require 'should'

describe 'exists file ::', ->

  context 'sync ::', ->
    it 'when file exists', ->
      existFile('./README.md').should.be.equal true

    it 'file doesnt exist', ->
      existFile('./lol').should.be.equal false

    it 'when filename is false', ->
      existFile(false).should.be.equal false

    it 'when filename is true', ->
      existFile(true).should.be.equal false

    it 'when filename is object', ->
      existFile({}).should.be.equal false

    it 'when filename is number', ->
      existFile(12).should.be.equal false

  context 'async ::', ->
    it 'when file exists', (done) ->
      existFile './README.md', (err, exists) ->
        exists.should.be.equal true
        done()

    it 'when file doesnt exist', (done) ->
      existFile './lol', (err, exists) ->
        exists.should.be.equal false
        done()

    it 'when filename is false', (done) ->
      existFile false, (err, exists) ->
        exists.should.be.equal false
        done()

    it 'when filename is true', (done) ->
      existFile true, (err, exists) ->
        exists.should.be.equal false
        done()

    it 'when filename is object', (done) ->
      existFile {}, (err, exists) ->
        exists.should.be.equal false
        done()

    it 'when filename is number', (done) ->
      existFile 19, (err, exists) ->
        exists.should.be.equal false
        done()
