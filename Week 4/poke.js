// Import Express
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))


const getPoke = async (pokemon) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(res.ok){
        const data = await res.json()
        return data
        // console.log(data.name)
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/post.html'))
})

app.get('/poke/:name', async (req, res)=> {
    console.log(req)
    var poke = await getPoke(req.params.name)
    console.log(poke)
    res.send(poke)
})

app.post('/post/form', (req, res) => {
    // Fill out this method!
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})