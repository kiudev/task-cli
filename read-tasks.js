import fs from 'node:fs/promises'
import path from 'node:path'

export const tasksPath = path.join(process.cwd(), 'tasks.json')

export async function readTasks () {
  try {
    const taskData = await fs.readFile(tasksPath, 'utf8')
    return JSON.parse(taskData)
  } catch (err) {
    return []
  }
}
