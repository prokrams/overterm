import os from 'node:os'
import path from 'node:path'

const homedir = os.homedir()
const appname = 'overterm'

function getPaths(file: 'config' | 'logs') {
    let start: string | undefined
    switch (process.platform) {
        case 'win32':
            if (file === 'config') {
                start = process.env.APPDATA || path.join(homedir, 'AppData', 'Roaming')
            } else {
                start = process.env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local')
            }
            return path.join(start, `${appname}`, `${file}.json`)
        default:
            if (file === 'config') {
                start = process.env.XDG_CONFIG_HOME || path.join(homedir, '.config')
            } else {
                start = process.env.XDG_DATA_HOME || path.join(homedir, '.local', 'share')
            }
        return path.join(start, `${appname}`, `${file}.json`)
    }
}

const paths = {
    getConfig: getPaths('config'),
    getLogs: getPaths('logs')
}

export default paths