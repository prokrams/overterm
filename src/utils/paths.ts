import os from 'node:os'
import path from 'node:path'

const homedir = os.homedir()
const appname = 'overterm'

function getPaths(file: 'config' | 'logs') {
    let start: string | undefined
    let userPath: string
    switch (process.platform) {
        case 'win32':
            if (file === 'config') {
                start = process.env.APPDATA
                userPath = 'Roaming'
            } else {
                start = process.env.LOCALAPPDATA
                userPath = 'Local'
            }
            return start || path.join(homedir, 'AppData', userPath, `${appname}`, `${file}.json`)
        default:
            if (file === 'config') {
                start = process.env.XDG_CONFIG_HOME
                userPath = '.config'
            } else {
                start = process.env.XDG_DATA_HOME
                userPath = '.local'
            }
        return start || path.join(homedir, userPath, userPath === '.local' ? 'share' : '', `${appname}`, `${file}.json`)
    }
}

const paths = {
    getConfig: getPaths('config'),
    getLogs: getPaths('logs')
}

export default paths