import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import type { Log } from './types.ts'

export default function getLogs(): Log[] {

    const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data/logs.json')
    
    const data = fs.readFileSync(filePath, 'utf-8')
    const parsedDate = JSON.parse(data)

    return parsedDate.logs
}