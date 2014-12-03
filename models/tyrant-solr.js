var fs = require('fs');
var kyoto = require('kyoto');
var solr = require('solr-client');
var temp = require('temp');
var log = require('winston');
var config = require('../config');
var log = require('winston');

exports.fpQuery = fpQuery;
exports.getTrack = getTrack;
exports.getTrackByName = getTrackByName;
exports.getArtist = getArtist;
exports.getArtistByName = getArtistByName;
exports.addTrack = addTrack;
exports.addArtist = addArtist;
exports.updateTrack = updateTrack;
exports.updateArtist = updateArtist;
exports.disconnect = disconnect;

var cabinet = kyoto.open('/tmp/echoprint.kch', 'a+');
var client = solr.createClient();

function fpQuery(fp, rows, callback) {
  var fpCodesStr = fp.codes.join(',');

  // query solr for code matches here
}

function getTrack(trackID, callback) {
  // read record from kyoto
}

function getArtist(artistID, callback) {
  log.debug('Artist support is not implemented. getArtist is a noop.');
  return callback(null, null);
}

function addTrack(artistID, fp, callback) {
  // write record to kyoto
}

function addArtist(artist, callback) {
  log.debug('Artist support is not implemented. addArtist is a noop.');
  return callback(null, null);
}

function getArtistByName(artist, callback) {
  log.debug('Artist support is not implemented. getArtistByName is a noop.');
  return callback(null, null);
}

function getTrackByName(track, artistID, callback) {
  log.debug('Artist support is not implemented. getTrackByName is a noop.');
  return callback(null, null);
}

function updateTrack(trackID, name, artistID, callback) {
  // update record in kyoto
}

function disconnect(callback) {
  cabinet.closeSync();
  // also close solr here
}

