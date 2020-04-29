const { homedir } = require('os');
/**
 * Cleans file path to a format that fs can work with
 */
const cleanFilePath = (path) => {
    return path.replace('~', homedir());
};
module.exports = cleanFilePath;
//# sourceMappingURL=cleanFilePath.js.map