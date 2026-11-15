import { execFile } from 'node:child_process'
import { argsTask } from '../utils/args.ts'
import configWorker from '../config/config-worker.ts'


export default function alarm() {
    const config = configWorker()

    if (process.platform === 'darwin' && config.macos_bell_say_task) {
        execFile('say', ['BEEP BEEP BEEP', argsTask && argsTask], (err) => {
            if (err) {
                console.log('[ALARM] ERROR:', err)
                process.exit(1)
            }
        })
    }
    
    if (config.bell) process.stdout.write('\x07')
}