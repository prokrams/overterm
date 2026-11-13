#!/usr/bin/env node

import { pos } from './utils/args.ts'
import output from './logs/output.ts'
import setCountdown from './timer/countdown.ts'

if (pos[0] === 'log') {
    output()
} else if (pos[0] === 'config') {
    console.log('config here: ')
    process.stdout.write('\x07')
} else {
    await setCountdown()
}