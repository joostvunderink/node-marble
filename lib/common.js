'use strict';

let status = {
  // new: the job has been created and is awaiting processing.
  new    : 'new',
  // working: the processing of this job has started.
  working: 'working',
  // ok: all steps have been processed without errors.
  ok   : 'ok',
  // error: at least one step has an error.
  error  : 'error',
};

let collectionPrefix = 'marble';

function setCollectionPrefix(prefix) {
  collectionPrefix = prefix;
}

function getCollectionName(name) {
  return collectionPrefix + '_' + name;
}

let nf = function() {}; // null function
let logger = {
  error: nf,
  warn: nf,
  info: nf,
  debug: nf,
  trace: nf,
};

function setLogger(l) {
  logger = l;
}

function getLogger() {
  return logger;
}

module.exports = {
  status: status,

  setLogger: setLogger,
  getLogger: getLogger,
  logger: logger,

  getCollectionName  : getCollectionName,
  setCollectionPrefix: setCollectionPrefix,
};

