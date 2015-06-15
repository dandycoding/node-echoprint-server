/**
 * Development configuration variables
 */

module.exports = {
 // Port that the web server will bind to
  web_port: 8080,

  // Database settings
  solr_hostname: 'localhost',
  solr_port: 8983,
  solr_max_boolean_terms: 1024,
  solr_corename: 'echoprint',

  // Set this to a system username to drop root privileges
  run_as_user: 'steve',

  // Filename to log to
  log_path: __dirname + '/logs/echoprint.log',
  // Log level. Valid values are debug, info, warn, error
  log_level: 'debug',

  // Minimum number of codes that must be matched to consider a fingerprint
  // match valid
  code_threshold: 10,

  // Supported version of echoprint-codegen codes
  codever: '4.12'
};
