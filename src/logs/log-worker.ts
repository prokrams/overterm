import fs from 'node:fs'
import type { Log } from './types.ts'
import paths from '../utils/paths.ts'
import path from 'node:path'

const filePath = paths.getLogs
const dirFilePath = path.dirname(filePath)
let validData: string

function validateData() {
    try {
        validData = fs.readFileSync(filePath, 'utf-8')
    } catch (err) {
        if (typeof err === 'object' && err !== null && 'code' in err)
        if (err.code === 'ENOENT') {
            const emptyObj = {"logs": []}
            fs.mkdirSync(dirFilePath, {recursive: true})
            fs.writeFileSync(filePath, JSON.stringify(emptyObj, null, 2))
            return validateData()
        }
    }
    return validData
}

const parsedData = JSON.parse(validateData())

export const logWorker = {
    writeLog: (obj: Log) => {
        parsedData.logs.push(obj)
        fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2))
    },
    getLogs: () => {
        return parsedData.logs
    }
}