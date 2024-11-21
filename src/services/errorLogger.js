const fs = require('fs');
const path = require('path');

exports.logError = (error) => {
    const logPath = path.join(__dirname, '../../logs/errors.log');
    const errorMessage = `[${new Date().toISOString()}] ${error.message}\n`;

    fs.appendFileSync(logPath, errorMessage);
    console.error(error.message);
};
