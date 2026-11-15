export default function close(sequence: string, custom?: () => void) {
    if (sequence === '\x03' || sequence === 'q') {
        if (custom) custom()
        process.exit(0)
    }
}