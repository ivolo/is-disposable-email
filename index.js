
var disposable = require('disposable-email-domains');

/**
 * Expose `isDisposableEmail`.
 */

module.exports = isDisposableEmail;

/**
 * Create a domain map for faster lookups.
 */

var domains = {};
disposable.forEach(function (domain) { domains[domain] = true; });

/**
 * Determine whether an email is disposable.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isDisposableEmail (email) {
  var domain = email.split('@')[1].toLowerCase();
  return domain in domains;
}