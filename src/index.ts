import render from './render/render.ts'
import { exec } from 'node:child_process'
import { getAllSeconds, timeConverter } from './render/convertion.ts'
import { argsMessage } from './utils/args.ts'

function setTimer(message: string) {
    let i = getAllSeconds()
    const countdown = setInterval(() => {
        if (i <= 1) {
            clearInterval(countdown)
        }
        console.clear()
        timeConverter(i)
        if (i <= 1) {
            if (message) console.log(message)
            exec('say "BIP BIP TIME IS OVER HAHAHA"')
        }
        i -= 1
    }, 1000)

    countdown
}

setTimer(argsMessage)