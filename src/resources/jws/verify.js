
const core = require("@actions/core");
const util = require('./util');

const verify = async ({ jws, jwk }) => {
    const v = await util.verify({ jws, jwk })
    core.setOutput("verified_payload", v.payload);
    core.setOutput("verified_header", v.protectedHeader);
};

module.exports = { verify };