export default function close(sequence: string) {
    if (sequence === '\x03') {
        process.exit()
    }
}