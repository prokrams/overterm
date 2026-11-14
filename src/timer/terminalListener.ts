import readline from 'readline'
import close from '../utils/close.ts'

export default function terminalListener(togglePause: () => void, stop: () => void): () => void {

    function unsubscriber() {
        process.stdin.pause()
        if (process.stdin.isTTY) process.stdin.setRawMode(false)
        process.stdin.removeListener('keypress', handleKeypress)
    }

    readline.emitKeypressEvents(process.stdin)
    
    if (process.stdin.isTTY) process.stdin.setRawMode(true)

    const handleKeypress = (_: string | undefined, key: readline.Key) => {
        if (key.sequence) close(key.sequence, unsubscriber)
        if (key.sequence === ' ') {
            togglePause()
        } else if (key.sequence === '\r') {
            stop()
        }
    }

    process.stdin.on('keypress', handleKeypress)

    return unsubscriber
}