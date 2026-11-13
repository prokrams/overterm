import { parseArgs } from 'node:util'

export const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
        help: {
            type: 'boolean'
        },
        version: {
            type: 'boolean',
            short: 'v'
        },
        config: {
            type: 'boolean'
        },
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

const { seconds, minutes, hours, task } = values

export const argsSeconds = Number(seconds)
export const argsMinutes = Number(minutes)
export const argsHours = Number(hours)
export const argsTask = task