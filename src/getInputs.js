const core = require("@actions/core");

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");
  return {
    resource,
    action,
  };
};

module.exports = { getInputs };