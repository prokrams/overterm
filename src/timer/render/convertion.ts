import { argsHours, argsMinutes, argsSeconds } from '../../utils/args.ts'
import render from './render.ts'

export function getAllSeconds() {
    return argsSeconds + (argsMinutes * 60) + (argsHours * 3600)
}

export function getAllMiliseconds() {
    return (argsSeconds + (argsMinutes * 60) + (argsHours * 3600)) * 1000
}

export function timeConverter(seconds: number): string[] {
    let result = []
    let finalSeconds: number = seconds
    let finalMinutes: number = Math.floor(finalSeconds / 60)
    let finalHours: number = Math.floor(finalMinutes / 60)
    
    if (finalSeconds >= 60) {
        finalSeconds = finalSeconds % 60
    }

    if (finalMinutes >= 60) {
        finalMinutes = finalMinutes % 60
    }

    if (finalHours) {
        const digits = finalHours.toString().split('')
        digits.length === 1 && digits.unshift('0')
        result.push(digits)
        result.push('colon')
    }
    if (finalMinutes) {
        const digits = finalMinutes.toString().split('')
        digits.length === 1 && digits.unshift('0')
        result.push(digits)
        result.push('colon')
    } else {
        result.push('0', '0')
        result.push('colon')
    }
    if (!finalSeconds) {
        result.push('0', '0')
    } else {
        const digits = finalSeconds.toString().split('')
        digits.length === 1 && digits.unshift('0')
        result.push(digits)
    }

    return result.flat()
}

export function renderConvertionTime(seconds: number) {
    render(timeConverter(seconds))
}