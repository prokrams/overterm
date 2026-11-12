import readline from 'readline'
import { getAllMiliseconds, renderConvertionTime } from './render/convertion.ts'
import question from './final/question.ts'
import alarm from './final/alarm.ts'
import close from '../utils/close.ts'
import { horizontalPaddings } from '../tools/horizontal-paddings.ts'

export function countdown() {

    let pause: boolean = false
    let end = Date.now() + getAllMiliseconds()
    let remainder: number | undefined = undefined

    const interval = setInterval(() => {
        console.clear()
        if (pause) {
            if (remainder) renderConvertionTime(Math.ceil((remainder / 1000)))
            horizontalPaddings('⏸ pause')
        } else {
            renderConvertionTime(Math.ceil((end - Date.now()) / 1000))
            if (end <= Date.now()) {
                clearInterval(interval)
                process.stdin.removeListener('data', handleKeypress)
                process.stdin.pause()
                alarm()
                question()
            }
        }
    }, 200)

    readline.emitKeypressEvents(process.stdin)
    
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true)
    }

    const handleKeypress = (_: string | undefined, key: readline.Key) => {
        if (key.sequence) close(key.sequence)
        if (key.sequence === ' ' && !pause) {
            pause = true
            remainder = end - Date.now()
        } else if (key.sequence === ' ' && pause) {
            if (remainder) end = Date.now() + remainder
            pause = false
        } else if (key.sequence === '\r') {
            end = Date.now()
        } else if (key.sequence === 'q') {
            process.exit(0)
        }
    }
    
    process.stdin.on('keypress', handleKeypress)
}

export default function setTimer() {
    countdown()
}