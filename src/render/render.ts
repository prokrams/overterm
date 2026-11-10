import { horizontalPaddings } from '../tools/horizontal-paddings.ts'
import { argsTask } from '../utils/args.ts'
import font from './font.ts'

export default function render(time: string[]) {
    let result: string[] = []
    const objFont = font
    
    const symbols: string[][] = time.map((_, index) => {
        return objFont[time[index]].split('\n')
    })

    for (let i = 0; i < symbols[0].length; i++) {
        const rows = symbols.map((columns) => {
            return columns[i]
        })
        result.push(rows.join(''))
    }
    horizontalPaddings(result)
    horizontalPaddings(argsTask)
}