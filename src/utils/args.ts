import { parseArgs } from 'node:util'
import { horizontalPaddings } from '../tools/horizontal-paddings.ts'

function getArgs() {
    try {
        const { values, positionals } = parseArgs({
            allowPositionals: true,
            strict: true,
            options: {
                help: {
                    type: 'boolean',
                    short: 'h'
                },
                version: {
                    type: 'boolean',
                    short: 'v'
                },
                config: {
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
                    short: 'H',
                    default: '0'
                },
                task: {
                    type: 'string',
                    short: 't',
                    default: ''
                }
            }
        })
        return {values, positionals}
    } catch (err) {
        if (err instanceof Error) process.stdout.write(`use -h or --help\n${err.message}`)
        process.exit(1)
    }
}

export const values = getArgs()!.values
export const positionals = getArgs()!.positionals

const { seconds, minutes, hours, task } = values

function validateNumber(arg: keyof typeof values, value: unknown) {
    if (!Number.isNaN(Number(value)) && Number(value) >= 0) return Number(value)
    horizontalPaddings(`${arg} must be a number >= 0`)
    process.exit(1)
}

export const argsSeconds = validateNumber('seconds', seconds)
export const argsMinutes = validateNumber('minutes', minutes)
export const argsHours = validateNumber('hours', hours)
export const argsTask = task