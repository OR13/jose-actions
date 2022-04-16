const core = require("@actions/core");


const getObjectOrString = (arg) => {
  try {
    return JSON.parse(arg);
  } catch(e) {
    return arg;
  }
}

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");

  const header = getObjectOrString(core.getInput("header"));
  const payload = getObjectOrString(core.getInput("payload"));
  const jwk = getObjectOrString(core.getInput("jwk"));

  
  return {
    resource,
    action,
    header,
    payload,
    jwk
  };
};

module.exports = { getInputs };