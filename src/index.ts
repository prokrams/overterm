import { pos } from './utils/args.ts'
import output from './log/output.ts'
import setTimer from './render/timer.ts'

if (pos[0] === 'log') {
    output()
} else {
    setTimer()
}
