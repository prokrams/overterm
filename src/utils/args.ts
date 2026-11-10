import { parseArgs } from 'node:util'

const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
        log: {
            type: 'boolean'
        },
        seconds: {
            type: 'string',
            short: 's',
            default: '0'
        },
        minutes: {
            type: 'string',
            short: 'm',
            default: '0'
        },
        hours: {
            type: 'string',
            short: 'h',
            default: '0'
        },
        task: {
            type: 'string',
            short: 't',
            default: ''
        }
    }
})

export const pos = positionals
const { log, seconds, minutes, hours, task } = values

export const argsLog = log
export const argsSeconds = Number(seconds)
export const argsMinutes = Number(minutes)
export const argsHours = Number(hours)
export const argsTask = task