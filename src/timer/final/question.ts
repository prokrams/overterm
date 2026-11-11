import readline from 'node:readline'
import { horizontalPaddings } from '../../tools/horizontal-paddings.ts'
import { getAllSeconds, timeConverter } from '../render/convertion.ts'
import now from '../../utils/date.ts'
import { argsTask } from '../../utils/args.ts'
import { logWorker } from '../../logs/log-worker.ts'


export default function question() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    console.log('')

    if (argsTask) {
        console.log('work')
        rl.question(`Session success? (y/n): `, answer => {
            let flag: boolean | undefined = undefined
            if (answer === 'y' || answer === 'yes') {
                flag = true
            } else {
                flag = false
            }
            horizontalPaddings(`${flag ? 'Step by step...' : 'It will be finished next time'}\n`)
            logWorker.writeLog({
                'time': timeConverter(getAllSeconds()).map(digit => digit === 'colon' ? ':' : digit).join(''), 
                "task": argsTask, 
                "success": flag, 
                "date": now 
            })
            rl.close()
        })
    }
}