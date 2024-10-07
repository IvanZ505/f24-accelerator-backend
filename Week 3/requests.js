// Import Express
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, './pages/post.html'))
})

app.get('/posts', (req, res) => {
    res.send("You are one the post page!")
})

app.post('/post/form', (req, res) => {
    console.log(req)
    res.send('Post request made!')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})