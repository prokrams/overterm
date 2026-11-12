import { getAllMiliseconds, renderConvertionTime } from './render/convertion.ts'
import question from './final/question.ts'
import alarm from './final/alarm.ts'
import { horizontalPaddings } from '../tools/horizontal-paddings.ts'
import terminalListener from './terminalListener.ts'

function startCountdown() {
    let pause: boolean = false
    let end = Date.now() + getAllMiliseconds()
    let stop!: () => void
    let freeze: number = end - Date.now()

    const done = new Promise<void>((resolve) => {
        const interval = setInterval(() => {
            
            console.clear()
            const left = pause ? freeze : end - Date.now()
            renderConvertionTime(Math.ceil(left / 1000))
            if (pause) horizontalPaddings('⏸ pause')
            if (!pause && left <= 0) finish()
        }, 200)

        function finish() {
            clearInterval(interval)
            resolve()
        }

        stop = finish
    })

    return {
        togglePause: () => { 
            if (pause) {
                end = freeze + Date.now()
                pause = false
            } else {
                freeze = end - Date.now()
                pause = true
            }
        },
        done,
        stop
    }

}

export default async function setCountdown() {
    const countdown = startCountdown()
    const unsubscriber = terminalListener(countdown.togglePause, countdown.stop)

    await countdown.done
    unsubscriber()
    alarm()
    question()
}