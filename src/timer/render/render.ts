import { horizontalPaddings } from '../../tools/horizontal-paddings.ts'
import { argsTask } from '../../utils/args.ts'
import font from '../../assets/font.ts'
import configWorker from '../../config/config-worker.ts'

function loadConfig() {
    return configWorker()
}

export default function render(time: string[]) {
    const result: string[] = []
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
    loadConfig().hint_in_timer && horizontalPaddings('space pause • enter end • q quit')
    horizontalPaddings(result)
    horizontalPaddings(argsTask)
}