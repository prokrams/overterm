import { getAllSeconds, renderConvertionTime, timeConverter } from './render/convertion.ts'
import question from './final/question.ts'
import alarm from './final/alarm.ts'

export default function setTimer() {
    let i = getAllSeconds()
    const countdown = setInterval(() => {
        if (i <= 0) {
            clearInterval(countdown)
        }
        console.clear()
        renderConvertionTime(i)
        if (i <= 0) {
            alarm()
            question()
        }
        i -= 1
    }, 1000)

    countdown
}