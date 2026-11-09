import { timeConverter } from './convertion.ts'
import font from './font.ts'


export default function render(time: string[]) {    
    const objFont = font
    
    const symbols: string[][] = time.map((_, index) => {
        return objFont[time[index]].split('\n')
    })

    for (let i = 0; i < symbols[0].length; i++) {
        const rows = symbols.map((columns) => {
            return columns[i]
        })
        console.log(rows.join(''))
    }

    console.log(time)
}