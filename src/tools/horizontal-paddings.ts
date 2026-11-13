let columns = process.stdout.columns

process.stdout.on('resize', () => {
    columns = process.stdout.columns
    console.log(columns)
})

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
        const needColumns = withText / 2 >= 0 ? withText / 2 : 0
        if (needColumns === 0) {
            process.stdout.write(`${item}`)
            return
        }
        process.stdout.write(`${' '.repeat(needColumns)}${item}${' '.repeat(needColumns)}\n`)
    })
}