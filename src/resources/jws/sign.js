
const core = require("@actions/core");
const util = require('./util');

const sign = async ({header, payload, jwk}) => {
    const jws = await util.sign({header, payload, jwk})
    core.setOutput("jws", jws);
};

module.exports = { sign };