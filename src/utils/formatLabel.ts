import { KeyOfShelf } from "../types/Shelf";

export const formatLabel = (label: KeyOfShelf ): string => {
    const almost = label.split('_').map((word) => {
        const [firstLetter, ...rest] =  word.toLowerCase().split('')
        return [firstLetter.toUpperCase(),...rest].join("")
    })

    return almost.join(' ')
}