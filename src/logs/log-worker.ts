import fs from 'node:fs'
import type { Log } from './types.ts'
import paths from '../utils/paths.ts'
import validateData from '../utils/validate-data.ts'

const filePath = paths.getLogs
const data = validateData(filePath, { logs: [] })

const parsedData = JSON.parse(data)

export const logWorker = {
    write: (obj: Log) => {
        parsedData.logs.push(obj)
        fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2))
    },
    get: () => { return parsedData.logs }
}