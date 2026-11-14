import os from 'node:os'
import path from 'node:path'

const homedir = os.homedir()
const appname = 'overterm'

const logs = {
    getConfig: () => {
        switch (process.platform) {
            case 'win32':
                return process.env.APPDATA || path.join(homedir, 'AppData', 'Roaming', `${appname}`, 'config.json')
            default:
                return process.env.XDG_CONFIG_HOME || path.join(homedir, '.config', `${appname}`, 'config.json')
        }
    }
}

export default logs