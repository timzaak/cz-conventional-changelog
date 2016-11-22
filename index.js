"format cjs";

var engine = require('./engine');

module.exports = engine({
  types: {
    "api add": {
      "description": "add new api"
    },
    "api change": {
      "description": "change api url or api response or api request param"
    },
    "api delete": {
      "description": "delete unused api"
    },
    "feat": {
      "description": "A new feature"
    },
    "fix": {
      "description": "A bug fix"
    },
    "refactor": {
      "description": "A code change that neither fixes a bug nor adds a feature"
    },
    "perf": {
      "description": "A code change that improves performance"
    },
    "test": {
      "description": "Adding missing tests or correcting existing tests"
    },
    "build": {
      "description": "Changes that affect the build system or external dependencies"
    },
    "ci": {
      "description": "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)"
    },
    "chore": {
      "description": "Other changes that don't modify src or test files"
    },
    "revert": {
      "description": "Reverts a previous commit"
    }
  }
});
