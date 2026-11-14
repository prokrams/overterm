import pkg from '../../package.json' with { type: 'json' }

export default function help() {
    console.log(`
${pkg.name} - ${pkg.description} 

usage: 
    overterm 
        [-s | --seconds] number > 0
        [-m | --minutes] number > 0
        [-H | --hours] number > 0
        [-t | --task] string
        [-v | --version]
        [-h | --help]
        [--config] 

subcommand:
    log         displays the last timers that had a task set
`)
}