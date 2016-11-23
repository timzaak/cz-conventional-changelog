"format cjs";

var engine = require('./engine');

module.exports = engine({
  types: {
    "API ADD": {
      "description": "add new api"
    },
    "API CHANEG": {
      "description": "change api url or api response or api request param"
    },
    "API DELETE": {
      "description": "delete unused api"
    },
    "FEATURE": {
      "description": "A new feature"
    },
    "FIX": {
      "description": "A bug fix"
    },
    "REFACTOR": {
      "description": "A code change that neither fixes a bug nor adds a feature"
    },
    "PERF": {
      "description": "A code change that improves performance"
    },
    "TEST": {
      "description": "Adding missing tests or correcting existing tests"
    },
    "BUILD": {
      "description": "Changes that affect the build system or external dependencies"
    },
    "CI": {
      "description": "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)"
    },
    "CHORE": {
      "description": "Other changes that don't modify src or test files"
    },
    "REVERT": {
      "description": "Reverts a previous commit"
    }
  }
});
