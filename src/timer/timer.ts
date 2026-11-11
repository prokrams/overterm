import { exec } from 'node:child_process'
import { horizontalPaddings } from '../tools/horizontal-paddings.ts'
import rl from '../utils/input.ts'
import { getAllSeconds, timeConverter } from './render/convertion.ts'
import writeLog from '../logs/write-log.ts'
import { argsTask } from '../utils/args.ts'
import now from '../utils/date.ts'

export default function setTimer() {
    let i = getAllSeconds()
    const countdown = setInterval(() => {
        if (i <= 0) {
            clearInterval(countdown)
        }
        console.clear()
        timeConverter(i)
        if (i <= 0) {
            exec('say "BIP BIP BIP BIP BIP"')
            console.log('')
            rl.question(`Session success? (y/n): `, answer => {
                let flag: boolean | undefined = undefined
                if (answer === 'y' || answer === 'yes') {
                    flag = true
                } else {
                    flag = false
                }
                horizontalPaddings(`${flag ? 'Step by step...' : 'It will be finished next time'}\n`)
                writeLog({ 'time': getAllSeconds().toString(), "task": argsTask, "success": flag, "date": now })
                rl.close()
            })
        }
        i -= 1
    }, 1000)

    countdown
}