import pkg from '../../package.json' with { type: 'json' }

export default function version() {
    console.log(`${pkg.name} ${pkg.version}`)
}