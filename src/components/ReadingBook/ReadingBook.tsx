import { FC, useState } from "react";
import { useBookContext } from "../../context/BookContext";
import { Book } from "../../types/Book";
import { Shelf, KeyOfShelf, shelfWithoutReturn } from "../../types/Shelf";
import { Styles } from "../../types/Styles";
import { ValueOf } from "../../types/ValueOf";
import { MoveButton } from "../MoveButton/MoveButton";
import noCover from "../../images/noCover.jpeg";
import "./readingBook.css";

export const ReadingBook: FC<{
  book: Book;
  styles?: Styles;
  currentlyOnShelf?: ValueOf<Shelf>; //optional prop used in search results
}> = ({ book, styles = {}, currentlyOnShelf, ...rest }) => {
  const [hoveredOver, setHoveredOver] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const { updateBook, setBooks } = useBookContext();

  const handleMoustEnterAndLeave = (type: "enter" | "leave") => {
    if (type === "enter") {
      setHoveredOver(true);
      setShowButton(true);
    } else {
      setHoveredOver(false);
    }
  };

  const handleOptionClick = async (value: KeyOfShelf) => {
    const shelfValue = Shelf[value];
    try {
      await updateBook(book.id, shelfValue);
      book.shelf = shelfValue;
      setBooks((books) => [
        ...books.filter((readingBook) => readingBook.id !== book.id),
        book,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const bookCoverSrc = book.imageLinks?.thumbnail ?? noCover;

  const currentShelf = currentlyOnShelf ?? book.shelf;

  const shelfOptions = currentShelf ? Shelf : shelfWithoutReturn;

  return (
    <div {...rest} className="bookContainer" style={{ ...styles }}>
      {/* Book Cover */}
      <div
        className="bookCover"
        onMouseEnter={() => handleMoustEnterAndLeave("enter")}
        onMouseLeave={() => handleMoustEnterAndLeave("leave")}
      >
        <img src={bookCoverSrc} alt="book cover" />
        {/* Move Button */}
        {showButton && (
          <MoveButton
            onAnimationEnd={(animationName) =>
              animationName === "fadeOut" && setShowButton(false)
            }
            onOptionClick={handleOptionClick}
            className={hoveredOver ? "fadeIn" : "fadeOut"}
            shelfOptions={
              Object.keys(shelfOptions).filter((shelfKey) => {
                const key = shelfKey as KeyOfShelf;
                return Shelf[key] !== currentShelf;
              }) as Array<KeyOfShelf>
            }
          />
        )}
      </div>
      {/* Title */}
      <h3 className="bookTitle">{book.title}</h3>
      {/* Authors */}
      {book.authors && (
        <div className="authors">
          {book.authors.map((author, idx) => (
            <h4 key={idx}>{author}</h4>
          ))}
        </div>
      )}
    </div>
  );
};
