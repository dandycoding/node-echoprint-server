/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

var env = process.env.NODE_ENV || 'development'

exports.config = {
  agent_enabled: (env != 'development'),
  app_name : ['Echoprint Server ' + env],
  license_key : '30ffe0964a03b32ef7c72de7bd7e93c5bbd0aa28',
  logging : {
    level : 'info'
  }
};
