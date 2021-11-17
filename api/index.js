const express =  require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

let posts =  [
    {
        "id": 1,
        "post": "primer post hecho en mock",
        "user": "pepe"
    },
    {
        "id": 2,
        "post": "segundo post hecho en mock",
        "user": "pepo"
    },
    {
        "id": 3,
        "post": "tercer post hecho en mock",
        "user": "pepa"
    }
 ]



app.get('/api/posts', (req, res) =>{
 res.json(posts)
})

app.get('/api/posts/:id', (req, res) =>{
    const id = Number(req.params.id)
    const post = posts.find(post => post.id === id)
    if(post){
        res.json(post)
    }else{
        res.status(404).end()
    }
})

app.delete('/api/posts/:id', (req,res) => {
    const id = Number(req.params.id)
    posts = posts.filter(post => id !== post.id)
    res.status(204).end()
})

app.post('/api/posts', (req,res) => {
    const post = req.body
    const ids = posts.map(post => post.id)
    const maxId = Math.max(...ids)
    const newNote = {
        id: maxId++,
        post: post.post,
        user: post.user,
        date: new Date().toISOString()
    }
    posts = [...posts, newNote ]
    res.json(newNote)
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
