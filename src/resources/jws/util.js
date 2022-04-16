const jose  = require('jose');

const sign = async ({header, payload, jwk}) => {
    const jws = await new jose.CompactSign(
        new TextEncoder().encode(
            typeof payload === 'string' ? payload : JSON.stringify(payload)
        )
      )
        .setProtectedHeader(header)
        .sign(await jose.importJWK(jwk))

    return jws;
};


const verify = async ({jws, jwk}) => {
    const { payload, protectedHeader } = await jose.compactVerify(jws, await jose.importJWK(jwk))
    return { payload, protectedHeader };
};

module.exports = { sign , verify }