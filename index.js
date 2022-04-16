const core = require("@actions/core");

const { getInputs, resources } = require("./src");

async function run() {
  try {
    const inputs = getInputs();
    if (resources[inputs.resource]) {
      await resources[inputs.resource][inputs.action](inputs)
      
    } else {
      console.warn(JSON.stringify(inputs, null, 2));
      throw new Error("Unsupported resource or action.");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();