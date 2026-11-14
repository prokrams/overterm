import { exec } from 'node:child_process'
import { argsTask } from '../utils/args.ts'
import configWorker from '../config/config-worker.ts'

const config = configWorker.get()

export default function alarm() {
    exec(`say "BIP BIP BIP ${config.macos_bell_say_task ? argsTask : ''}"`)
    
    process.stdout.write('\x07')
}