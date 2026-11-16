import paths from '../utils/paths.ts'
import validateData from '../utils/validate-data.ts'

export type Config = {
    hint_in_timer: boolean
    hint_in_log: boolean
    font_WIP: string
    bell: boolean
    macos_bell_say: boolean
    macos_bell_say_task: boolean
}

const defaultConfig = {
    hint_in_timer: true,
    hint_in_log: true,
    font_WIP: '',
    bell: true,
    macos_bell_say_task: false,
    macos_bell_say: false,
}

let cacheConfig: Config | undefined

function getFile() {
    const filePath = paths.getConfig
    const data = validateData(filePath, defaultConfig)
    try {
        const parsedConfig = JSON.parse(data) as Config
        const mergedConfig = {...defaultConfig, ...parsedConfig}
        return mergedConfig
    } catch (err) {
        if (err instanceof Error) console.error(`[PARSE_CONFIG] Config path: ${paths.getConfig}
[PARSE_CONFIG] ERROR: ${err.message}`)
        process.exit(1)
    }
}

export default function configWorker() {
    if (!cacheConfig) cacheConfig = getFile()
    return cacheConfig
}
