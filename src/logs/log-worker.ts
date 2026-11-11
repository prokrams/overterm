import fs from 'node:fs'
import path from 'node:path'
import type { Log } from './types.ts'
import { fileURLToPath } from 'node:url'

const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../assets/logs.json')

const data = fs.readFileSync(filePath, 'utf-8')
const parsedData = JSON.parse(data)

export const logWorker = {
    writeLog: (obj: Log) => {
        parsedData.logs.push(obj)
        fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2))
    },
    getLogs: () => {
        return parsedData.logs
    }
}