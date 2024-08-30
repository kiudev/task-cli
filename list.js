import { readTasks } from './read-tasks.js'

const tasks = await readTasks()

const status = process.argv[2]

let filteredTask

switch (status) {
  case 'done':
    filteredTask = tasks.filter(task => task.status === 'done')
    filteredTask.forEach(task => {
      console.log(
        `ID: ${task.id}\nDescription: ${task.description}\nStatus: ${task.status}\nCreated At: ${task.createdAt}\n`
      )
    })
    break
  case 'in-progress':
    filteredTask = tasks.filter(task => task.status === 'in-progress')
    filteredTask.forEach(task => {
      console.log(
        `ID: ${task.id}\nDescription: ${task.description}\nStatus: ${task.status}\nCreated At: ${task.createdAt}\n`
      )
    })
    break
  default:
    tasks.forEach(task => {
      console.log(
        `ID: ${task.id}\nDescription: ${task.description}\nStatus: ${task.status}\nCreated At: ${task.createdAt}\n`
      )
    })
}
