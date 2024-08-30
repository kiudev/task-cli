import fs from 'node:fs/promises'
import pkg from 'picocolors'
import { readTasks, tasksPath } from './read-tasks.js'

const tasks = await readTasks()

const taskId = parseInt(process.argv[2], 10)
const newDescription = process.argv[3]

const taskIndex = tasks.findIndex(task => task.id === taskId)

tasks[taskIndex].description = newDescription
tasks[taskIndex].updatedAt = new Date().toLocaleString()

if (!taskId) {
  console.log(pkg.bgRed('Error: Task ID is required'))
  process.exit(1)
} else if (!newDescription) {
  console.log(pkg.bgRed('Error: Task description is required'))
  process.exit(1)
}

try {
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2))
  console.log(pkg.blue(`Task updated successfully (ID: ${taskId})`))
} catch (err) {
  console.error(pkg.bgRed(`There was an error updating the task ${err}`))
}
