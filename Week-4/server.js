const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const tasks = [
    {
        id: 1,
        text: 'Fetch all the tasks',
        status: 0
    },
    {
        id: 2,
        text: 'Create a new task',
        status: 0
    }
]

getTasks: async (state) => {
    state.tasks = await fetch('/tasks').then(res => res.json())
    return state
}

app.get('/tasks', (req, res) => {
    res.send(tasks)
}) 

app.listen(3500, () => {
    console.log('app server running on port', 3500)
})