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

app.get('/add', async(req, res) =>{
    const ipfs = IPFS.create("http://127.0.0.1:5001")
    const { cid } = await ipfs.add('Networkpoll content')
    res.send({
            content_id: cid.toString()
        })
})

app.get('/fetch/:contentid', async(req, res) => {
    const ipfs = await IPFS.create("http://127.0.0.1:5001")
    const stream = ipfs.cat(req.params.contentid)
    const decoder = new TextDecoder()
    let data = ''

    for await (const chunk of stream) {
        data += decoder.decode(chunk, {stream: true})
    }
    res.send({
        cid: req.params.contentid,
        response: data
    })
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})