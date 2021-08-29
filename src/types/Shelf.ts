export enum Shelf {
  CURRENTLY_READING = "currentlyReading",
  WANT_TO_READ = "wantToRead",
  READ = "read",
  NONE = "none",
}

export type KeyOfShelf = keyof typeof Shelf;

const { NONE, ...withoutReturn } = Shelf;

export const shelfWithoutReturn = withoutReturn;

export type ShelfWithoutReturn = typeof shelfWithoutReturn;

export type KeyOfShelfWithoutReturn = keyof typeof shelfWithoutReturn;
