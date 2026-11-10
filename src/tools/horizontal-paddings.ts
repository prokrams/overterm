const columns = process.stdout.columns

function splitString(text: string) {
    if (text.length < columns) return [text]
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

    return [first, seconds]
}

function checkType(text: string | string[]) {
    if (typeof text === 'string') return splitString(text)
    return text
}

export function horizontalPaddings(text: string | string[]) {
    const refinedText = checkType(text)
    console.log('')
    refinedText.forEach(item => {
        const withText = columns - item.length
        const needColumns = withText / 2
        console.log(`${' '.repeat(needColumns)}${item}${' '.repeat(needColumns)}`)
    })
}