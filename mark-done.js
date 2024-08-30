import fs from 'node:fs/promises'
import pkg from 'picocolors'
import { readTasks, tasksPath } from './read-tasks.js'

const tasks = await readTasks()

const taskId = parseInt(process.argv[2], 10)

const taskIndex = tasks.findIndex(task => task.id === taskId)


if (taskIndex === -1) {
  console.log(pkg.bgRed(`Task with ID ${taskId} not found`))
  process.exit(1)
}

tasks[taskIndex].status = 'done'
tasks[taskIndex].updatedAt = new Date().toLocaleString()

try {
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2))
  console.log(pkg.cyan(`Task marked as done (ID: ${taskId})`))
} catch (err) {
  console.error(
    pkg.bgRed(`There was an error marking the task as in-progress ${err}`)
  )
}
