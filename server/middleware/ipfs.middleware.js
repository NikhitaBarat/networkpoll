// modules
const IPFS  = require('ipfs')

// Add data to IPFS
const putDatatoIPFS = async () => {
    const node = await IPFS.create()
    const data = 'Hello, <.....>'
    // add data to IPFS - this can be a string, a buffer
    const results = node.add(data);
    
    for await ( const { cid } of results ) {
        return cid.toString()
    }
}

// Getting data from IPFS 
const getDatafromIPFS = async ({ contentId }) => {

    const node = await IPFS.create()
    const stream = node.cat(contentId)

    const decoder = new TextDecoder()
    let data = ``

    for await ( const chunk of stream ) {
        data += decoder.decode(chunk, { stream: true })
    }

    return data 
}

// IPNS resolve immutable data to mutable data
const updateIPFSfile = async () => {

}


module.exports = { putDatatoIPFS, getDatafromIPFS };