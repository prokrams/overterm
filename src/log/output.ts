import type { Log } from './types.ts'

function renderLog(array: Log[]) {
    array.map(({time, task, success, date}) => {
        console.table(`\n ${time} \x1b[38;5;248m${date}\x1b[38;5;255m\n ${task}\n ${success ? '\x1b[38;5;10m' + success : '\x1b[38;5;9m' + success}\x1b[38;5;255m\n`)
    })
}

export default function output() {

    const date = new Date()

    const a: Log[] = [
        { time: "30:00", task: "timer 30minutes", success: true, date: date.toLocaleString()},
        { time: "08:00", task: "veeeery looo oooong mess  ageveee ery lo oooooong mes s a gevee eery l oooo ooong me sagevee eery looooooong me ssa geve e eery  l ooo ooo ong me ss age", success: true, date: date.toLocaleString()},
        { time: "02:30:00", task: "halflife3", success: false, date: date.toLocaleString() },
        { time: "08:00", task: "project", success: true, date: date.toLocaleString() },
        { time: "30:00", task: "great", success: true, date: date.toLocaleString() },
        { time: "30:00", task: "some project", success: true, date: date.toLocaleString() },
        { time: "30:00", task: "make ", success: true, date: date.toLocaleString() },
    ]
    const line = 5
    
    renderLog(a.slice(0, 5))
}