#!/usr/bin/env node

import { positionals, values } from './utils/args.ts'
import output from './logs/output.ts'
import setCountdown from './timer/countdown.ts'
import help from './help/help.ts'
import version from './version/version.ts'
import paths from './utils/paths.ts'

if (positionals[0] === 'log') {
    output()
} else if (values.config) {
    console.log(`
config here: ${paths.getConfig}
logs here: ${paths.getLogs}
        `)
    process.stdout.write('\x07')
} else if (values.version) {
    version()
} else if (values.help) {
    help()
} else {
    await setCountdown()
}