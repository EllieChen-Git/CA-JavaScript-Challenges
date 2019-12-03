const express = require('express')
const _ = require('underscore')
const bodyParser = require('body-parser')
const app = express()
// Our list of students
const students = ['Jane', 'Jack', 'John', 'Jan', 'Jake', 'Jill', 'Jone', 'June']

app.use(bodyParser.json())

/* Landing page */
app.get('/', (req, res) => {
  // Use underscore to get two random students
  const randomStudents = _.sample(students, 2);
  res.send(
    `<h1>Lunchify</h1>
    <p>Matched: ${randomStudents[0]} with ${randomStudents[1]}</p>`
  )
})

/* API endpoints */
app.get('/api/students', (req, res) => {
  console.log('Getting a list of students')
  res.json(students)
})

app.post('/api/students', (req, res) => {
  const newStudent = req.body.student
  console.log('Adding a new student:' newStudent)
  students.push(newStudent)
  res.json(newStudent)
})


app.listen(3000, () => console.log('Server running at http://localhost:3000/'))
