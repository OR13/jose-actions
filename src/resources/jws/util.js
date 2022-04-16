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

module.exports = { sign }