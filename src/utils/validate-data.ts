import fs from 'node:fs'
import path from 'node:path'
import type { Config } from '../config/config-worker.ts'
import type { Logs } from '../logs/types.ts'

type TemplateObj = Config | Logs

export default function validateData(filePath: string, templateObj: TemplateObj) {
    const dirFilePath = path.dirname(filePath)
    let validData

    try {
        validData = fs.readFileSync(filePath, 'utf-8')
    } catch (err) {
        if (typeof err === 'object' && err !== null && 'code' in err)
            if (err.code === 'ENOENT') {
                fs.mkdirSync(dirFilePath, { recursive: true })
                fs.writeFileSync(filePath, JSON.stringify(templateObj, null, 2))
                return validateData(filePath, templateObj)
            }
        console.error('[VALIDATE_DATE] ERROR:', err)
        process.exit(1)
    }

    return validData as string
}