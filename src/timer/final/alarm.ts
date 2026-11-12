import { exec } from 'node:child_process'

export default function alarm() {
    exec('say "BIP BIP BIP"')
}