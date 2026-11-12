import { pos } from './utils/args.ts'
import output from './logs/output.ts'
import setCountdown from './timer/countdown.ts'

if (pos[0] === 'log') {
    output()
} else {
    await setCountdown()
}