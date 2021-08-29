import { FC } from "react";
import { LabeledShelf } from "../../components/LabeledShelf/LabeledShelf";
import { useBookContext } from "../../context/BookContext";
import {
  KeyOfShelfWithoutReturn,
  Shelf,
  shelfWithoutReturn,
} from "../../types/Shelf";
import "./main.css";

export const Main: FC = () => {
  const { books } = useBookContext();

  return (
    <div className="mainPageContainer">
      {Object.keys(shelfWithoutReturn).map((key, idx) => {
        const shelfKey = key as KeyOfShelfWithoutReturn;
        return (
          <LabeledShelf
            key={idx}
            books={books.filter((book) => Shelf[shelfKey] === book.shelf)}
            styles={{ marginBottom: 20 }}
            label={shelfKey}
          />
        );
      })}
    </div>
  );
};
