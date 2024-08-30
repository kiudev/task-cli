import fs from 'node:fs/promises'
import pkg from 'picocolors'
import { readTasks, tasksPath } from './read-tasks.js'

const tasks = await readTasks()

const newTask = {
  id: tasks.length + 1,
  description: process.argv[2],
  status: 'in-progress',
  createdAt: new Date().toLocaleString(),
  updatedAt: new Date().toLocaleString()
}

if (!newTask.description) {
  console.log(pkg.bgRed('Error: Task description is required'))
  process.exit(1)
}

tasks.push(newTask)

try {
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2))
  console.log(pkg.green(`Task added successfully (ID: ${newTask.id})`))
} catch (err) {
  console.error(pkg.bgRed(`There was an error adding the task ${err}`))
}
