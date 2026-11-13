import pkg from '../../package.json' with { type: 'json' }

export default function help() {
    console.log(`
${pkg.name} - ${pkg.description} 

usage: 
    overterm 
        [-s | --seconds] number
        [-m | --minutes] number
        [-h | --hours] number
        [-t | --task] string
        [-v | --version]
        [--help]

subcommands:
    log         displays the last timers that had a task set
    config      displays the location of the config
`)
}