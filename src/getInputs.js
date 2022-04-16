const core = require("@actions/core");

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");

  const header = core.getInput("header");
  const payload = core.getInput("payload");
  const jwk = core.getInput("jwk");
  return {
    resource,
    action,
    header,
    payload,
    jwk
  };
};

module.exports = { getInputs };