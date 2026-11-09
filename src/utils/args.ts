import { parseArgs } from 'node:util'

const { values } = parseArgs({
    options: {
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
        message: {
            type: 'string',
            short: 'm',
            default: ''
        }
    }
})

const { seconds, minutes, hours, message } = values

export const argsSeconds = Number(seconds)
export const argsMinutes = Number(minutes)
export const argsHours = Number(hours)
export const argsMessage = message