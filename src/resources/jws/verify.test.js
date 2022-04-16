const jws = "eyJraWQiOiJkaWQ6d2ViOm9yMTMuZ2l0aHViLmlvOnNpZ25vciMwIiwiYWxnIjoiRVMyNTYifQ.MjE5NGUwMDM5NmZiMGQyZTU1NjE1ODdhYTcyMDJmN2Y5N2QwMjVjMg.TdB89cRY6ToeTQuVj7mj8-PbPrF7nDMIjzruJYLcclr2qSP2Mxi2Vl6dUjSu2FeR8zLP_3_lMF9GdwApE4OUSQ";

const util = require('./util')

it('can verify a compact jws', async()=>{
    const jwk = {
        "kty": "EC",
        "crv": "P-256",
        "alg": "ES256",
        "x": "zqGQPY1FKYdsWc4KvpBO0n4qUN7_WC9-Xpm5NIKp1Rg",
        "y": "2rcpPq3naeJwLdVTiUgDRSxYlYjZvCZ4JFg4hgQOvfQ"
    }
    const v = await util.verify({ jws, jwk })
    expect(v.payload).toBeDefined()
})