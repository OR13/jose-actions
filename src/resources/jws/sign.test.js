
const util = require('./util')
it('can produce compact jws', async()=>{
    const header = { 'kid': 'did:example123#0', alg: 'ES256' }
    const payload = 'sha512-sFcuivsDZ99fY0TbvuRC6CDXB8r/ylafjJAMnbSF0y4EMM1/1DtQo40G2WKz1rBbyiz4SLAc3Wa6yZyC4XSGOQ=='
    const jwk = {
        "kty": "EC",
        "crv": "P-256",
        "alg": "ES256",
        "d": "SoJ4K2QzbSkJkSWEW-e7I11kn4mT5xUVvIq5rDqqUWU",
        "x": "SaGJIWK7l4PE9z97fY0_J5fX8Y971xtfrQDhnkAYERQ",
        "y": "HkEanI5mtHyEYLkEiYXwcRuxviTS5e3rgi0kAzJZWkU"
      }
    const jws = await util.sign({header, payload, jwk})
    console.log(jws)
})