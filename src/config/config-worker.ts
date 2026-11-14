import paths from '../utils/paths.ts'
import validateData from '../utils/validate-data.ts'

export type Config = {
    hint_in_timer: boolean
    hint_in_log: boolean,
    macos_bell_say_task: boolean,
    font_WIP: string
}

const default_config = {
    hint_in_timer: true,
    hint_in_log: true,
    macos_bell_say_task: true,
    font_WIP: ''
}

const filePath = paths.getConfig
const data = validateData(filePath, default_config)

const pardedData = JSON.parse(data)

const configWorker = {
    get: () => { return pardedData as Config }
}

export default configWorker