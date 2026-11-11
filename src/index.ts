import { pos } from './utils/args.ts'
import output from './logs/output.ts'
import setTimer from './timer/timer.ts'

if (pos[0] === 'log') {
    output()
} else {
    setTimer()
}