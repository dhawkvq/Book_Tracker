import { FC, useState } from "react";
import { ReadingBook } from "../../components/ReadingBook/ReadingBook";
import { useBookContext } from "../../context/BookContext";
import { useDebouncedCallback } from "use-debounce/lib";
import { Book } from "../../types/Book";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import "./search.css";
import { SearchMessage } from "../../components/SearchMessage/SearchMessage";

export const Search: FC = () => {
  const { search, books } = useBookContext();
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [queryError, setQueryError] = useState("");
  const debounceSearchResults = useDebouncedCallback(async (query: string) => {
    setQueryError("");
    if (!query) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const result = await search(query);
      setSearchResults(result);
    } catch (error) {
      console.error(error);
      setQueryError(error);
      setSearchResults([]);
    }
  }, 1000);

  return (
    <div className="searchPage">
      <div className="absoluteContainer">
        <div className="searchContainer">
          <input
            className="searchInput"
            type="text"
            onChange={(e) => debounceSearchResults(e.currentTarget.value)}
            placeholder="Search for books!"
          />
          <SearchIcon
            className={`feather-search ${loading ? "loading" : ""}`}
            onTransitionEnd={() => setLoading(false)}
          />
        </div>
      </div>
      <div className="resultsContainer">
        {!!searchResults.length ? (
          searchResults.map((book) => (
            <ReadingBook
              key={book.id}
              book={book}
              styles={{ margin: "20px 10px 0 10px" }}
              currentlyOnShelf={books.find(({ id }) => id === book.id)?.shelf}
            />
          ))
        ) : (
          <SearchMessage queryError={!!queryError} />
        )}
      </div>
    </div>
  );
};
