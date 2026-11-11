import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Log } from './types.ts'

export default function writeLog(obj: Log) {

    const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data/logs.json')

    const data = fs.readFileSync(filePath, 'utf-8')
    const parsedDate = JSON.parse(data)

    parsedDate.logs.push(obj)

    fs.writeFileSync(filePath, JSON.stringify(parsedDate, null, 2))
}