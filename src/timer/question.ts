import readline from 'node:readline'
import { horizontalPaddings } from '../tools/horizontal-paddings.ts'
import { getAllSeconds, timeConverter } from './render/convertion.ts'
import { argsTask } from '../utils/args.ts'
import { localeDate } from '../utils/date.ts'
import logWorker from '../logs/log-worker.ts'

export default function question() {
    const { write } = logWorker()

    console.log('')
    if (argsTask) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(`Session success? (y/n): `, answer => {
            let flag: boolean | undefined = undefined
            if (answer === 'y' || answer === 'yes') {
                flag = true
            } else {
                flag = false
            }
            horizontalPaddings(`${flag ? 'Step by step...' : 'It will be finished next time'}\n`)
            write({
                'time': timeConverter(getAllSeconds()).map(digit => digit === 'colon' ? ':' : digit).join(''),
                "task": argsTask,
                "success": flag,
                "date": localeDate()
            })
            rl.close()
            process.exit(0)
        })
    }
}