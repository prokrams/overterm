import readline from 'node:readline'
import type { Log } from './types.ts'
import { horizontalPaddings } from '../tools/horizontal-paddings.ts'
import { logWorker } from './log-worker.ts'

const logs = logWorker.getLogs()

function renderLog(array: Log[]) {
    console.clear()
    horizontalPaddings('↑↓ navigate • ctrl+c quit')
    horizontalPaddings(`timers found ${logs.length}`)
    array.map(({ time, task, success, date }) => {
        console.table(`\n ${time} \x1b[38;5;248m${date}\x1b[38;5;255m\n ${task}\n ${success ? '\x1b[38;5;10m' + success : '\x1b[38;5;9m' + success}\x1b[38;5;255m\n`)
    })
}

function close(sequence: string) {
    if (sequence === '\x03') {
        process.exit()
    }
}

export default function output() {

    const points = { from: logs.length - 6, to: logs.length }

    renderLog(logs.slice(points.from, points.to))

    readline.emitKeypressEvents(process.stdin)

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true)
    }

    process.stdin.on('keypress', (_, key) => {
        close(key.sequence)
        if (key.code === '[A') {
            if (points.from === 0) return
            console.log(points)
            points.from -= 1
            points.to -= 1
            console.log(points)
            renderLog(logs.slice(points.from, points.to))
        } else if (key.code === '[B') {
            if (points.to === logs.length) return
            points.from += 1
            points.to += 1
            console.log(points)
            renderLog(logs.slice(points.from, points.to))
        }

    })
}