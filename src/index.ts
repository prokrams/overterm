import { exec } from 'node:child_process'
import { getAllSeconds, timeConverter } from './render/convertion.ts'

function setTimer() {
    let i = getAllSeconds()
    const countdown = setInterval(() => {
        if (i <= 1) {
            clearInterval(countdown)
        }
        console.clear()
        timeConverter(i)
        if (i <= 1) {
            exec('say "BIP BIP"')
        }
        i -= 1
    }, 1000)

    countdown
}

setTimer()