const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "reporter": "mochawesome",
      "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp": "ddmmyyyy_HHMMss"
      }
  },
});
