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

let cacheConfig: Config | undefined

function getConfig() {
    console.log('___CONFIG READ___')
    const filePath = paths.getConfig
    const data = validateData(filePath, default_config)
    return JSON.parse(data) as Config
}

function cache() {
    if (!cacheConfig) cacheConfig = getConfig()
    return cacheConfig
}

export default function configWorker() {
    cache()
    if (!cacheConfig) throw new Error('[CONFIG] config error')
    return cacheConfig
}
