import { FC } from "react";
import { Book } from "../../types/Book";
import { KeyOfShelfWithoutReturn } from "../../types/Shelf";
import { Styles } from "../../types/Styles";
import { formatLabel } from "../../utils/formatLabel";
import { ReadingBook } from "../ReadingBook/ReadingBook";
import "./labeledShelf.css";

/**
 * @param {string} [label="CURRENTLY_READING"] - Defaults to CURRENTLY_READING
 */

export const LabeledShelf: FC<{
  label?: KeyOfShelfWithoutReturn;
  books?: Book[];
  styles?: Styles;
}> = ({ books, label = "CURRENTLY_READING", styles = {}, ...rest }) => (
  <div className="labeledShelf" style={{ ...styles }} {...rest}>
    <label>{formatLabel(label as KeyOfShelfWithoutReturn)}</label>
    <div className="divider" />
    <div className="bookRow">
      {books ? (
        books.map((book) => (
          <ReadingBook
            key={book.id}
            book={book}
            styles={{ margin: "0 10px" }}
          />
        ))
      ) : (
        <p style={{ color: "black" }}>Nothing to see here!</p>
      )}
    </div>
  </div>
);
