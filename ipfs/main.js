import express from 'express';
import * as IPFS from 'ipfs-http-client';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('server running')
})

app.get('/add/:content', async (req, res) => {
    let start = Date.now()
    const ipfs = IPFS.create("http://127.0.0.1:5001")
    const { cid } = await ipfs.add(req.params.content)
    let timeTaken = Date.now() - start
    res.send({
        time_taken: timeTaken,
        content: req.params.content,
        content_id: cid.toString()
    })
})

app.get('/fetch/:contentid', async (req, res) => {
    let start = Date.now()
    const ipfs = await IPFS.create("http://127.0.0.1:5001")
    let stream = NaN
    // for (let i = 0; i < 100; i++){
    stream = ipfs.cat(req.params.contentid)
    // }
    const decoder = new TextDecoder()
    let data = ''
    for await (const chunk of stream) {
        data += decoder.decode(chunk, { stream: true })
    }
    let timeTaken = Date.now() - start
    res.send({
        time_taken: timeTaken,
        cid: req.params.contentid,
        response: data
    })

})

app.get('/getall', async (req, res) => {
    let Hashes = [
        "QmVfHwgmonUEXZjZcm5ZUj7yrekcsb2oh7EjTmtqJwuHGF",
        "QmZxb9Ay45PJpFQNVZg58iaF52dHidsuGFK5YjCfhCqoxK",
        "QmRAYRWn1gBnu5utDNtvp5VGVTnSQMVJ37MRzfUSpGpoGz",
        "QmV7jC8KfdfS8iRoHaHixb6U4afhNMY21dUnExTHGnQ84x",
        "QmUX1ggsuumP9Mmf5CmuXnrTnUzPTMpaEMySd6UH5hrHkz",
        "QmXZDw6cdHcdMkqrcqqvAMfxxiVeYqCwuev8x8CTNZ9iXt",
    ]
    let start = Date.now()
    const ipfs = await IPFS.create("http://127.0.0.1:5001")
    let stream = NaN
    let data = ''
    const decoder = new TextDecoder()

    for (let i = 0; i < Hashes.length; i++) {
        data = ''
        stream = ipfs.cat(Hashes[i])
        for await (var chunk of stream) {
            data += decoder.decode(chunk, { stream: true })
        }
    }
    let timeTaken = Date.now() - start
    res.send({
        time_taken: timeTaken,
        cid: Hashes,
        response: data
    })
})

app.get('/create/:begin/:end', async(req, res) =>{
    let start = Date.now()
    const ipfs = IPFS.create("http://127.0.0.1:5001")
    let result = []

    for (let i = req.params.begin; i < req.params.end; i++) {
        var voter = {
            voter_id: `R227${i}8YM2${i}`,
            private_key: `FAjrakldsdglasjjxmm9askl${i}83M2${i}s99070dh088^g&987sa99`,
            block_address: `0xbc9c68410${i}8d5b71302dsafbe74e8c9232${i}bb44590dcbce32d${i}67aa8ff1aeb0d53`
        }
        result.push(voter)
    }
    var addedResult = await ipfs.addAll(result,{ pin: true, wrapWithDirectory: true});
    
    var cids = addedResult.map(value => value.hash)

    let timeTaken = Date.now() - start
    res.send({
        time_taken: timeTaken,
        content_id: cids,
        content: addedResult,
    })
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})