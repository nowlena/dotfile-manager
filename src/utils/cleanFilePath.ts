const { homedir } = require('os');

/**
 * Cleans file path to a format that fs can work with
 */
const cleanFilePath = (path: string) => {
  return path.replace('~', homedir());
}

module.exports = cleanFilePath;
