import { KeyOfShelf, KeyOfShelfWithoutReturn } from "../types/Shelf";

export const formatLabel = (
  label: KeyOfShelf | KeyOfShelfWithoutReturn
): string => {
  const almost = label.split("_").map((word) => {
    const [firstLetter, ...rest] = word.toLowerCase().split("");
    return [firstLetter.toUpperCase(), ...rest].join("");
  });

  return almost.join(" ");
};
