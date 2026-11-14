import { exec } from 'node:child_process'
import { argsTask } from '../utils/args.ts'
import configWorker from '../config/config-worker.ts'


export default function alarm() {
    const config = configWorker()

    exec(`say "BIP BIP BIP ${config.macos_bell_say_task ? argsTask : ''}"`)
    
    process.stdout.write('\x07')
}