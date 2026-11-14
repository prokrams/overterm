import { exec } from 'node:child_process'
import { argsTask } from '../utils/args.ts'

export default function alarm() {
    exec(`say "BIP BIP BIP ${argsTask}"`)
}