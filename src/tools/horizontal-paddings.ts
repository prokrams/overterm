const columns = process.stdout.columns

function splitString(text: string) {
    if (text.length < columns) return { size: text.length, refinedText: [text] }
    let middle = Math.floor(text.length / 2)
    for (let i = 0; i < text.length; i++) {
        if (text[middle + i] === ' ') {
            middle = middle + i
            break
        }
    }
    const first = text.slice(0, middle)
    let seconds = text.slice(middle)
    seconds[0] === ' ' ? seconds = seconds.trimStart() : seconds

    return { refinedText: [first, seconds] }
}

export function horizontalPaddings(text: string) {
    const { refinedText } = splitString(text)
    console.log('')
    refinedText.forEach(item => {
        const withText = columns - item.length
        const needColumns = withText / 2
        console.log(`${' '.repeat(needColumns)}${item}${' '.repeat(needColumns)}`)
    })
}