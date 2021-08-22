export enum Shelf {
    CURRENTLY_READING = 'currentlyReading',
    WANT_TO_READ = 'wantToRead',
    READ = 'read'
}

export type KeyOfShelf = keyof typeof Shelf;